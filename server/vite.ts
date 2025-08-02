import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(import.meta.dirname, "..", "dist", "public");
  const documentsPath = path.resolve(distPath, "documents");
  const resumePath = path.resolve(documentsPath, "Bharath_Resume.pdf");

  console.log(`[Static] Server dirname: ${import.meta.dirname}`);
  console.log(`[Static] Process cwd: ${process.cwd()}`);
  console.log(`[Static] Dist path: ${distPath}`);
  console.log(`[Static] Documents path: ${documentsPath}`);
  console.log(`[Static] Resume path: ${resumePath}`);
  console.log(`[Static] Dist path exists: ${fs.existsSync(distPath)}`);
  console.log(`[Static] Documents path exists: ${fs.existsSync(documentsPath)}`);
  console.log(`[Static] Resume file exists: ${fs.existsSync(resumePath)}`);

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Log all files in the dist directory for debugging
  if (fs.existsSync(distPath)) {
    console.log(`[Static] Files in ${distPath}:`, fs.readdirSync(distPath));
    if (fs.existsSync(documentsPath)) {
      console.log(`[Static] Files in documents:`, fs.readdirSync(documentsPath));
    }
  }

  // Explicitly handle documents route with proper headers - BEFORE general static middleware
  app.get('/documents/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.resolve(documentsPath, filename);
    
    console.log(`[Documents] Requested file: ${filename}`);
    console.log(`[Documents] Full path: ${filePath}`);
    console.log(`[Documents] File exists: ${fs.existsSync(filePath)}`);

    if (!fs.existsSync(filePath)) {
      console.log(`[Documents] File not found: ${filePath}`);
      return res.status(404).json({ error: 'File not found', path: filePath });
    }

    // Set appropriate headers for PDF
    if (filename.endsWith('.pdf')) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `inline; filename="${filename}"`);
      res.setHeader('Cache-Control', 'public, max-age=3600');
    }

    console.log(`[Documents] Serving file: ${filePath}`);
    res.sendFile(filePath);
  });

  // General static file serving
  app.use(express.static(distPath, {
    setHeaders: (res, path, stat) => {
      console.log(`[Static] Serving static file: ${path}`);
    }
  }));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    const indexPath = path.resolve(import.meta.dirname, "..", "dist", "index.html");
    console.log(`[Static] Serving index.html from: ${indexPath}`);
    res.sendFile(indexPath);
  });
}
