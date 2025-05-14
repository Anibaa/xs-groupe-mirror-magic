
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import useRevealAnimation from "@/hooks/useRevealAnimation";
import { Toaster } from "@/components/ui/sonner";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const solutions = [
  {
    title: "Smart Port Operations",
    description: "AI-powered port management systems with automated scheduling, predictive maintenance, and real-time vessel tracking. Our smart port operations transform traditional ports into intelligent logistic hubs with reduced waiting times, optimized berth allocations, and enhanced operational visibility.",
    imageSrc: "https://images.unsplash.com/photo-1504433374832-4fcf45f40967?q=80&w=1000",
    category: "Smart Infrastructure",
    features: [
      "Real-time vessel tracking and ETAs",
      "Automated berth allocation",
      "Predictive maintenance scheduling",
      "Resource optimization algorithms",
      "Environmental monitoring systems"
    ]
  },
  {
    title: "Digital Container Management",
    description: "IoT-enabled container tracking with blockchain documentation and automated customs processing systems. Our digital container management solution offers end-to-end visibility of cargo movements, automated document processing, and secure data exchange between stakeholders.",
    imageSrc: "https://images.unsplash.com/photo-1577431264915-0902e1d19e8f?q=80&w=1000",
    category: "IoT Solutions",
    features: [
      "Real-time container location tracking",
      "Blockchain-secured documentation",
      "Automated customs clearance",
      "Temperature and condition monitoring",
      "Predictive arrival notifications"
    ]
  },
  {
    title: "Autonomous Transport Systems",
    description: "Semi-autonomous cargo handling and transport with machine learning optimization for route planning and fuel efficiency. Our autonomous systems reduce human error, increase operational hours, and significantly improve fuel efficiency through AI-optimized routing.",
    imageSrc: "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?q=80&w=1000",
    category: "Autonomous Tech",
    features: [
      "Autonomous guided vehicles (AGVs)",
      "AI-optimized route planning",
      "Machine learning for fuel efficiency",
      "Predictive collision avoidance",
      "24/7 operational capability"
    ]
  },
  {
    title: "Blockchain Documentation",
    description: "Secure and transparent documentation management using blockchain technology for maritime logistics. Our solution eliminates document fraud, reduces processing time, and ensures all stakeholders have access to the same verified information.",
    imageSrc: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1000",
    category: "Digital Documentation",
    features: [
      "Immutable document records",
      "Smart contracts for automated compliance",
      "Real-time document verification",
      "Reduced processing times",
      "Secure stakeholder access"
    ]
  },
  {
    title: "AI Logistics Optimization",
    description: "Advanced artificial intelligence systems that continuously optimize logistics operations, predict disruptions, and suggest alternative routes or transport modes to minimize delays and costs.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
    category: "Artificial Intelligence",
    features: [
      "Predictive disruption alerts",
      "Multi-modal transport optimization",
      "Dynamic pricing models",
      "Demand forecasting",
      "Scenario simulation"
    ]
  },
  {
    title: "Maritime Data Analytics",
    description: "Comprehensive data analytics platform that transforms maritime operational data into actionable insights for strategic decision-making, performance improvement, and cost reduction.",
    imageSrc: "https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=1000",
    category: "Data Science",
    features: [
      "Real-time performance dashboards",
      "Historical trend analysis",
      "Benchmarking capabilities",
      "Customizable KPI tracking",
      "Predictive maintenance insights"
    ]
  }
];

const SolutionsPage = () => {
  useRevealAnimation();

  // Update page title
  useEffect(() => {
    document.title = "Tech Solutions - XS Groupe";
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Toaster position="top-right" />
      <Header />
      
      <main>
        {/* Hero Banner */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 opacity-90"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.2)_0%,_transparent_70%)]"></div>
            
            {/* Tech pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {[...Array(20)].map((_, i) => (
                  <line 
                    key={`h-${i}`} 
                    x1="0" 
                    y1={i * 5} 
                    x2="100" 
                    y2={i * 5} 
                    stroke="rgba(255,255,255,0.5)" 
                    strokeWidth="0.1" 
                  />
                ))}
                {[...Array(20)].map((_, i) => (
                  <line 
                    key={`v-${i}`} 
                    x1={i * 5} 
                    y1="0" 
                    x2={i * 5} 
                    y2="100" 
                    stroke="rgba(255,255,255,0.5)" 
                    strokeWidth="0.1" 
                  />
                ))}
              </svg>
            </div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center reveal-animation">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Advanced Technology Solutions</h1>
              <p className="text-xl text-gray-300 mb-8">
                Explore our cutting-edge technological solutions designed to transform maritime logistics and transportation.
              </p>
            </div>
          </div>
        </section>
        
        {/* Solutions Grid */}
        <section className="py-16 relative">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="reveal-animation" data-delay={index * 100}>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden h-full transition-all duration-300 hover:transform hover:scale-[1.03] hover:shadow-lg hover:shadow-blue-900/20">
                    <div className="h-48 overflow-hidden relative">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src={solution.imageSrc}
                          alt={solution.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                      </AspectRatio>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent z-10"></div>
                      <div className="absolute bottom-3 left-3 z-20">
                        <span className="text-xs font-medium px-2 py-1 bg-primary/90 rounded text-white">
                          {solution.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-white">{solution.title}</h3>
                      <p className="text-gray-300 mb-4">{solution.description}</p>
                      
                      <div className="border-t border-gray-700 pt-4 mt-4">
                        <h4 className="text-sm font-semibold text-primary mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-primary mr-2 mt-1">•</span>
                              <span className="text-sm text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-6">
                        <Button variant="outline" className="text-primary border-primary/30 hover:bg-primary/20 w-full group">
                          <span>Learn More</span>
                          <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tech background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-64 -right-64 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"></div>
            <div className="absolute -bottom-64 -left-64 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(59,130,246,0.15)_0%,_transparent_60%)]"></div>
            <div className="absolute right-0 top-0 w-full h-full opacity-20">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {[...Array(5)].map((_, i) => (
                  <circle
                    key={i}
                    cx={100 + Math.random() * 50}
                    cy={100 + Math.random() * 50}
                    r={10 + Math.random() * 40}
                    stroke="rgba(59, 130, 246, 0.3)"
                    strokeWidth="0.5"
                    fill="none"
                  />
                ))}
                {[...Array(10)].map((_, i) => (
                  <line
                    key={`l-${i}`}
                    x1={Math.random() * 200}
                    y1={Math.random() * 200}
                    x2={Math.random() * 200}
                    y2={Math.random() * 200}
                    stroke="rgba(59, 130, 246, 0.2)"
                    strokeWidth="0.5"
                  />
                ))}
              </svg>
            </div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center reveal-animation">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your logistics operations?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our team of experts is ready to help you implement the perfect technological solution for your business needs.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg group">
                <span>Contact Us Today</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SolutionsPage;
