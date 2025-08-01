import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { sendEmailNotification } from "./lib/email";
import { registerAdminRoutes } from "./routes/admin";

export async function registerRoutes(app: Express): Promise<Server> {
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
