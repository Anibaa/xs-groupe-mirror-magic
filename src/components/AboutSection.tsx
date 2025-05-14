
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 reveal-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About XS Groupe</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded with a vision to transform the maritime logistics industry, XS Groupe has established itself as a leader in providing comprehensive logistics and transport solutions across the globe.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With decades of combined experience, our team of experts offers unparalleled service quality, innovative solutions, and a commitment to excellence that sets us apart in the industry.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">25+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
                <p className="text-gray-600">Global Partners</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">1000+</h3>
                <p className="text-gray-600">Successful Projects</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">24/7</h3>
                <p className="text-gray-600">Customer Support</p>
              </div>
            </div>
            <Link to="/about">
              <Button className="bg-primary hover:bg-primary-dark">Learn More About Us</Button>
            </Link>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Container ship at port" 
                className="w-full h-auto rounded-lg shadow-xl reveal-animation"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block reveal-animation" data-delay="200">
                <p className="text-lg font-semibold">Excellence in Maritime Logistics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
