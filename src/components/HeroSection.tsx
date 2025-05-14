
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Code, Database, Network, Server } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Tech-themed background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3200&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black to-black/80 opacity-90"></div>
        </div>
        
        {/* Tech gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent opacity-70"></div>
        
        {/* Animated circuit lines */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-full opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {[...Array(10)].map((_, i) => (
                <path
                  key={i}
                  d={`M${Math.random() * 20} ${Math.random() * 100} Q ${Math.random() * 50 + 25} ${Math.random() * 100}, ${Math.random() * 50 + 50} ${Math.random() * 100} T ${Math.random() * 30 + 70} ${Math.random() * 100}`}
                  stroke="rgba(80, 160, 255, 0.3)"
                  strokeWidth="0.2"
                  fill="none"
                  className="animate-pulse-slow"
                  style={{
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${Math.random() * 10 + 15}s`
                  }}
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Animated floating tech elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 15}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.15 + 0.05
              }}
            >
              {i % 3 === 0 ? (
                <svg viewBox="0 0 200 200" className="w-full h-full text-primary/20">
                  <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
                  <line x1="30" y1="100" x2="170" y2="100" stroke="currentColor" strokeWidth="2" />
                  <line x1="100" y1="30" x2="100" y2="170" stroke="currentColor" strokeWidth="2" />
                </svg>
              ) : i % 3 === 1 ? (
                <svg viewBox="0 0 200 200" className="w-full h-full text-primary/20">
                  <rect x="40" y="40" width="120" height="120" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              ) : (
                <svg viewBox="0 0 200 200" className="w-full h-full text-primary/20">
                  <path d="M50,50 L150,50 L150,150 L50,150 Z" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M70,70 L130,70 L130,130 L70,130 Z" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Animated data particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animationDuration: `${Math.random() * 4 + 1}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          {/* Tech icon indicators */}
          <div className={`flex gap-6 mb-8 ${isLoaded ? 'fade-in' : ''}`} style={{ animationDelay: '0.1s' }}>
            <Server className="w-8 h-8 text-primary animate-pulse-slow" />
            <Database className="w-8 h-8 text-primary/80 animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <Network className="w-8 h-8 text-primary/60 animate-pulse-slow" style={{ animationDelay: '2s' }} />
            <Code className="w-8 h-8 text-primary/70 animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
          </div>
          
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white ${isLoaded ? 'fade-in' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            Global Maritime <span className="text-primary">&</span> Logistics <span className="text-primary">Technology</span>
          </h1>
          <p 
            className={`text-lg md:text-xl mb-8 opacity-90 ${isLoaded ? 'slide-up' : ''}`}
            style={{ animationDelay: '0.4s' }}
          >
            Leveraging cutting-edge technology for comprehensive and efficient solutions in global maritime transportation, logistics, and supply chain optimization.
          </p>
          <div className={`flex flex-wrap gap-4 ${isLoaded ? 'slide-up' : ''}`} style={{ animationDelay: '0.6s' }}>
            <Link to="/solutions">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white hover-scale group">
                <span>Discover Our Solutions</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="glass-effect border-white text-white hover:bg-white/20 hover-scale group">
                <span>Tech Capabilities</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
          </div>
          
          {/* Tech-styled scroll indicator */}
          <div 
            className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center ${isLoaded ? 'fade-in' : ''}`}
            style={{ animationDelay: '1s' }}
          >
            <span className="text-white/80 text-sm mb-2">Scroll to Explore</span>
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-1 overflow-hidden">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce mt-1 relative">
                <div className="absolute w-4 h-20 bg-primary/20 -left-1 -top-1 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
