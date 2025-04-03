import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema, insertSubscriptionSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefix with /api
  
  // Inquiry submission endpoint
  app.post("/api/inquiries", async (req: Request, res: Response) => {
    try {
      const inquiryData = insertInquirySchema.parse(req.body);
      const newInquiry = await storage.createInquiry(inquiryData);
      res.status(201).json({ 
        message: "Inquiry submitted successfully", 
        inquiry: newInquiry 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Invalid inquiry data", 
          errors: validationError.message 
        });
      } else {
        res.status(500).json({ 
          message: "Failed to submit inquiry" 
        });
      }
    }
  });
  
  // Newsletter subscription endpoint
  app.post("/api/subscriptions", async (req: Request, res: Response) => {
    try {
      const subscriptionData = insertSubscriptionSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscription = await storage.getSubscriptionByEmail(subscriptionData.email);
      if (existingSubscription) {
        return res.status(409).json({ 
          message: "Email already subscribed" 
        });
      }
      
      const newSubscription = await storage.createSubscription(subscriptionData);
      res.status(201).json({ 
        message: "Subscription successful", 
        subscription: newSubscription 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Invalid subscription data", 
          errors: validationError.message 
        });
      } else {
        res.status(500).json({ 
          message: "Failed to subscribe" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
