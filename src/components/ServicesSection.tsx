
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Maritime Transport",
    description: "Efficient maritime transport solutions for various cargo types with global reach and reliable schedules.",
    icon: "🚢",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Logistics Solutions",
    description: "End-to-end logistics services including warehousing, distribution, and supply chain optimization.",
    icon: "🏭",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Customs Services",
    description: "Expert customs clearance and documentation services to ensure smooth international trade operations.",
    icon: "📝",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Freight Forwarding",
    description: "Comprehensive freight forwarding services for air, sea, and land transport with global coverage.",
    icon: "✈️",
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Supply Chain Management",
    description: "Integrated supply chain solutions designed to optimize efficiency and reduce operational costs.",
    icon: "⚙️",
    color: "from-red-500 to-red-600",
  },
  {
    title: "Consulting Services",
    description: "Expert consulting in maritime logistics, regulatory compliance, and transport optimization.",
    icon: "💼",
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
    <section id="services" className="section bg-gradient-light">
      <div className="container">
        <div className="text-center mb-12 reveal-animation">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive maritime and logistics services designed to meet your specific business needs with efficiency and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`border border-gray-200 overflow-hidden card-hover h-full reveal-animation ${isVisible ? 'active' : ''}`} 
              data-delay={index * 100}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${service.color}`}></div>
              <CardHeader className="relative">
                <div className={`text-4xl mb-4 transition-transform duration-500 ${activeCard === index ? 'scale-110' : ''}`}>{service.icon}</div>
                <CardTitle className="transition-colors duration-300 group-hover:text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
                <div className={`mt-4 flex items-center text-primary font-medium transition-opacity duration-300 ${activeCard === index ? 'opacity-100' : 'opacity-0'}`}>
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
