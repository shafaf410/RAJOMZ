"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 100, label: "Global Partners", suffix: "+" },
  { value: 50, label: "Countries Connected", suffix: "+" },
  { value: 10000, label: "Shipments Delivered", suffix: "+" },
  { value: 98, label: "On-Time Delivery", suffix: "%" },
  { value: 24, label: "Operations", suffix: "/7" },
];

function Counter({ from = 0, to, duration = 2, suffix = "" }: { from?: number, to: number, duration?: number, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!isInView || !nodeRef.current) return;
    
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing Out function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * (to - from) + from);
      
      if (nodeRef.current) {
        // Format with commas if over 1000
        nodeRef.current.textContent = current.toLocaleString() + suffix;
      }
      
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        if (nodeRef.current) {
          nodeRef.current.textContent = to.toLocaleString() + suffix;
        }
      }
    };
    
    requestAnimationFrame(step);
  }, [isInView, from, to, duration, suffix]);

  return <span ref={nodeRef}>{from}</span>;
}

export default function TrustSection() {
  return (
    <section className="py-24 bg-surface relative z-10 border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center text-center space-y-3"
            >
              <div className="text-4xl lg:text-5xl font-display font-bold text-foreground">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
