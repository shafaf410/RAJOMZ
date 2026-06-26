"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 lg:py-16 bg-surface relative min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-gray-600 text-base mb-8">
                Connect with our logistics experts to design a customized freight and distribution strategy that meets your business objectives.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold mt-1">1</div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">Consultation</h4>
                    <p className="text-gray-500">We analyze your current logistics setup and identify bottlenecks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold mt-1">2</div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">Strategy Design</h4>
                    <p className="text-gray-500">Our team builds a comprehensive, tailored transportation plan.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold mt-1">3</div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">Execution & Scaling</h4>
                    <p className="text-gray-500">Seamless integration and continuous optimization of your freight.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-foreground text-lg mb-2">Prefer to call?</h4>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-600 font-medium">India: <a href="tel:+917736350626" className="text-accent hover:underline">+91 7736350626</a></p>
                  <p className="text-gray-600 font-medium">UK: <a href="tel:+447349723209" className="text-accent hover:underline">+44 7349723209</a></p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-2xl shadow-gray-200/50"
          >
            <form 
              suppressHydrationWarning 
              className="flex flex-col items-center justify-center h-full min-h-[250px]" 
              onSubmit={(e) => {
                e.preventDefault();
                window.open("https://mail.google.com/mail/?view=cm&fs=1&to=rajomzgroups@gmail.com", "_blank");
              }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-carbon font-display mb-2">Get in Touch</h3>
                <p className="text-gray-500">Reach out directly to our team for a custom quote and strategy.</p>
              </div>
              <button className="w-full py-4 bg-accent text-white font-bold text-lg rounded-sm hover:bg-accent/90 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-accent/20">
                Request Logistics Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
