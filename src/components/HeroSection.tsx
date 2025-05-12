
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1520959858244-4195503f9a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white animate-fade-in">
            Global Maritime & Logistics Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Providing comprehensive and efficient solutions for global maritime transportation, logistics, and supply chain management.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
              Discover Our Services
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
