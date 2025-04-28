
import { cn } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Productos",
      links: [
        { label: "Decorativos", href: "#" },
        { label: "Funcionales", href: "#" },
        { label: "Figuras", href: "#" },
        { label: "Todos los productos", href: "#products" },
      ],
    },
    {
      title: "Servicios",
      links: [
        { label: "Impresión personalizada", href: "#custom-order" },
        { label: "Diseño 3D", href: "#" },
        { label: "Presupuestos", href: "#" },
        { label: "Proyectos empresariales", href: "#" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Sobre nosotros", href: "#about" },
        { label: "Blog", href: "#" },
        { label: "Contacto", href: "#contact" },
        { label: "Trabaja con nosotros", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Términos y condiciones", href: "#" },
        { label: "Política de privacidad", href: "#" },
        { label: "Política de cookies", href: "#" },
        { label: "FAQ", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-muted/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <div className="flex-shrink-0 font-bold text-xl text-primary">
              <a href="#home">Aesthetica 3D</a>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Transformando ideas en objetos tangibles desde 2020
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {year} Aesthetica 3D. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
