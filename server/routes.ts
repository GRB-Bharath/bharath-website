import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { sendEmailNotification } from "./lib/email";
import { registerAdminRoutes } from "./routes/admin";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    try {
      let resumePath;
      const resumeFilename = "Bharath_Resume.pdf";
      
      console.log(`[Resume API] NODE_ENV: ${process.env.NODE_ENV}`);
      console.log(`[Resume API] Process CWD: ${process.cwd()}`);
      console.log(`[Resume API] __dirname equivalent: ${import.meta.dirname}`);
      
      // Try different possible paths
      const possiblePaths = [
        path.resolve(process.cwd(), "dist", "public", "documents", resumeFilename),
        path.resolve(import.meta.dirname, "..", "dist", "public", "documents", resumeFilename),
        path.resolve(process.cwd(), "client", "public", "documents", resumeFilename),
        path.resolve(import.meta.dirname, "..", "client", "public", "documents", resumeFilename),
      ];
      
      console.log(`[Resume API] Trying paths:`, possiblePaths);
      
      for (const testPath of possiblePaths) {
        console.log(`[Resume API] Testing path: ${testPath} - exists: ${fs.existsSync(testPath)}`);
        if (fs.existsSync(testPath)) {
          resumePath = testPath;
          break;
        }
      }
      
      if (!resumePath) {
        console.log(`[Resume API] Resume not found in any of the attempted paths`);
        return res.status(404).json({ 
          error: "Resume not found", 
          searchedPaths: possiblePaths,
          cwd: process.cwd(),
          dirname: import.meta.dirname
        });
      }
      
      console.log(`[Resume API] Found resume at: ${resumePath}`);
      
      // Get file stats for ETag
      const stats = fs.statSync(resumePath);
      const etag = `"${stats.mtime.getTime()}-${stats.size}"`;
      
      res.setHeader('Content-Type', 'application/pdf');
      // Force inline display (preview) instead of download
      res.setHeader('Content-Disposition', 'inline; filename="Bharath_Resume.pdf"');
      // Prevent caching to ensure latest version is always served
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
      res.setHeader('ETag', etag);
      
      res.sendFile(resumePath);
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({ 
        error: "Failed to serve resume", 
        details: error instanceof Error ? error.message : String(error)
      });
    }
  });
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Send email notification
      await sendEmailNotification(contact);
      
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to send message. Please try again." 
      });
    }
  });

  // Get all contacts (for admin use)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({ message: "Failed to fetch contacts" });
    }
  });

  // Register admin routes
  registerAdminRoutes(app);

  const httpServer = createServer(app);
  return httpServer;
}
