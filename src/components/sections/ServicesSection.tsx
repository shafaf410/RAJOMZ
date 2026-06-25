"use client";

import { motion } from "framer-motion";
import { Plane, Ship, Truck, FileCheck, Warehouse, Network } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Air Freight",
    description: "Fast international air cargo solutions with global carrier partnerships.",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Ocean Freight",
    description: "Reliable FCL and LCL shipping across major trade routes.",
    icon: Ship,
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Road Transportation",
    description: "Efficient domestic and cross-border cargo transportation.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Customs Clearance",
    description: "Fast and compliant customs processing worldwide.",
    icon: FileCheck,
    image: "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Warehousing",
    description: "Secure inventory storage and distribution centers.",
    icon: Warehouse,
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Supply Chain Solutions",
    description: "End-to-end logistics planning and management.",
    icon: Network,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ServicesSection() {
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
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-xl border border-gray-200 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 overflow-hidden min-h-[340px] flex flex-col justify-end"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                
                {/* Hover Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-10" />
                
                <div className="relative z-10 p-8 flex flex-col items-start w-full">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center mb-6 text-white group-hover:bg-accent transition-colors duration-300 border border-white/10">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-6 font-display">
                    {service.title}
                  </h3>
                  
                  <Link 
                    href={`#${service.title.toLowerCase().replace(" ", "-")}`}
                    className="inline-flex items-center text-sm font-semibold text-white hover:text-accent transition-colors"
                  >
                    Learn More 
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
