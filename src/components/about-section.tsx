
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function AboutSection() {
  const benefits = [
    "Impresión 3D de alta precisión",
    "Materiales ecológicos y duraderos",
    "Diseños personalizados a medida",
    "Rapidez en producción y entrega",
    "Servicio de diseño 3D profesional",
    "Garantía en todos nuestros productos",
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1563218819-7d733989450a?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3"
                  alt="Proceso de impresión 3D"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1631545924450-9b2fbbfe041d?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3"
                  alt="Modelo 3D"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1629011322137-921f878a8a41?auto=format&fit=crop&q=80&w=1929&ixlib=rb-4.0.3"
                  alt="Diseñador trabajando"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1592659762303-90081d34b277?auto=format&fit=crop&q=80&w=1973&ixlib=rb-4.0.3"
                  alt="Producto finalizado"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre nosotros</h2>
            <p className="text-muted-foreground mb-6">
              Somos un equipo apasionado de diseñadores e ingenieros dedicados a transformar ideas en objetos tangibles a través de la impresión 3D. Nuestro estudio combina tecnología avanzada con creatividad para ofrecer productos excepcionales y personalizados.
            </p>
            <p className="text-muted-foreground mb-8">
              Fundada en 2020, AMedida3D nació de la pasión por la innovación y el diseño. Desde entonces, hemos ayudado a cientos de clientes a materializar sus ideas, desde prototipos industriales hasta objetos decorativos únicos.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 opacity-0 animate-fade-in hover:translate-x-1 transition-transform duration-300"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="rounded-full bg-primary/10 p-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
