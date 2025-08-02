import express, { type Request, Response, NextFunction } from "express";
import session from "express-session";
import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
const require = createRequire(import.meta.url);
const SQLiteStore = require('connect-sqlite3')(session);
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

// Global error handlers for unhandled promises
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Ensure session database directory exists
const sessionDbPath = process.env.SQLITE_DB_PATH || '/tmp';
if (process.env.NODE_ENV === 'production') {
  try {
    if (!fs.existsSync(sessionDbPath)) {
      fs.mkdirSync(sessionDbPath, { recursive: true });
    }
    console.log('Session database directory:', sessionDbPath);
  } catch (error) {
    console.error('Error creating session directory:', error);
  }
}

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'bharath-portfolio-admin-secret-key-2024',
  resave: false,
  saveUninitialized: false,
  store: process.env.NODE_ENV === 'production'
    ? new SQLiteStore({ 
        db: 'sessions.db', 
        dir: process.env.SQLITE_DB_PATH || '/tmp',
        concurrentDB: true 
      })
    : undefined,
  cookie: {
    secure: false, // Set to false for now since Render might not have HTTPS internally
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  const host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost';
  
  server.listen(port, host, () => {
    log(`serving on ${host}:${port}`);
  });
})();
