
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import useParallaxEffect from "@/hooks/useParallaxEffect";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

const solutions = [
  {
    title: "Smart Port Operations",
    description: "AI-powered port management systems with automated scheduling, predictive maintenance, and real-time vessel tracking.",
    imageSrc: "https://images.unsplash.com/photo-1504433374832-4fcf45f40967?q=80&w=1000",
    category: "Smart Infrastructure"
  },
  {
    title: "Digital Container Management",
    description: "IoT-enabled container tracking with blockchain documentation and automated customs processing systems.",
    imageSrc: "https://images.unsplash.com/photo-1577431264915-0902e1d19e8f?q=80&w=1000",
    category: "IoT Solutions"
  },
  {
    title: "Autonomous Transport Systems",
    description: "Semi-autonomous cargo handling and transport with machine learning optimization for route planning and fuel efficiency.",
    imageSrc: "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?q=80&w=1000",
    category: "Autonomous Tech"
  },
];

const SolutionsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const { calculateTransform } = useParallaxEffect();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.querySelector('#solutions');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="solutions" className="section bg-gray-900 text-white relative overflow-hidden py-32">
      {/* Tech-styled background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div 
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        ></div>
        
        {/* Animated data flow lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M0,${20 + i * 10} C25,${15 + i * 10} 75,${25 + i * 10} 100,${20 + i * 10}`}
              stroke="rgba(59, 130, 246, 0.1)"
              strokeWidth="0.5"
              fill="none"
              className="animate-pulse-slow"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </svg>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 reveal-animation">
          <span className="inline-block px-3 py-1 bg-primary/20 text-primary/90 rounded-full text-sm font-medium mb-3">Tech Innovations</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Advanced Solutions</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover our cutting-edge technological solutions designed to transform maritime logistics and transportation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className={`reveal-animation ${isVisible ? 'active' : ''}`} 
              data-delay={index * 150}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <Card className="bg-gray-800 border-gray-700 overflow-hidden h-full transition-all duration-500 hover:transform hover:scale-105 hover:z-10 group">
                <div className="h-52 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent z-10 opacity-80"></div>
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={solution.imageSrc} 
                      alt={solution.title} 
                      className={`w-full h-full object-cover transition-all duration-700 
                        ${activeCard === index ? 'scale-110 filter brightness-110' : 'scale-100'}`}
                      style={{ transform: calculateTransform(0.05) }}
                    />
                  </AspectRatio>
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="text-sm font-medium px-2 py-1 bg-primary/80 rounded text-white">{solution.category}</span>
                  </div>
                  
                  {/* Tech overlay pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-60 mix-blend-overlay"></div>
                  <div className="absolute inset-0 z-0 opacity-20">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {[...Array(10)].map((_, i) => (
                        <line 
                          key={i} 
                          x1="0" 
                          y1={i * 10} 
                          x2="100" 
                          y2={i * 10} 
                          stroke="rgba(255,255,255,0.2)" 
                          strokeWidth="0.2" 
                        />
                      ))}
                      {[...Array(10)].map((_, i) => (
                        <line 
                          key={`v-${i}`} 
                          x1={i * 10} 
                          y1="0" 
                          x2={i * 10} 
                          y2="100" 
                          stroke="rgba(255,255,255,0.2)" 
                          strokeWidth="0.2" 
                        />
                      ))}
                    </svg>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    {solution.title}
                    <div className={`ml-auto transform transition-transform duration-300 ${activeCard === index ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{solution.description}</p>
                  
                  {/* Animated tech progress bar */}
                  <div className="mt-6 relative h-1 bg-gray-700 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-blue-400 transition-all duration-700 ease-out"
                      style={{ 
                        width: activeCard === index ? '100%' : '0%',
                        boxShadow: activeCard === index ? '0 0 10px rgba(59, 130, 246, 0.5)' : 'none'
                      }}
                    ></div>
                  </div>
                  
                  {/* Tech specs */}
                  <div className={`mt-4 grid grid-cols-2 gap-2 text-xs text-gray-400 transition-opacity duration-300 ${activeCard === index ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span>AI Enhanced</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>Cloud Connected</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      <span>IoT Enabled</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                      <span>Real-time Data</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Tech CTA */}
        <div className="mt-16 text-center">
          <Link to="/solutions">
            <button className="px-6 py-3 bg-gradient-to-r from-primary to-blue-600 rounded-md text-white font-medium hover:from-blue-600 hover:to-primary transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 group">
              <span className="flex items-center">
                <span>Explore All Technology Solutions</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
