"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function GlobalNetworkSection() {
  return (
    <section id="network" className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            Global Reach. Local Expertise.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Our strategic hubs and distribution centers are positioned across major global trade routes to ensure rapid, seamless cargo movement.
          </motion.p>
        </div>

        {/* Map Visualization Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[400px] md:h-[600px] bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden flex items-center justify-center shadow-inner"
        >
          {/* Abstract Map Background (SVG pattern or placeholder) */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(#101828 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} />

          {/* Example Nodes */}
          <div className="absolute top-[30%] left-[20%] group">
            <div className="relative">
              <div className="absolute -inset-2 bg-accent/20 rounded-full animate-ping" />
              <MapPin className="text-accent relative z-10" size={24} fill="#e42b0c" />
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-foreground text-white text-xs py-1 px-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              North America Hub
            </div>
          </div>

          <div className="absolute top-[40%] left-[45%] group">
            <div className="relative">
              <div className="absolute -inset-2 bg-accent/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
              <MapPin className="text-accent relative z-10" size={24} fill="#e42b0c" />
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-foreground text-white text-xs py-1 px-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Europe Hub
            </div>
          </div>

          <div className="absolute top-[60%] left-[75%] group">
            <div className="relative">
              <div className="absolute -inset-2 bg-accent/20 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
              <MapPin className="text-accent relative z-10" size={24} fill="#e42b0c" />
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-foreground text-white text-xs py-1 px-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Asia Pacific Hub
            </div>
          </div>

          <div className="z-10 text-center px-4">
            <p className="text-gray-500 font-medium">Interactive Map rendering...</p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
