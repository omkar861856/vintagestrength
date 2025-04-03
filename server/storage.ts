import { inquiries, type Inquiry, type InsertInquiry } from "@shared/schema";
import { subscriptions, type Subscription, type InsertSubscription } from "@shared/schema";
import { users, type User, type InsertUser } from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Inquiry methods
  getInquiries(): Promise<Inquiry[]>;
  getInquiry(id: number): Promise<Inquiry | undefined>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  
  // Subscription methods
  getSubscriptions(): Promise<Subscription[]>;
  getSubscriptionByEmail(email: string): Promise<Subscription | undefined>;
  createSubscription(subscription: InsertSubscription): Promise<Subscription>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private inquiries: Map<number, Inquiry>;
  private subscriptions: Map<number, Subscription>;
  private currentUserId: number;
  private currentInquiryId: number;
  private currentSubscriptionId: number;

  constructor() {
    this.users = new Map();
    this.inquiries = new Map();
    this.subscriptions = new Map();
    this.currentUserId = 1;
    this.currentInquiryId = 1;
    this.currentSubscriptionId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Inquiry methods
  async getInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values());
  }
  
  async getInquiry(id: number): Promise<Inquiry | undefined> {
    return this.inquiries.get(id);
  }
  
  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.currentInquiryId++;
    const createdAt = new Date();
    
    // Create a proper Inquiry object with correct types
    const inquiry: Inquiry = {
      id,
      name: insertInquiry.name,
      email: insertInquiry.email,
      phone: insertInquiry.phone ?? null, // Use nullish coalescing to handle undefined
      message: insertInquiry.message,
      createdAt
    };
    
    this.inquiries.set(id, inquiry);
    return inquiry;
  }
  
  // Subscription methods
  async getSubscriptions(): Promise<Subscription[]> {
    return Array.from(this.subscriptions.values());
  }
  
  async getSubscriptionByEmail(email: string): Promise<Subscription | undefined> {
    return Array.from(this.subscriptions.values()).find(
      (subscription) => subscription.email === email,
    );
  }
  
  async createSubscription(insertSubscription: InsertSubscription): Promise<Subscription> {
    const id = this.currentSubscriptionId++;
    const createdAt = new Date();
    const subscription: Subscription = { ...insertSubscription, id, createdAt };
    this.subscriptions.set(id, subscription);
    return subscription;
  }
}

export const storage = new MemStorage();
