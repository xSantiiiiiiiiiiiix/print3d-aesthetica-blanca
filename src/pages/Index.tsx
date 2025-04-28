
import { useState, useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Preloader } from "@/components/preloader";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/products-section";
import { CustomOrderForm } from "@/components/custom-order-form";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
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
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="products">
          <ScrollReveal duration={800} distance="40px">
            <ProductsSection />
          </ScrollReveal>
        </section>
        
        <section id="gallery">
          <ScrollReveal duration={800} delay={150} distance="40px">
            <GallerySection />
          </ScrollReveal>
        </section>
        
        <section id="custom-order">
          <ScrollReveal duration={800} delay={100} distance="40px">
            <CustomOrderForm />
          </ScrollReveal>
        </section>
        
        <section id="about">
          <ScrollReveal duration={800} delay={150} origin="left" distance="40px">
            <AboutSection />
          </ScrollReveal>
        </section>
        
        <section id="contact">
          <ScrollReveal duration={800} delay={150} origin="right" distance="40px">
            <ContactSection />
          </ScrollReveal>
        </section>
      </main>
      
      <Footer />
    </ThemeProvider>
  );
};

export default Index;
