"use client";

import { motion } from "framer-motion";
import { Globe, Eye, Headphones, ShieldCheck, Lock, Cpu } from "lucide-react";

const features = [
  { title: "Global Reach", description: "Expansive network connecting over 50 countries with seamless integration.", icon: Globe },
  { title: "Real-Time Visibility", description: "Advanced tracking systems for end-to-end cargo monitoring.", icon: Eye },
  { title: "Dedicated Support", description: "24/7 expert logistics support to handle complex supply chain challenges.", icon: Headphones },
  { title: "Customs Expertise", description: "In-house brokerage ensuring compliance and avoiding delays.", icon: ShieldCheck },
  { title: "Secure Handling", description: "Stringent security protocols for high-value and sensitive cargo.", icon: Lock },
  { title: "Technology-Driven", description: "AI-powered routing and analytics for optimized freight operations.", icon: Cpu },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            Why Industry Leaders Choose Rajomz
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow bg-white flex flex-col items-start"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-accent mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold font-display text-foreground mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
