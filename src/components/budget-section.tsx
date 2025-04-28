
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

export function BudgetSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  
  const budgetPackages = [
    {
      id: "basic",
      name: "Básico",
      price: "45€",
      description: "Modelo simple sin detalles complejos",
      features: ["Diseño básico", "1 revisión", "Tiempo de entrega: 7 días"]
    },
    {
      id: "standard",
      name: "Estándar",
      price: "85€",
      description: "Modelo con detalles moderados",
      features: ["Diseño personalizado", "2 revisiones", "Tiempo de entrega: 5 días"]
    },
    {
      id: "premium",
      name: "Premium",
      price: "150€",
      description: "Modelo complejo con alto nivel de detalle",
      features: ["Diseño avanzado", "Revisiones ilimitadas", "Tiempo de entrega: 3 días", "Acabado premium"]
    }
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulando envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Presupuesto solicitado",
        description: "Hemos recibido tu solicitud. Nos pondremos en contacto contigo pronto.",
      });
    }, 1500);
  };
  
  return (
    <section id="presupuestos" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Presupuestos personalizados</h2>
          <p className="text-muted-foreground">
            Selecciona el tipo de servicio que necesitas y solicita un presupuesto detallado para tu proyecto de impresión 3D.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {budgetPackages.map((pkg, index) => (
            <Card 
              key={pkg.id} 
              className={cn(
                "border-2 transition-all duration-300 opacity-0 animate-fade-in hover:shadow-xl hover:-translate-y-2",
                selectedPackage === pkg.id ? "border-primary" : "border-border",
              )}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              <CardHeader>
                <CardTitle>{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary mb-4">{pkg.price}</p>
                <ul className="space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant={selectedPackage === pkg.id ? "default" : "outline"} 
                  className="w-full"
                >
                  {selectedPackage === pkg.id ? "Seleccionado" : "Seleccionar"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <form 
          onSubmit={handleSubmit} 
          className="max-w-2xl mx-auto bg-card p-6 rounded-lg border shadow-sm opacity-0 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" placeholder="Tu nombre completo" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="tu@email.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" placeholder="Tu número de teléfono" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeline">Fecha estimada</Label>
              <Input id="timeline" type="date" />
            </div>
          </div>
          
          <div className="space-y-2 mb-6">
            <Label htmlFor="description">Describe tu proyecto</Label>
            <Textarea 
              id="description" 
              placeholder="Detalla las características de tu proyecto, dimensiones, acabados, etc."
              className="min-h-32"
              required
            />
          </div>
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </>
            ) : "Solicitar presupuesto"}
          </Button>
        </form>
      </div>
    </section>
  );
}
