
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, ZoomIn } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogClose 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  description: string;
}

export function GallerySection() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3",
      title: "Proceso de impresión",
      description: "Visualiza nuestras máquinas de última generación en pleno funcionamiento"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3",
      title: "Lámpara geométrica",
      description: "Diseño exclusivo con patrones geométricos y luz cálida"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1579364046732-c21c2177730d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
      title: "Figura astronauta",
      description: "Detalle impresionante en esta figura decorativa de astronauta"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3",
      title: "Diseño técnico",
      description: "Nuestros diseñadores trabajando en nuevos modelos personalizados"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80&w=1987&ixlib=rb-4.0.3",
      title: "Organización del espacio",
      description: "Soluciones para mantener tu espacio de trabajo ordenado"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3",
      title: "Maceta hexagonal",
      description: "Diseño moderno para tus plantas, con patrón hexagonal"
    },
  ];

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handlePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[newIndex]);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <section id="galeria" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galería de trabajos</h2>
          <p className="text-muted-foreground">
            Explora nuestros mejores proyectos y descubre el detalle y calidad de nuestras impresiones 3D.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              onClick={() => handleImageClick(image)}
              className="group relative overflow-hidden rounded-lg bg-black cursor-pointer opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{image.title}</h3>
                  <p className="text-white/80 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{image.description}</p>
                  <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ZoomIn className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-4xl p-1 bg-background/95 backdrop-blur-sm border-none">
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10" />
            
            {selectedImage && (
              <div className="relative">
                <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-lg">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-medium text-lg">{selectedImage.title}</h3>
                  <p className="text-white/80 text-sm">{selectedImage.description}</p>
                </div>
                
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevious();
                    }}
                    className="rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-sm ml-2"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-sm mr-2"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
