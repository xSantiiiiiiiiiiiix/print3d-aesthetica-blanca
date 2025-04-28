
import { useState, useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Preloader } from "@/components/preloader";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/products-section";
import { CustomOrderForm } from "@/components/custom-order-form";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { BudgetSection } from "@/components/budget-section";
import { GallerySection } from "@/components/gallery-section";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    
    // Simular carga para mostrar el preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <Preloader />;
  }

  return (
    <ThemeProvider defaultTheme="light">
      {isLoading && <Preloader />}
      <Navbar />
      
      <main className="overflow-hidden">
        <HeroSection />
        
        <ScrollReveal>
          <ProductsSection />
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <GallerySection />
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <BudgetSection />
        </ScrollReveal>
        
        <ScrollReveal delay={150}>
          <CustomOrderForm />
        </ScrollReveal>
        
        <ScrollReveal delay={200} origin="left">
          <AboutSection />
        </ScrollReveal>
        
        <ScrollReveal delay={250} origin="right">
          <ContactSection />
        </ScrollReveal>
      </main>
      
      <Footer />
    </ThemeProvider>
  );
};

export default Index;
