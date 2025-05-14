
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background with particles */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1520959858244-4195503f9a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent opacity-60"></div>
        
        {/* Animated floating shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-primary/10"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 15}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.3 + 0.1
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white ${isLoaded ? 'fade-in' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            Global Maritime & Logistics Solutions
          </h1>
          <p 
            className={`text-lg md:text-xl mb-8 opacity-90 ${isLoaded ? 'slide-up' : ''}`}
            style={{ animationDelay: '0.4s' }}
          >
            Providing comprehensive and efficient solutions for global maritime transportation, logistics, and supply chain management.
          </p>
          <div className={`flex flex-wrap gap-4 ${isLoaded ? 'slide-up' : ''}`} style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white hover-scale">
              Discover Our Services
            </Button>
            <Button size="lg" variant="outline" className="glass-effect border-white text-white hover:bg-white/20 hover-scale">
              Contact Us
            </Button>
          </div>
          
          {/* Scroll down indicator */}
          <div 
            className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center ${isLoaded ? 'fade-in' : ''}`}
            style={{ animationDelay: '1s' }}
          >
            <span className="text-white/80 text-sm mb-2">Scroll to Explore</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
