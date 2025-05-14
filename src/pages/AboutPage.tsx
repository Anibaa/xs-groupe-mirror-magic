
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import useRevealAnimation from "@/hooks/useRevealAnimation";
import { Toaster } from "@/components/ui/sonner";
import { ArrowRight, Users, Globe, Award, Anchor, Ship } from "lucide-react";

const AboutPage = () => {
  useRevealAnimation();

  // Update page title
  useEffect(() => {
    document.title = "About Us - XS Groupe";
  }, []);

  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            {/* Tech elements overlay */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {[...Array(10)].map((_, i) => (
                  <circle
                    key={i}
                    cx={Math.random() * 100}
                    cy={Math.random() * 100}
                    r={Math.random() * 5 + 1}
                    fill="rgba(255,255,255,0.3)"
                  />
                ))}
                {[...Array(5)].map((_, i) => (
                  <path
                    key={`p-${i}`}
                    d={`M${Math.random() * 20} ${Math.random() * 100} Q ${Math.random() * 50 + 25} ${Math.random() * 100}, ${Math.random() * 50 + 50} ${Math.random() * 100} T ${Math.random() * 30 + 70} ${Math.random() * 100}`}
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth="0.2"
                    fill="none"
                  />
                ))}
              </svg>
            </div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-3 reveal-animation">Our Story</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal-animation" data-delay="100">About XS Groupe</h1>
              <p className="text-xl text-gray-300 mb-6 reveal-animation" data-delay="200">
                Founded with a vision to transform the maritime logistics industry through technology, XS Groupe has established itself as a leader in providing comprehensive logistics and transport solutions across the globe.
              </p>
              <p className="text-lg text-gray-300 reveal-animation" data-delay="300">
                Our innovation-driven approach combines decades of maritime expertise with cutting-edge technology to create more efficient, sustainable, and reliable solutions.
              </p>
            </div>
          </div>
        </section>
        
        {/* Company Overview */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 reveal-animation">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Maritime Technology Journey</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 1998, XS Groupe began as a traditional maritime logistics provider. As technology evolved, we recognized the transformative potential of digital solutions in our industry and embarked on a journey to become leaders in maritime technology.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Today, we operate at the intersection of established maritime expertise and innovative technology, creating solutions that address the complex challenges of global trade and logistics.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-3xl font-bold text-primary mb-2">25+</h3>
                    <p className="text-gray-600">Years of Experience</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
                    <p className="text-gray-600">Global Partners</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-3xl font-bold text-primary mb-2">1000+</h3>
                    <p className="text-gray-600">Successful Projects</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-3xl font-bold text-primary mb-2">24/7</h3>
                    <p className="text-gray-600">Customer Support</p>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 reveal-animation" data-delay="200">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1200" 
                    alt="Container ship at port" 
                    className="rounded-lg shadow-xl w-full"
                  />
                  
                  {/* Tech overlay elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-60 mix-blend-overlay rounded-lg"></div>
                  <div className="absolute inset-0 z-0 opacity-20 rounded-lg overflow-hidden">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {[...Array(10)].map((_, i) => (
                        <line 
                          key={i} 
                          x1="0" 
                          y1={i * 10} 
                          x2="100" 
                          y2={i * 10} 
                          stroke="rgba(255,255,255,0.5)" 
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
                          stroke="rgba(255,255,255,0.5)" 
                          strokeWidth="0.2" 
                        />
                      ))}
                    </svg>
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
                    <p className="text-lg font-semibold">Excellence in Maritime Technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-16 reveal-animation">
              <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
              <p className="text-lg text-gray-600">
                Driving the future of maritime logistics through innovative technology and sustainable practices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md reveal-animation" data-delay="100">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-lg mb-6">
                  <Ship className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To transform the maritime logistics industry through innovative technology solutions that enhance efficiency, reduce environmental impact, and create value across the global supply chain.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-600">Develop sustainable maritime technology solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-600">Optimize global supply chains through digital innovation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-600">Reduce environmental impact of maritime operations</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md reveal-animation" data-delay="200">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-lg mb-6">
                  <Globe className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 mb-6">
                  To be the global leader in tech-enabled maritime logistics, setting new standards for efficiency, sustainability, and innovation in how goods move across the world's oceans.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-600">Pioneer AI-driven maritime logistics systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-600">Create autonomous and low-emission shipping solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-600">Build the digital infrastructure for future maritime trade</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16 reveal-animation">
              <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These principles guide our approach to business, innovation, and relationships with clients and partners.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Anchor className="h-8 w-8" />,
                  title: "Innovation",
                  description: "We continuously seek new technologies and approaches to improve maritime logistics."
                },
                {
                  icon: <Award className="h-8 w-8" />,
                  title: "Excellence",
                  description: "We maintain the highest standards of quality and service in everything we do."
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Collaboration",
                  description: "We believe in the power of partnerships and working together toward common goals."
                },
              ].map((value, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-8 text-center reveal-animation" data-delay={index * 100}>
                  <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                    <div className="text-primary">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Leadership Team */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16 reveal-animation">
              <h2 className="text-3xl font-bold mb-6">Our Leadership Team</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet the experienced professionals guiding XS Groupe's technology and maritime strategy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Alexander Chen",
                  position: "Chief Executive Officer",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400",
                  bio: "With over 20 years of experience in maritime logistics, Alexander leads XS Groupe's strategic vision and technology innovation."
                },
                {
                  name: "Sarah Williams",
                  position: "Chief Technology Officer",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
                  bio: "Sarah brings expertise in AI, blockchain, and IoT to drive XS Groupe's cutting-edge technology solutions."
                },
                {
                  name: "Michael Zhang",
                  position: "Chief Operations Officer",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
                  bio: "Michael oversees global operations, ensuring seamless integration of technology into our maritime logistics services."
                }
              ].map((leader, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md reveal-animation" data-delay={index * 100}>
                  <img src={leader.image} alt={leader.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                    <p className="text-primary mb-4">{leader.position}</p>
                    <p className="text-gray-600">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gray-900 py-20 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-48 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto reveal-animation">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Maritime Operations?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Join the hundreds of companies that have partnered with XS Groupe to revolutionize their maritime logistics.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg group">
                <span>Contact Our Team</span>
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

export default AboutPage;
