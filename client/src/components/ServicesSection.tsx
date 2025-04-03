import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Dumbbell, Activity, Users } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-vintage-paper bg-cover bg-center relative">
      <div className="absolute inset-0 bg-primary bg-opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Services</h2>
          <div className="section-divider"></div>
          <p className="text-dark text-lg">
            Choose from our range of training programs designed to build strength, endurance, and character.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Service 1 */}
          <Card className="vintage-card bg-white bg-opacity-90 border border-secondary rounded-lg overflow-hidden shadow-lg">
            <div className="w-full h-56 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Personal Training" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-heading text-primary text-2xl font-bold mb-3">Personal Training</h3>
              <p className="text-dark mb-4">
                One-on-one coaching tailored to your specific goals, whether you're looking to build strength, lose weight, or improve athletic performance.
              </p>
              <ul className="text-dark mb-5">
                <li className="flex items-center mb-2">
                  <Check className="text-accent mr-2 h-5 w-5" />
                  Customized workout programs
                </li>
                <li className="flex items-center mb-2">
                  <Check className="text-accent mr-2 h-5 w-5" />
                  Nutrition guidance
                </li>
                <li className="flex items-center">
                  <Check className="text-accent mr-2 h-5 w-5" />
                  Progress tracking
                </li>
              </ul>
              <a href="#contact">
                <Button className="vintage-button bg-primary hover:bg-primary-dark text-light font-display tracking-wider shadow transition duration-300">
                  LEARN MORE
                </Button>
              </a>
            </CardContent>
          </Card>
          
          {/* Service 2 */}
          <Card className="vintage-card bg-white bg-opacity-90 border border-secondary rounded-lg overflow-hidden shadow-lg">
            <div className="w-full h-56 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Group Classes" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-heading text-primary text-2xl font-bold mb-3">Group Classes</h3>
              <p className="text-dark mb-4">
                High-energy group sessions that combine classic strength training with modern conditioning techniques for a complete workout.
              </p>
              <ul className="text-dark mb-5">
                <li className="flex items-center mb-2">
                  <Check className="text-accent mr-2 h-5 w-5" />
                  Motivating group environment
                </li>
                <li className="flex items-center mb-2">
                  <Check className="text-accent mr-2 h-5 w-5" />
                  Various class types
                </li>
                <li className="flex items-center">
                  <Check className="text-accent mr-2 h-5 w-5" />
                  All fitness levels welcome
                </li>
              </ul>
              <a href="#schedule">
                <Button className="vintage-button bg-primary hover:bg-primary-dark text-light font-display tracking-wider shadow transition duration-300">
                  VIEW SCHEDULE
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 3 */}
          <Card className="vintage-card bg-white bg-opacity-90 border border-secondary rounded-lg overflow-hidden shadow-lg">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                <Dumbbell className="text-light text-xl h-6 w-6" />
              </div>
              <h3 className="font-heading text-primary text-xl font-bold mb-3">Strength & Conditioning</h3>
              <p className="text-dark mb-4">
                Build functional strength and improve overall fitness with our comprehensive program.
              </p>
              <a href="#contact" className="text-accent hover:text-primary font-bold flex items-center">
                Discover More 
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </a>
            </CardContent>
          </Card>
          
          {/* Service 4 */}
          <Card className="vintage-card bg-white bg-opacity-90 border border-secondary rounded-lg overflow-hidden shadow-lg">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                <Activity className="text-light text-xl h-6 w-6" />
              </div>
              <h3 className="font-heading text-primary text-xl font-bold mb-3">Wellness Coaching</h3>
              <p className="text-dark mb-4">
                Holistic approach to wellness including nutrition, recovery, and lifestyle guidance.
              </p>
              <a href="#contact" className="text-accent hover:text-primary font-bold flex items-center">
                Discover More 
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </a>
            </CardContent>
          </Card>
          
          {/* Service 5 */}
          <Card className="vintage-card bg-white bg-opacity-90 border border-secondary rounded-lg overflow-hidden shadow-lg">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                <Users className="text-light text-xl h-6 w-6" />
              </div>
              <h3 className="font-heading text-primary text-xl font-bold mb-3">Specialty Programs</h3>
              <p className="text-dark mb-4">
                Targeted programs for seniors, athletes, rehabilitation, and specific fitness goals.
              </p>
              <a href="#contact" className="text-accent hover:text-primary font-bold flex items-center">
                Discover More 
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
