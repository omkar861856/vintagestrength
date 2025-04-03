import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-dark text-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-light text-3xl md:text-4xl font-bold mb-6">Membership Options</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-light text-lg opacity-90">
            Invest in yourself with a membership plan that fits your needs and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <Card className="vintage-card rounded-lg overflow-hidden border border-secondary bg-transparent">
            <CardHeader className="bg-primary p-6 text-center">
              <h3 className="font-display text-2xl text-light mb-1">BRONZE</h3>
              <div className="text-secondary font-heading text-lg">Essential Package</div>
            </CardHeader>
            <CardContent className="bg-light text-dark p-6">
              <div className="text-center mb-6">
                <span className="text-3xl font-bold">$49</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="mb-8">
                <li className="flex items-start mb-4">
                  <Check className="text-accent mt-1 mr-3 h-5 w-5" />
                  <span>Gym access Mon-Fri (6am-8pm)</span>
                </li>
                <li className="flex items-start mb-4">
                  <Check className="text-accent mt-1 mr-3 h-5 w-5" />
                  <span>Basic equipment access</span>
                </li>
                <li className="flex items-start mb-4">
                  <Check className="text-accent mt-1 mr-3 h-5 w-5" />
                  <span>1 group class per week</span>
                </li>
                <li className="flex items-start mb-4">
                  <Check className="text-accent mt-1 mr-3 h-5 w-5" />
                  <span>Fitness assessment</span>
                </li>
                <li className="flex items-start mb-4 opacity-50">
                  <X className="mt-1 mr-3 h-5 w-5" />
                  <span>Personal training sessions</span>
                </li>
                <li className="flex items-start mb-4 opacity-50">
                  <X className="mt-1 mr-3 h-5 w-5" />
                  <span>Nutrition consultation</span>
                </li>
              </ul>
              <a href="#join-now" className="block text-center">
                <Button className="vintage-button w-full bg-primary hover:bg-primary-dark text-light font-display tracking-wider px-6 py-3 rounded shadow-lg transition duration-300">
                  SELECT PLAN
                </Button>
              </a>
            </CardContent>
          </Card>
          
          {/* Standard Plan - Highlighted */}
          <Card className="vintage-card rounded-lg overflow-hidden border-2 border-accent transform md:-translate-y-4 relative z-10 shadow-xl bg-transparent">
            <div className="absolute top-0 right-0 bg-accent text-white font-bold py-1 px-4 text-sm">
              MOST POPULAR
            </div>
            <CardHeader className="bg-primary p-6 text-center">
              <h3 className="font-display text-2xl text-light mb-1">SILVER</h3>
              <div className="text-secondary font-heading text-lg">Performance Package</div>
            </CardHeader>
            <CardContent className="bg-light text-dark p-6">
              <div className="text-center mb-6">
                <span className="text-3xl font-bold">$79</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="mb-8">
                <li className="flex items-start mb-4">
                  <Check className="text-accent mt-1 mr-3 h-5 w-5" />
                  <span>Gym access 24/7</span>
                </li>
                <li className="flex items-start mb-4">
                  <Check className="text-accent mt-1 mr-3 h-5 w-5" />
                  <span>Full equipment access</span>
                </li>
                <li className="flex items-start mb-4">
                  <Check className="text-accent mt-1 mr-3 h-5 w-5" />
                  <span>Unlimited group classes</span>
                </li>
                <li className="flex items-start mb-4">
                  <Check className="text-accent mt-1 mr-3 h-5 w-5" />
                  <span>Monthly fitness assessment</span>
                </li>
                <li className="flex items-start mb-4">
                  <Check className="text-accent mt-1 mr-3 h-5 w-5" />
                  <span>2 personal training sessions</span>
                </li>
                <li className="flex items-start mb-4 opacity-50">
                  <X className="mt-1 mr-3 h-5 w-5" />
                  <span>Nutrition consultation</span>
                </li>
              </ul>
              <a href="#join-now" className="block text-center">
                <Button className="vintage-button w-full bg-accent hover:bg-red-700 text-white font-display tracking-wider px-6 py-3 rounded shadow-lg transition duration-300">
                  SELECT PLAN
                </Button>
              </a>
            </CardContent>
          </Card>
          
          {/* Premium Plan */}
          <Card className="vintage-card rounded-lg overflow-hidden border border-secondary bg-transparent">
            <CardHeader className="bg-primary p-6 text-center">
              <h3 className="font-display text-2xl text-light mb-1">GOLD</h3>
              <div className="text-secondary font-heading text-lg">Elite Package</div>
            </CardHeader>
            <CardContent className="bg-light text-dark p-6">
              <div className="text-center mb-6">
                <span className="text-3xl font-bold">$129</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="mb-8">
                <li className="flex items-start mb-4">
                  <Check className="text-accent mt-1 mr-3 h-5 w-5" />
                  <span>Gym access 24/7</span>
                </li>
                <li className="flex items-start mb-4">
                  <Check className="text-accent mt-1 mr-3 h-5 w-5" />
                  <span>Premium equipment access</span>
                </li>
                <li className="flex items-start mb-4">
                  <Check className="text-accent mt-1 mr-3 h-5 w-5" />
                  <span>Unlimited group classes</span>
                </li>
                <li className="flex items-start mb-4">
                  <Check className="text-accent mt-1 mr-3 h-5 w-5" />
                  <span>Bi-weekly fitness assessment</span>
                </li>
                <li className="flex items-start mb-4">
                  <Check className="text-accent mt-1 mr-3 h-5 w-5" />
                  <span>4 personal training sessions</span>
                </li>
                <li className="flex items-start mb-4">
                  <Check className="text-accent mt-1 mr-3 h-5 w-5" />
                  <span>Monthly nutrition consultation</span>
                </li>
              </ul>
              <a href="#join-now" className="block text-center">
                <Button className="vintage-button w-full bg-primary hover:bg-primary-dark text-light font-display tracking-wider px-6 py-3 rounded shadow-lg transition duration-300">
                  SELECT PLAN
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-secondary text-lg mb-6">Not sure which plan is right for you?</p>
          <a href="#contact">
            <Button 
              variant="outline" 
              className="vintage-button bg-transparent border-2 border-secondary hover:border-accent text-secondary hover:text-accent font-display tracking-wider px-8 py-3 rounded shadow-lg transition duration-300"
            >
              SCHEDULE A CONSULTATION
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
