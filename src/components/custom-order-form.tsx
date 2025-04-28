
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { Upload } from "lucide-react";

export function CustomOrderForm() {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Pedido enviado",
        description: "Hemos recibido tu pedido. Te contactaremos pronto.",
      });
      
      // Reset the form
      const form = e.target as HTMLFormElement;
      form.reset();
      setFile(null);
    }, 1500);
  };
  
  return (
    <section id="custom-order" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pedidos personalizados</h2>
              <p className="text-muted-foreground mb-6">
                ¿Tienes una idea específica en mente? Cuéntanos sobre tu proyecto y crearemos algo único para ti. Nuestro equipo de diseñadores e ingenieros trabajará contigo para hacer realidad tu visión.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-primary font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Describe tu idea</h3>
                    <p className="text-muted-foreground">Cuéntanos los detalles de tu proyecto y tus requisitos específicos.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-primary font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Sube tu archivo</h3>
                    <p className="text-muted-foreground">Si tienes un modelo 3D o bocetos, súbelos para ayudarnos a entender mejor tu idea.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-primary font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Recibe tu cotización</h3>
                    <p className="text-muted-foreground">Te enviaremos un presupuesto detallado basado en tus especificaciones.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <h3 className="text-xl font-semibold mb-6">Detalles de tu pedido</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" placeholder="Tu nombre" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="project-name">Nombre del proyecto</Label>
                  <Input id="project-name" placeholder="Nombre de tu proyecto" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Descripción del proyecto</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe tu idea, dimensiones, características especiales, etc." 
                    rows={4}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="material">Material</Label>
                    <Select>
                      <SelectTrigger id="material">
                        <SelectValue placeholder="Selecciona material" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pla">PLA</SelectItem>
                        <SelectItem value="abs">ABS</SelectItem>
                        <SelectItem value="petg">PETG</SelectItem>
                        <SelectItem value="tpu">TPU Flexible</SelectItem>
                        <SelectItem value="resin">Resina</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Cantidad</Label>
                    <Input id="quantity" type="number" min="1" defaultValue="1" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="file-upload">Archivo 3D (opcional)</Label>
                  <div className="border-2 border-dashed rounded-lg border-muted p-4 text-center">
                    <input
                      type="file"
                      id="file-upload"
                      className="hidden"
                      accept=".stl,.obj,.3mf,.gcode"
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer flex flex-col items-center gap-2"
                    >
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      {file ? (
                        <span>{file.name}</span>
                      ) : (
                        <span className="text-muted-foreground">
                          Haz clic para seleccionar un archivo o arrastra y suelta aquí
                          <span className="block text-xs mt-1">
                            (STL, OBJ, 3MF, GCODE - Máx. 50MB)
                          </span>
                        </span>
                      )}
                    </label>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch id="rush" />
                  <Label htmlFor="rush">Necesito entrega urgente (costo adicional)</Label>
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Solicitar cotización"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
