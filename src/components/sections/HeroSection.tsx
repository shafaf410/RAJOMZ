import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen pt-24 pb-10 flex items-center overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="max-w-xl">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.15] tracking-tight mb-8 text-foreground">
            Connecting Global Trade Through <br /> <span className="text-accent">Intelligent Logistics</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#quote"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-sm hover:bg-accent/90 transition-all group"
            >
              Request a Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Side: (Reserved for future Video Background) */}
        <div className="hidden lg:block w-full"></div>
        
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-100/50 to-transparent pointer-events-none -z-10" />
    </section>
  );
}
