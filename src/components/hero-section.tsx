
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Creaciones 3D <span className="text-primary">personalizadas</span> para tu imaginación
            </h1>
            <p className="text-lg text-muted-foreground">
              Transformamos ideas en objetos físicos con nuestra tecnología de impresión 3D de última generación. Diseños personalizados, detalle excepcional.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="group">
                Explorar productos
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#custom-order">Pedido personalizado</a>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/40 rounded-2xl blur-xl opacity-70 dark:opacity-30"></div>
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-soft aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3" 
                  alt="Impresión 3D" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
