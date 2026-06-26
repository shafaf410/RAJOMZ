import { motion, AnimatePresence } from "framer-motion";
import { ServiceType } from "@/data/servicesData";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface ServiceDetailsOverlayProps {
  service: ServiceType;
  onClose: () => void;
}

export default function ServiceDetailsOverlay({ service, onClose }: ServiceDetailsOverlayProps) {
  const Icon = service.icon;
  const overlayRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      ref={overlayRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      data-lenis-prevent="true"
      className="fixed inset-0 z-50 bg-white overflow-y-auto overflow-x-hidden no-scrollbar"
    >
      {/* Sticky Header Actions */}
      <div className="fixed top-0 left-0 w-full z-[60] flex justify-between items-center px-6 lg:px-12 py-6 bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
        <button
          onClick={onClose}
          className="pointer-events-auto flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all border border-white/20"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back</span>
        </button>
        <Link
          href="#quote"
          onClick={onClose}
          className="pointer-events-auto flex items-center gap-2 px-6 py-2.5 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(180,138,58,0.4)]"
        >
          Request Quote
        </Link>
      </div>

      {/* Hero Section */}
      <motion.div 
        layoutId={`service-image-${service.id}`}
        className="relative w-full h-[45vh] lg:h-[55vh] overflow-hidden bg-carbon"
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        
        {/* Floating particles/lights overlay can be added here if needed */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50" />

        <div className="absolute bottom-0 left-0 w-full p-6 lg:p-12 lg:pb-16 flex flex-col justify-end">
          <motion.div layoutId={`service-icon-${service.id}`} className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 text-white border border-white/20">
            <Icon size={32} strokeWidth={1.5} />
          </motion.div>
          <motion.h1 layoutId={`service-title-${service.id}`} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            {service.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl"
          >
            {service.shortDescription}
          </motion.p>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="bg-surface min-h-[50vh] relative z-10 pb-24">
        <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-12 gap-16">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-gray-700"
            >
              {service.fullDescription.map((p, idx) => (
                <p key={idx} className="mb-6 leading-relaxed text-lg">{p}</p>
              ))}
            </motion.div>

            {/* Key Features */}
            {service.keyFeatures && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-carbon mb-6 font-display">{service.keyFeaturesTitle || "Key Features"}</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar (Right) */}
          <div className="lg:col-span-5 space-y-12">
            {/* Timeline / Process */}
            {service.timeline && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-carbon mb-8 font-display">{service.timelineTitle || "Process"}</h3>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                  {service.timeline.map((item, idx) => (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      {/* Icon / Node */}
                      <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-accent text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
                        <span className="text-[10px] font-bold">{idx + 1}</span>
                      </div>
                      {/* Card */}
                      <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                        <div className="font-semibold text-gray-800">{item}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Horizontal Image Gallery */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full pb-24 overflow-hidden"
        >
          <div className="container mx-auto px-6 lg:px-12 mb-8">
            <h3 className="text-3xl font-bold text-carbon font-display">Logistics in Action</h3>
          </div>
          
          <div className="flex overflow-x-auto gap-6 px-6 lg:px-12 pb-8 no-scrollbar snap-x">
            {service.gallery.map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="relative flex-none w-[280px] h-[350px] sm:w-[350px] sm:h-[450px] rounded-2xl overflow-hidden shadow-xl snap-center"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${img})` }}
                />
                <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Footer CTA inside overlay */}
        <div className="container mx-auto px-6 lg:px-12 text-center pb-12">
           <h2 className="text-3xl md:text-4xl font-display font-bold text-carbon mb-6">Ready to streamline your logistics?</h2>
           <Link 
              href="#quote"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-carbon text-white font-semibold rounded-sm hover:bg-accent transition-colors text-lg"
            >
              Get Started Now
              <ArrowRight size={20} />
            </Link>
        </div>
      </div>
    </motion.div>
  );
}
