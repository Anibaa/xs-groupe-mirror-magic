
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Database, Server, Network, Code, HardDrive, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Maritime Transport Technology",
    description: "Advanced tracking and routing systems for efficient maritime transport with AI-optimized scheduling and real-time monitoring.",
    icon: <Server className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Digital Logistics Solutions",
    description: "Cloud-based logistics platforms with IoT integration for end-to-end visibility, analytics, and supply chain optimization.",
    icon: <Database className="w-8 h-8" />,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Automated Customs Systems",
    description: "Paperless customs clearance with blockchain-secured documentation and AI-powered compliance verification.",
    icon: <Code className="w-8 h-8" />,
    color: "from-green-500 to-green-600",
  },
  {
    title: "Smart Freight Forwarding",
    description: "Intelligent routing algorithms and digital freight matching for optimal transport mode selection and cost efficiency.",
    icon: <Network className="w-8 h-8" />,
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "IoT Supply Chain Management",
    description: "Sensor-based supply chain monitoring with predictive analytics and machine learning for inventory optimization.",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-red-500 to-red-600",
  },
  {
    title: "Cloud-Based Consulting",
    description: "Tech-forward consulting powered by big data analytics, digital twins, and advanced simulation models.",
    icon: <HardDrive className="w-8 h-8" />,
    color: "from-teal-500 to-teal-600",
  }
];

const ServicesSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.querySelector('#services');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="services" className="section bg-gradient-to-b from-gray-100 to-white py-24">
      <div className="container relative">
        {/* Tech background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-64 -top-64 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute -left-64 -bottom-64 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
          
          {/* Circuit patterns */}
          <svg className="absolute top-10 left-10 w-64 h-64 text-primary/5" viewBox="0 0 200 200">
            <path d="M10,10 L50,10 L50,50 L90,50 L90,90 L130,90 L130,130 L170,130 L170,170" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M10,50 L90,50" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M50,10 L50,170" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="50" cy="50" r="5" fill="currentColor" />
            <circle cx="90" cy="50" r="5" fill="currentColor" />
            <circle cx="130" cy="90" r="5" fill="currentColor" />
            <circle cx="50" cy="130" r="5" fill="currentColor" />
          </svg>
          
          <svg className="absolute bottom-10 right-10 w-64 h-64 text-primary/5" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
            <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="1" />
            <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        
        <div className="text-center mb-16 reveal-animation">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">Tech-Powered Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technology to deliver advanced maritime and logistics services designed for the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link to="/services" key={index} className="block">
              <Card 
                className={`border border-gray-200 overflow-hidden h-full reveal-animation ${isVisible ? 'active' : ''} transition-all duration-500 hover:shadow-xl group`} 
                data-delay={index * 100}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${service.color} transition-all duration-300 ${activeCard === index ? 'h-2' : ''}`}></div>
                <CardHeader className="relative">
                  <div className={`text-4xl mb-4 transition-all duration-500 text-primary ${activeCard === index ? 'scale-110 translate-y-1' : ''}`}>
                    {service.icon}
                  </div>
                  <CardTitle className="transition-colors duration-300 group-hover:text-primary flex items-center">
                    {service.title}
                    <div className={`ml-auto transform transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  <div className={`mt-6 flex items-center text-primary font-medium transition-all duration-500 ${activeCard === index ? 'opacity-100' : 'opacity-0'}`}>
                    <span>Explore technology</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  
                  {/* Progress bar animation on hover */}
                  <div className="mt-4 h-0.5 bg-gray-200 w-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${service.color} transition-all duration-700 ease-in-out`}
                      style={{
                        width: activeCard === index ? '100%' : '0%'
                      }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
