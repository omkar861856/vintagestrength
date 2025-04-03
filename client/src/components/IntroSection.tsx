import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, Users, Heart } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="bg-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Forged in Tradition, Built for Today</h2>
          <div className="section-divider"></div>
          <p className="text-dark text-lg">
            At Iron & Grit, we believe in combining the time-honored training methods of the golden era 
            with modern science to create the perfect fitness experience. No fads. No shortcuts. 
            Just authentic, proven results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <Card className="vintage-card border border-secondary rounded-lg shadow-md overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                <Dumbbell className="text-light text-2xl h-8 w-8" />
              </div>
              <h3 className="font-heading text-primary text-xl font-bold mb-3">Classic Equipment</h3>
              <p className="text-dark">
                Free weights, kettlebells, and purposeful machines that build functional strength the way nature intended.
              </p>
            </CardContent>
          </Card>
          
          {/* Feature 2 */}
          <Card className="vintage-card border border-secondary rounded-lg shadow-md overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                <Users className="text-light text-2xl h-8 w-8" />
              </div>
              <h3 className="font-heading text-primary text-xl font-bold mb-3">Expert Coaching</h3>
              <p className="text-dark">
                Trainers who understand the timeless principles of strength, conditioning, and proper form.
              </p>
            </CardContent>
          </Card>
          
          {/* Feature 3 */}
          <Card className="vintage-card border border-secondary rounded-lg shadow-md overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                <Heart className="text-light text-2xl h-8 w-8" />
              </div>
              <h3 className="font-heading text-primary text-xl font-bold mb-3">Supportive Community</h3>
              <p className="text-dark">
                A fellowship of like-minded individuals committed to helping each other achieve greatness.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
