import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative">
      {/* Mobile Navigation Toggle */}
      <div className="lg:hidden absolute top-4 right-4 z-50">
        <Button 
          variant="default" 
          size="icon" 
          className="bg-primary text-light"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Desktop Navigation */}
      <nav className={`bg-primary text-light shadow-md hidden lg:block ${scrolled ? 'fixed top-0 w-full z-50' : ''}`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-2xl font-bold font-heading pr-8 border-r border-secondary">
                <a href="#" className="flex items-center">
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
                  <span>IRON & GRIT</span>
                </a>
              </div>
              <div className="hidden lg:flex ml-8">
                <a href="#" className="px-3 py-2 text-light hover:text-secondary transition duration-300">Home</a>
                <a href="#services" className="px-3 py-2 text-light hover:text-secondary transition duration-300">Services</a>
                <a href="#pricing" className="px-3 py-2 text-light hover:text-secondary transition duration-300">Membership</a>
                <a href="#about" className="px-3 py-2 text-light hover:text-secondary transition duration-300">Our Story</a>
                <a href="#schedule" className="px-3 py-2 text-light hover:text-secondary transition duration-300">Schedule</a>
                <a href="#contact" className="px-3 py-2 text-light hover:text-secondary transition duration-300">Contact</a>
              </div>
            </div>
            <div className="hidden lg:block">
              <a 
                href="#join-now" 
                className="vintage-button bg-accent hover:bg-red-700 text-white font-display tracking-wider px-6 py-2 rounded shadow-lg transition duration-300"
              >
                JOIN NOW
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center">
          <div className="text-center">
            <a 
              href="#" 
              className="block py-3 text-xl text-light hover:text-secondary"
              onClick={closeMobileMenu}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="block py-3 text-xl text-light hover:text-secondary"
              onClick={closeMobileMenu}
            >
              Services
            </a>
            <a 
              href="#pricing" 
              className="block py-3 text-xl text-light hover:text-secondary"
              onClick={closeMobileMenu}
            >
              Membership
            </a>
            <a 
              href="#about" 
              className="block py-3 text-xl text-light hover:text-secondary"
              onClick={closeMobileMenu}
            >
              Our Story
            </a>
            <a 
              href="#schedule" 
              className="block py-3 text-xl text-light hover:text-secondary"
              onClick={closeMobileMenu}
            >
              Schedule
            </a>
            <a 
              href="#contact" 
              className="block py-3 text-xl text-light hover:text-secondary"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
            <a 
              href="#join-now" 
              className="block mt-5 mx-auto vintage-button bg-accent hover:bg-red-700 text-white font-display tracking-wider px-6 py-2 rounded shadow-lg w-2/3 transition duration-300"
              onClick={closeMobileMenu}
            >
              JOIN NOW
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Vintage Gym" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-light shadow-lg mb-6">
            Classic Training for <br />
            <span className="text-accent">Modern Bodies</span>
          </h1>
          <p className="text-xl sm:text-2xl text-light max-w-2xl mx-auto mb-10">
            Experience the time-tested methods that built legends, 
            adapted for today's fitness goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#pricing" 
              className="vintage-button bg-accent hover:bg-red-700 text-white font-display tracking-wider px-8 py-3 rounded shadow-lg transition duration-300 text-xl"
            >
              VIEW MEMBERSHIPS
            </a>
            <a 
              href="#services" 
              className="vintage-button bg-transparent border-2 border-light hover:border-secondary text-light hover:text-secondary font-display tracking-wider px-8 py-3 rounded shadow-lg transition duration-300 text-xl"
            >
              EXPLORE CLASSES
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
