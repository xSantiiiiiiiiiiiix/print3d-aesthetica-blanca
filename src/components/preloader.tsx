
import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-r-primary border-t-transparent border-b-transparent border-l-transparent animate-spin" style={{animationDirection: 'reverse', animationDuration: '1s'}}></div>
        <div className="absolute inset-4 rounded-full border-4 border-b-primary border-t-transparent border-r-transparent border-l-transparent animate-spin" style={{animationDuration: '0.75s'}}></div>
      </div>
    </div>
  );
}
