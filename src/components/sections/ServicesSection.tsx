"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { servicesData, ServiceType } from "@/data/servicesData";
import ServiceDetailsOverlay from "./ServiceDetailsOverlay";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<ServiceType | null>(null);

  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            Enterprise Logistics Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Comprehensive freight, warehousing, and supply chain solutions tailored to move your business forward.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                layoutId={`service-card-${service.id}`}
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-xl border border-gray-200 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 overflow-hidden min-h-[340px] flex flex-col justify-end cursor-pointer"
                onClick={() => setActiveService(service)}
              >
                {/* Background Image */}
                <motion.div 
                  layoutId={`service-image-${service.id}`}
                  className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.heroImage})` }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0" />
                
                {/* Hover Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-10" />
                
                <div className="relative z-10 p-8 flex flex-col items-start w-full">
                  <motion.div 
                    layoutId={`service-icon-${service.id}`}
                    className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center mb-6 text-white group-hover:bg-accent transition-colors duration-300 border border-white/10"
                  >
                    <Icon size={28} strokeWidth={1.5} />
                  </motion.div>
                  
                  <motion.h3 
                    layoutId={`service-title-${service.id}`}
                    className="text-xl font-bold text-white mb-4 font-display"
                  >
                    {service.title}
                  </motion.h3>
                  
                  <div className="inline-flex items-center text-sm font-semibold text-white hover:text-accent transition-colors">
                    Learn More 
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeService && (
          <ServiceDetailsOverlay 
            service={activeService} 
            onClose={() => setActiveService(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
