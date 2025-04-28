
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export function ProductsSection() {
  const { toast } = useToast();
  const [category, setCategory] = useState<string>("all");
  
  const categories = [
    { id: "all", name: "Todos" },
    { id: "decorative", name: "Decorativos" },
    { id: "functional", name: "Funcionales" },
    { id: "figurines", name: "Figuras" },
  ];
  
  const products: Product[] = [
    {
      id: 1,
      name: "Lámpara Geométrica",
      description: "Lámpara decorativa con diseño geométrico moderno",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3",
      category: "decorative",
    },
    {
      id: 2,
      name: "Organizador de Escritorio",
      description: "Organizador modular para mantener tu escritorio ordenado",
      price: 25.99,
      image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80&w=1987&ixlib=rb-4.0.3",
      category: "functional",
    },
    {
      id: 3,
      name: "Figura Astronauta",
      description: "Figura decorativa de astronauta en estilo minimalista",
      price: 32.50,
      image: "https://images.unsplash.com/photo-1579364046732-c21c2177730d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
      category: "figurines",
    },
    {
      id: 4,
      name: "Maceta Hexagonal",
      description: "Maceta moderna con patrón hexagonal, perfecta para cactus",
      price: 18.75,
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3",
      category: "decorative",
    },
  ];

  const filteredProducts = category === "all" 
    ? products 
    : products.filter(product => product.category === category);
    
  const handleAddToCart = (product: Product) => {
    toast({
      title: "Añadido al carrito",
      description: `${product.name} se ha añadido a tu carrito.`,
      duration: 3000,
    });
  };
  
  return (
    <section id="products" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros productos</h2>
          <p className="text-muted-foreground">
            Descubre nuestra colección de productos impresos en 3D, diseñados con precisión y creatividad.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          {categories.map((cat) => (
            <Button 
              key={cat.id} 
              variant={category === cat.id ? "default" : "outline"} 
              onClick={() => setCategory(cat.id)}
              className="rounded-full"
            >
              {cat.name}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="overflow-hidden hover-float opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-xl font-semibold text-primary">${product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Añadir al carrito
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
