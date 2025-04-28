
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarnos, responderemos pronto.",
      });
      
      // Reset the form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "contacto@aesthetica3d.com",
      link: "mailto:contacto@aesthetica3d.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Teléfono",
      value: "+52 (55) 1234 5678",
      link: "tel:+5215512345678"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Dirección",
      value: "Av. Innovación 123, Col. Tecnológica, Ciudad de México",
      link: "https://maps.google.com"
    }
  ];
  
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-muted-foreground">
            ¿Tienes alguna pregunta o quieres discutir un proyecto? Estamos aquí para ayudarte.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link}
                  className="flex items-start gap-4 group"
                  target={info.label === "Dirección" ? "_blank" : undefined}
                  rel={info.label === "Dirección" ? "noopener noreferrer" : undefined}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <div className="text-primary">{info.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {info.label}
                    </h3>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-10">
              <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Nombre</Label>
                    <Input id="contact-name" placeholder="Tu nombre" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" type="email" placeholder="tu@email.com" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact-subject">Asunto</Label>
                  <Input id="contact-subject" placeholder="Asunto de tu mensaje" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Mensaje</Label>
                  <Textarea 
                    id="contact-message" 
                    placeholder="Escribe tu mensaje aquí..." 
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar mensaje
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="rounded-xl overflow-hidden h-80 shadow-soft">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6603225640184!2d-99.18655682394646!3d19.42710914546154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff354a837fb9%3A0xbd6e4843ae219c01!2sAngel%20of%20Independence!5e0!3m2!1sen!2smx!4v1682912926130!5m2!1sen!2smx" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Aesthetica 3D"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
