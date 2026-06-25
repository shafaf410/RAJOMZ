"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-carbon text-white overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Trusted by Global Enterprises
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg mb-12 max-w-md"
            >
              Hear how we've transformed supply chains and accelerated growth for some of the world's most demanding companies.
            </motion.p>
            
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-display font-bold text-accent mb-1">98%</p>
                <p className="text-sm text-gray-400">Client Retention</p>
              </div>
              <div className="w-px bg-gray-800" />
              <div>
                <p className="text-3xl font-display font-bold text-accent mb-1">$2B+</p>
                <p className="text-sm text-gray-400">Cargo Value Managed</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#151820] p-10 md:p-12 rounded-2xl border border-gray-800 relative"
          >
            <Quote className="absolute top-8 right-8 text-gray-800" size={64} />
            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-gray-200">
                "Rajomz completely overhauled our Asian-European logistics corridor. Their real-time visibility platform and proactive customs management reduced our transit times by 15% and cut compliance issues to zero."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center text-xl font-display font-bold text-gray-400">
                  SJ
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Sarah Jenkins</p>
                  <p className="text-accent text-sm font-medium">VP of Supply Chain, TechGlobal Inc.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
