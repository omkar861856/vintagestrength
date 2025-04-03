import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section id="join-now" className="py-16 bg-primary text-light">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-light text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Transformation?</h2>
        <p className="text-light text-xl max-w-3xl mx-auto mb-8 opacity-90">
          Join Iron & Grit today and experience the difference that traditional, effective training can make.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#pricing">
            <Button className="vintage-button bg-accent hover:bg-red-700 text-white font-display tracking-wider px-8 py-3 rounded shadow-lg transition duration-300 text-xl">
              JOIN NOW
            </Button>
          </a>
          <a href="#contact">
            <Button 
              variant="outline"
              className="vintage-button bg-transparent border-2 border-light hover:border-secondary text-light hover:text-secondary font-display tracking-wider px-8 py-3 rounded shadow-lg transition duration-300 text-xl"
            >
              CONTACT US
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
