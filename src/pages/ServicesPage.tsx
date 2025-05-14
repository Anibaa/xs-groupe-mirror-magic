
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import useRevealAnimation from "@/hooks/useRevealAnimation";
import { Toaster } from "@/components/ui/sonner";
import { Database, Server, Network, Code, HardDrive, Cpu, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Maritime Transport Technology",
    description: "Advanced tracking and routing systems for efficient maritime transport with AI-optimized scheduling and real-time monitoring.",
    icon: <Server className="w-12 h-12" />,
    color: "from-blue-500 to-blue-600",
    features: [
      "Real-time vessel tracking and monitoring",
      "AI-optimized route planning and scheduling",
      "Fuel consumption optimization",
      "Predictive weather integration",
      "Port congestion avoidance systems"
    ]
  },
  {
    title: "Digital Logistics Solutions",
    description: "Cloud-based logistics platforms with IoT integration for end-to-end visibility, analytics, and supply chain optimization.",
    icon: <Database className="w-12 h-12" />,
    color: "from-purple-500 to-purple-600",
    features: [
      "End-to-end supply chain visibility",
      "Real-time cargo condition monitoring",
      "Predictive delivery estimations",
      "Warehouse automation integration",
      "Digital twin supply chain modeling"
    ]
  },
  {
    title: "Automated Customs Systems",
    description: "Paperless customs clearance with blockchain-secured documentation and AI-powered compliance verification.",
    icon: <Code className="w-12 h-12" />,
    color: "from-green-500 to-green-600",
    features: [
      "Digital customs documentation",
      "Automated compliance verification",
      "Real-time regulatory updates",
      "Pre-arrival clearance processing",
      "Integration with global customs systems"
    ]
  },
  {
    title: "Smart Freight Forwarding",
    description: "Intelligent routing algorithms and digital freight matching for optimal transport mode selection and cost efficiency.",
    icon: <Network className="w-12 h-12" />,
    color: "from-orange-500 to-orange-600",
    features: [
      "Multi-modal transport optimization",
      "Dynamic rate calculation and comparison",
      "Carbon footprint monitoring and reduction",
      "Automated carrier selection and booking",
      "Last-mile delivery optimization"
    ]
  },
  {
    title: "IoT Supply Chain Management",
    description: "Sensor-based supply chain monitoring with predictive analytics and machine learning for inventory optimization.",
    icon: <Cpu className="w-12 h-12" />,
    color: "from-red-500 to-red-600",
    features: [
      "IoT sensor integration and monitoring",
      "Predictive inventory management",
      "Automated reordering systems",
      "Cold chain integrity assurance",
      "Exception-based management alerts"
    ]
  },
  {
    title: "Cloud-Based Consulting",
    description: "Tech-forward consulting powered by big data analytics, digital twins, and advanced simulation models.",
    icon: <HardDrive className="w-12 h-12" />,
    color: "from-teal-500 to-teal-600",
    features: [
      "Digital transformation strategy development",
      "Technology implementation roadmapping",
      "ROI analysis and technology selection",
      "Training and change management",
      "System integration and customization"
    ]
  }
];

const ServicesPage = () => {
  useRevealAnimation();

  // Update page title
  useEffect(() => {
    document.title = "Our Services - XS Groupe";
  }, []);

  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <Header />
      
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="bg-gradient-to-br from-gray-900 via-blue-900/90 to-gray-900 py-20 relative overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white reveal-animation">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-3">Maritime Technology Excellence</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Technology Services</h1>
              <p className="text-xl text-gray-300 mb-8">
                We leverage cutting-edge technology to deliver exceptional maritime and logistics services designed for the digital age.
              </p>
            </div>
          </div>
          
          {/* Tech background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" 
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
                  backgroundSize: '30px 30px',
                }}
              ></div>
            </div>
            
            {/* Flowing data lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {[...Array(6)].map((_, i) => (
                <path
                  key={i}
                  d={`M${Math.random() * 20} ${Math.random() * 100} Q ${Math.random() * 50 + 25} ${Math.random() * 100}, ${Math.random() * 50 + 50} ${Math.random() * 100} T ${Math.random() * 30 + 70} ${Math.random() * 100}`}
                  stroke="rgba(255, 255, 255, 0.15)"
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
        </section>
        
        {/* Services Detail */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              <div className="reveal-animation">
                <h2 className="text-3xl font-bold mb-6">Tech-Powered Maritime Excellence</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At XS Groupe, we combine decades of maritime expertise with cutting-edge technology to deliver solutions that transform how goods move across the globe.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our tech-powered services are designed to optimize every aspect of the maritime logistics chain, from port operations to final delivery, creating more reliable, efficient, and sustainable transportation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["IoT Integration", "AI Optimization", "Blockchain Security", "Cloud Platforms", "Predictive Analytics", "Autonomous Systems"].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative reveal-animation" data-delay="200">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&h=400" 
                      alt="Maritime technology" 
                      className="rounded-lg shadow-lg h-40 w-full object-cover"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&h=800" 
                      alt="Maritime technology" 
                      className="rounded-lg shadow-lg h-64 w-full object-cover"
                    />
                  </div>
                  <div className="space-y-4 mt-8">
                    <img 
                      src="https://images.unsplash.com/photo-1581092162384-8987e40d538e?q=80&w=600&h=800" 
                      alt="Maritime technology" 
                      className="rounded-lg shadow-lg h-64 w-full object-cover"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&h=400" 
                      alt="Maritime technology" 
                      className="rounded-lg shadow-lg h-40 w-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Tech overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-primary/20 rounded-lg -rotate-3"></div>
                  <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border-2 border-blue-500/20 rounded-lg rotate-6"></div>
                </div>
              </div>
            </div>
            
            {/* Service cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="reveal-animation" 
                  data-delay={index * 100}
                >
                  <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:transform hover:translate-y-[-5px]">
                    <div className={`h-2 w-full bg-gradient-to-r ${service.color}`}></div>
                    
                    <div className="p-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} text-white mb-6`}>
                        {service.icon}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className={`bg-gradient-to-r ${service.color} text-white w-full group`}>
                        <span>Learn More</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gray-900 py-20 text-white text-center relative overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto reveal-animation">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Maritime Operations?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact our team today to discover how our technology services can transform your logistics and maritime operations.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg group">
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          {/* Tech background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-48 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            
            {/* Circuit lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {[...Array(5)].map((_, i) => (
                <path
                  key={i}
                  d={`M${10 + i * 20} 10 L${10 + i * 20} ${90 - i * 10} L${90} ${90 - i * 10}`}
                  stroke="rgba(59, 130, 246, 0.1)"
                  strokeWidth="0.5"
                  fill="none"
                />
              ))}
            </svg>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
