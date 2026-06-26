"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative h-screen pt-24 pb-10 flex items-center overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="max-w-xl">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.15] tracking-tight mb-8 text-white ">
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
      
      {/* Background Video */}
      {isMounted && (
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          onEnded={(e) => {
            const video = e.target as HTMLVideoElement;
            video.play().catch(console.error);
          }}
          className="absolute inset-0 w-full h-full object-cover -z-20"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      )}
    </section>
  );
}
