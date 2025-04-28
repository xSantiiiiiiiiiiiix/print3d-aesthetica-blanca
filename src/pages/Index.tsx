
import { useState, useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Preloader } from "@/components/preloader";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/products-section";
import { CustomOrderForm } from "@/components/custom-order-form";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Preloader />;
  }

  return (
    <ThemeProvider defaultTheme="light">
      <Preloader />
      <Navbar />
      
      <main className="overflow-hidden">
        <HeroSection />
        <ProductsSection />
        <CustomOrderForm />
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
    </ThemeProvider>
  );
};

export default Index;
