import { Medal, Users, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1544033527-b192daee1f5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Vintage Gym Equipment" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="font-heading text-primary text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="w-24 h-1 bg-secondary mb-6"></div>
            <p className="text-dark text-lg mb-6">
              Founded in 2005 by former strength athlete James Wright, Iron & Grit was born from a simple belief: the tried and true methods of the past, combined with today's knowledge, create the most effective fitness experience.
            </p>
            <p className="text-dark text-lg mb-6">
              Disappointed by the trend of flashy gyms with little substance, James created a space where serious fitness enthusiasts could train with purpose, using equipment and methods that have stood the test of time.
            </p>
            <p className="text-dark text-lg mb-8">
              Today, Iron & Grit has grown into a community of dedicated individuals who value authentic training, supportive relationships, and real results. Our trainers are selected not just for their credentials, but for their passion and commitment to our philosophy.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-3">
                  <Medal className="text-light text-xl h-6 w-6" />
                </div>
                <div>
                  <span className="block text-2xl font-bold text-primary">15+</span>
                  <span className="text-dark">Years Experience</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-3">
                  <Users className="text-light text-xl h-6 w-6" />
                </div>
                <div>
                  <span className="block text-2xl font-bold text-primary">1000+</span>
                  <span className="text-dark">Members</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-3">
                  <Award className="text-light text-xl h-6 w-6" />
                </div>
                <div>
                  <span className="block text-2xl font-bold text-primary">12</span>
                  <span className="text-dark">Certified Trainers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
