"use client";

import { motion } from "framer-motion";
import { Factory, ShoppingBag, ShoppingCart, Car, Stethoscope, Wrench, Package, Tractor } from "lucide-react";

const industries = [
  { name: "Manufacturing", icon: Factory, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" },
  { name: "Retail", icon: ShoppingBag, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop" },
  { name: "E-Commerce", icon: ShoppingCart, image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop" },
  { name: "Automotive", icon: Car, image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop" },
  { name: "Healthcare", icon: Stethoscope, image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop" },
  { name: "Industrial Equipment", icon: Wrench, image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=800&auto=format&fit=crop" },
  { name: "Consumer Goods", icon: Package, image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop" },
  { name: "Agriculture", icon: Tractor, image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop" },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-carbon text-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Industries We Serve
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg"
            >
              Specialized logistics solutions tailored to the unique demands of global industries. We understand the precise requirements of your sector.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="px-6 py-3 border border-gray-700 rounded-full text-sm font-medium text-gray-300">
              50+ Countries Connected
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300 overflow-hidden min-h-[240px] flex flex-col items-center justify-center text-center cursor-pointer"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${industry.image})` }}
                />
                
                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col items-center justify-end w-full h-full pb-8 drop-shadow-md">
                  <Icon size={36} strokeWidth={1.5} className="text-white mb-4 transition-transform duration-300 group-hover:-translate-y-1 drop-shadow-lg" />
                  <h3 className="font-semibold text-white transition-colors duration-300 text-lg drop-shadow-lg">
                    {industry.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
