import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  
  // Contact form setup
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  
  // Newsletter form setup
  const newsletterForm = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });
  
  // Contact form submission handler
  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/inquiries", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    },
  });
  
  // Newsletter subscription handler
  const newsletterMutation = useMutation({
    mutationFn: async (data: NewsletterFormValues) => {
      const response = await apiRequest("POST", "/api/subscriptions", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "You've been subscribed to our newsletter.",
      });
      newsletterForm.reset();
    },
    onError: (error: any) => {
      if (error.message?.includes("409")) {
        toast({
          title: "Already Subscribed",
          description: "This email is already subscribed to our newsletter.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to subscribe. Please try again.",
          variant: "destructive",
        });
      }
    },
  });
  
  function onContactSubmit(data: ContactFormValues) {
    contactMutation.mutate(data);
  }
  
  function onNewsletterSubmit(data: NewsletterFormValues) {
    newsletterMutation.mutate(data);
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Get in Touch</h2>
          <div className="section-divider"></div>
          <p className="text-dark text-lg">
            Have questions or ready to get started? Reach out to our team.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <Card className="border border-secondary rounded-lg shadow-lg">
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onContactSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-heading text-primary font-bold">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="border-secondary focus:ring-primary" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-heading text-primary font-bold">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email" 
                              className="border-secondary focus:ring-primary" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-heading text-primary font-bold">Phone</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your phone number" 
                              className="border-secondary focus:ring-primary" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-heading text-primary font-bold">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message" 
                              className="border-secondary focus:ring-primary" 
                              rows={4} 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="vintage-button w-full bg-accent hover:bg-red-700 text-white font-display tracking-wider py-3 rounded shadow-lg transition duration-300"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? "SENDING..." : "SEND MESSAGE"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:w-1/2">
            <Card className="border border-secondary rounded-lg shadow-lg mb-8">
              <CardContent className="p-6">
                <h3 className="font-heading text-primary text-2xl font-bold mb-4">Contact Information</h3>
                <div className="flex items-start mb-4">
                  <MapPin className="text-accent mt-1 mr-3 h-5 w-5" />
                  <div>
                    <span className="block font-bold">Address:</span>
                    <address className="not-italic">123 Strength Avenue<br />Irontown, NY 12345</address>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <Phone className="text-accent mt-1 mr-3 h-5 w-5" />
                  <div>
                    <span className="block font-bold">Phone:</span>
                    <a href="tel:+15551234567" className="hover:text-accent transition-colors">(555) 123-4567</a>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <Mail className="text-accent mt-1 mr-3 h-5 w-5" />
                  <div>
                    <span className="block font-bold">Email:</span>
                    <a href="mailto:info@ironandgrit.com" className="hover:text-accent transition-colors">info@ironandgrit.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-accent mt-1 mr-3 h-5 w-5" />
                  <div>
                    <span className="block font-bold">Hours:</span>
                    <p>Monday - Friday: 5:00 AM - 10:00 PM<br />
                    Saturday: 7:00 AM - 8:00 PM<br />
                    Sunday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-secondary rounded-lg shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-heading text-primary text-2xl font-bold mb-4">Follow Us</h3>
                <p className="mb-4">Stay connected and get inspired by following us on social media.</p>
                <div className="flex gap-4 mb-6">
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-light hover:bg-accent transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-light hover:bg-accent transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-light hover:bg-accent transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-light hover:bg-accent transition-colors">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
                
                <h4 className="font-heading text-primary text-xl font-bold mb-3">Subscribe to our Newsletter</h4>
                <Form {...newsletterForm}>
                  <form onSubmit={newsletterForm.handleSubmit(onNewsletterSubmit)} className="flex">
                    <FormField
                      control={newsletterForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input 
                              placeholder="Your email" 
                              className="border-secondary focus:ring-primary rounded-r-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="bg-accent hover:bg-red-700 rounded-l-none"
                      disabled={newsletterMutation.isPending}
                    >
                      <Mail className="h-5 w-5" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
