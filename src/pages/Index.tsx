
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import useRevealAnimation from "@/hooks/useRevealAnimation";
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  useRevealAnimation();

  // Update page title
  useEffect(() => {
    document.title = "XS Groupe - Maritime & Logistics Solutions";
  }, []);

  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SolutionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
