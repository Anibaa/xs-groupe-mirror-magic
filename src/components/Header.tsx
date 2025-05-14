
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              <span className="text-3xl">XS</span> <span className="text-gray-700">GROUPE</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-primary transition-colors">About</Link>
            <Link to="/services" className="font-medium text-gray-700 hover:text-primary transition-colors">Services</Link>
            <Link to="/solutions" className="font-medium text-gray-700 hover:text-primary transition-colors">Solutions</Link>
            <Link to="#contact">
              <Button variant="default" className="bg-primary hover:bg-primary-dark">
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMobileMenu} aria-label="Menu">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium text-gray-700 hover:text-primary transition-colors" onClick={toggleMobileMenu}>Home</Link>
              <Link to="/about" className="font-medium text-gray-700 hover:text-primary transition-colors" onClick={toggleMobileMenu}>About</Link>
              <Link to="/services" className="font-medium text-gray-700 hover:text-primary transition-colors" onClick={toggleMobileMenu}>Services</Link>
              <Link to="/solutions" className="font-medium text-gray-700 hover:text-primary transition-colors" onClick={toggleMobileMenu}>Solutions</Link>
              <Link to="#contact" onClick={toggleMobileMenu}>
                <Button variant="default" className="bg-primary hover:bg-primary-dark w-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
