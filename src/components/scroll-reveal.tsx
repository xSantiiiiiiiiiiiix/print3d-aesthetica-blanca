
import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  distance?: string;
  duration?: number;
  origin?: "top" | "right" | "bottom" | "left";
  easing?: string;
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  distance = "30px",
  duration = 1200,  // Increased duration for slower animation
  origin = "bottom",
  easing = "cubic-bezier(0.5, 0, 0, 1)",
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    // Initial state - hidden
    element.style.opacity = "0";
    element.style.transition = `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`;
    
    // Set initial position based on origin
    switch (origin) {
      case "top":
        element.style.transform = `translateY(-${distance})`;
        break;
      case "right":
        element.style.transform = `translateX(${distance})`;
        break;
      case "bottom":
        element.style.transform = `translateY(${distance})`;
        break;
      case "left":
        element.style.transform = `translateX(-${distance})`;
        break;
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply delay if specified
            setTimeout(() => {
              element.style.opacity = "1";
              element.style.transform = "translate(0, 0)";
            }, delay);
            
            // Stop observing after animation
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.2, // Increased threshold to trigger a bit later
        rootMargin: "0px",
      }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay, distance, duration, origin, easing]);
  
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
