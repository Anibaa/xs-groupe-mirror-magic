
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";

const solutions = [
  {
    title: "Port Operations",
    description: "Efficient port operations and management services ensuring smooth loading and unloading processes.",
    imageSrc: "https://images.unsplash.com/photo-1504433374832-4fcf45f40967?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  },
  {
    title: "Container Shipping",
    description: "Reliable container shipping services with global coverage and flexible scheduling options.",
    imageSrc: "https://images.unsplash.com/photo-1577431264915-0902e1d19e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Cargo Transport",
    description: "Specialized cargo transport solutions for various types of goods, including oversized and dangerous materials.",
    imageSrc: "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

const SolutionsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
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
    <section id="solutions" className="section bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -right-32 -top-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12 reveal-animation">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our range of tailored solutions designed to address specific challenges in maritime logistics and transportation.
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
              <Card className="overflow-hidden border-none shadow-xl h-full transition-all duration-500 hover:shadow-2xl">
                <div className="h-52 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-70"></div>
                  <img 
                    src={solution.imageSrc} 
                    alt={solution.title} 
                    className={`w-full h-full object-cover transition-all duration-700 ${activeCard === index ? 'scale-110 filter brightness-110' : 'scale-100'}`}
                  />
                  <div className="absolute bottom-4 left-4 z-10 text-white">
                    <span className="text-sm font-medium px-2 py-1 bg-primary/80 rounded">Maritime Solutions</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {solution.title}
                    <div className={`ml-auto transform transition-transform duration-300 ${activeCard === index ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{solution.description}</p>
                  <div className={`mt-4 h-1 bg-gradient-to-r from-primary to-primary/50 transition-all duration-500 ${activeCard === index ? 'w-full' : 'w-0'}`}></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
