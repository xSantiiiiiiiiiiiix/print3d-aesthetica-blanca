
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "#home", label: "Inicio", id: "home" },
    { href: "#products", label: "Productos", id: "products" },
    { href: "#gallery", label: "Galería", id: "gallery" },
    { href: "#custom-order", label: "Pedidos", id: "custom-order" },
    { href: "#about", label: "Nosotros", id: "about" },
    { href: "#contact", label: "Contacto", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
      
      // Find current active section based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id));
      const currentSection = sections.reduce((acc, section) => {
        if (!section) return acc;
        
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (
          scrollTop >= sectionTop &&
          scrollTop < sectionTop + sectionHeight
        ) {
          return section.id;
        }
        return acc;
      }, "home");
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add smooth scroll effect when clicking on nav links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
      
      // If mobile menu is open, close it
      if (isOpen) {
        setIsOpen(false);
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl text-primary">
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/afffad06-76b3-4b69-9af5-f4a90b6b2290.png" 
                alt="AMedida3D Logo" 
                className="h-10 w-10"
              />
              <span>AMedida3D</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "transition-colors relative hover:text-primary", 
                    activeSection === link.id
                      ? "text-primary font-medium" 
                      : "text-foreground/80 hover:text-foreground",
                    // Active indicator line for current section
                    activeSection === link.id && "after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-0.5 after:w-full after:bg-primary after:scale-x-100 after:transition-transform"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button className="hover:scale-105 transition-all duration-300 hover:bg-primary/90 hover:shadow-md">Contacto</Button>
          </div>
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-md shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "block px-3 py-2 text-base font-medium rounded-md hover:bg-primary/10 transition-all duration-200",
                  activeSection === link.id
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground hover:bg-accent/50"
                )}
              >
                {link.label}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full hover:scale-105 transition-all duration-300 hover:shadow-md">Contacto</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
