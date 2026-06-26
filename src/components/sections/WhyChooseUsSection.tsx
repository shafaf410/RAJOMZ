"use client";

import { motion } from "framer-motion";
import { Globe, Users, Headphones, Handshake, Briefcase, TrendingUp } from "lucide-react";

const features = [
  { title: "Strong Network", description: "Established regional and international business network driving seamless operations.", icon: Globe },
  { title: "Bulk Shipment Access", description: "Direct access to bulk shipment opportunities enabling cost-effective global trade.", icon: Briefcase },
  { title: "Customer-Focused", description: "Dedicated service approach prioritizing your unique supply chain requirements.", icon: Headphones },
  { title: "Strategic Partnerships", description: "Deep commitment to long-term, sustainable B2B logistics partnerships.", icon: Handshake },
  { title: "Global Expansion", description: "Active expansion plans focusing on key international markets like the UK and Europe.", icon: TrendingUp },
  { title: "Agile & Scalable", description: "A rapidly growing customer base with scalable logistics solutions.", icon: Users },
];

export default function WhyChooseUsSection() {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            Why Choose Rajomz Global Ventures
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            Rajomz Global Ventures Pvt. Ltd. is a newly established company focused on international logistics, courier partnerships, freight solutions, and global trade facilitation. While we are a young company, we are backed by strong industry connections, reliable business networks, and a growing customer base across India and overseas markets.
          </motion.p>
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
