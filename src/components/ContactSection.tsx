
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Thank you for your message! We'll be in touch soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions or need a custom solution? Get in touch with our team and we'll be happy to assist you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-full p-3 text-white mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Address</h3>
                  <p className="text-gray-600">123 Maritime Way, Port City<br />New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-full p-3 text-white mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">info@xsgroupe.com</p>
                  <p className="text-gray-600">support@xsgroupe.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-full p-3 text-white mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 765-4321</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="reveal-animation" data-delay="200">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={4}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary-dark">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
