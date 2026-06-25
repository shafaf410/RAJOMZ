"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = document.getElementById("hero-video") as HTMLVideoElement;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section className="relative h-screen pt-24 pb-10 flex items-center overflow-hidden bg-carbon">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="max-w-xl">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.15] tracking-tight mb-8 text-white">
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
      <div 
        className="absolute inset-0 w-full h-full -z-20"
        dangerouslySetInnerHTML={{
          __html: `
            <video 
              id="hero-video"
              autoplay 
              loop 
              muted 
              playsinline
              preload="auto"
              style="width: 100%; height: 100%; object-fit: cover;"
            >
              <source src="https://res.cloudinary.com/dapksjmal/video/upload/w_1280,q_auto,f_auto/v1782406692/VN20260625_220213_xxacde.mp4" type="video/mp4" />
            </video>
          `
        }}
      />
    </section>
  );
}
