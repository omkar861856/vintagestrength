import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export default function Footer() {
  const { toast } = useToast();
  
  // Newsletter form setup
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
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
      form.reset();
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
  
  function onSubmit(data: NewsletterFormValues) {
    newsletterMutation.mutate(data);
  }

  return (
    <footer className="bg-dark text-light py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center mb-4">
              <svg
                className="h-10 w-10 rounded-full mr-2 text-light"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18h-1a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1" />
                <path d="M18 18h1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1" />
                <path d="M8 18V4" />
                <path d="M16 18V4" />
                <line x1="10" y1="18" x2="14" y2="18" />
                <line x1="10" y1="4" x2="14" y2="4" />
              </svg>
              <span className="text-2xl font-bold font-heading">IRON & GRIT</span>
            </a>
            <p className="max-w-xs opacity-80">
              Classic training methods for modern bodies. Building strength, character, and community since 2005.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-heading text-secondary text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-secondary transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
                <li><a href="#pricing" className="hover:text-secondary transition-colors">Membership</a></li>
                <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading text-secondary text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-secondary transition-colors">Personal Training</a></li>
                <li><a href="#services" className="hover:text-secondary transition-colors">Group Classes</a></li>
                <li><a href="#services" className="hover:text-secondary transition-colors">Strength Training</a></li>
                <li><a href="#services" className="hover:text-secondary transition-colors">Wellness Coaching</a></li>
                <li><a href="#services" className="hover:text-secondary transition-colors">Specialty Programs</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-heading text-secondary text-lg font-bold mb-4">Newsletter</h4>
              <p className="mb-4 opacity-80">Subscribe to receive fitness tips, news and special offers.</p>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input 
                            placeholder="Your email" 
                            className="border-secondary focus:ring-primary rounded-r-none w-full text-dark" 
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
            </div>
          </div>
        </div>
        
        <hr className="vintage-divider mb-6" />
        
        <div className="text-center opacity-80 text-sm">
          <p>&copy; {new Date().getFullYear()} Iron & Grit Fitness. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="inline-block mx-2 hover:text-secondary transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="inline-block mx-2 hover:text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
