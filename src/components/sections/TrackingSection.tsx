"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Package, MapPin, Calendar, Clock, ChevronRight } from "lucide-react";

export default function TrackingSection() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;
    
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      setShowResult(true);
    }, 1200);
  };

  return (
    <section id="tracking" className="py-24 bg-background relative border-y border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto bg-surface rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
          
          <div className="p-8 md:p-12 bg-carbon text-white">
            <h2 className="text-3xl font-display font-bold mb-4">Track Your Shipment</h2>
            <p className="text-gray-400 mb-8 max-w-xl">Enter your Rajomz tracking number, Air Waybill (AWB), or Bill of Lading (B/L) to get real-time status updates.</p>
            
            <form suppressHydrationWarning onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="e.g. RGV-123456789"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-sm bg-white/10 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                />
              </div>
              <button 
                type="submit"
                disabled={isSearching}
                className="px-8 py-4 bg-accent text-white font-semibold rounded-sm hover:bg-accent/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap flex items-center justify-center min-w-[140px]"
              >
                {isSearching ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Track Cargo"
                )}
              </button>
            </form>
          </div>

          {/* Results Area */}
          {showResult && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="p-8 md:p-12 bg-white"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Tracking Number</p>
                  <p className="text-xl font-bold font-mono text-foreground">{trackingNumber || "RGV-123456789"}</p>
                </div>
                <div className="px-4 py-2 bg-green-50 text-green-700 font-semibold rounded-full text-sm border border-green-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  In Transit
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative mb-16">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 rounded-full" />
                <div className="absolute top-1/2 left-0 w-[60%] h-1 bg-accent -translate-y-1/2 rounded-full transition-all duration-1000" />
                
                <div className="relative flex justify-between">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center ring-4 ring-white z-10 mb-3">
                      <Package size={12} />
                    </div>
                    <span className="text-xs font-semibold text-foreground text-center">Picked Up</span>
                    <span className="text-xs text-gray-400 mt-1">Shanghai, CN</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center ring-4 ring-white z-10 mb-3">
                      <MapPin size={12} />
                    </div>
                    <span className="text-xs font-semibold text-foreground text-center">In Transit</span>
                    <span className="text-xs text-gray-400 mt-1">Dubai, UAE</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center ring-4 ring-white z-10 mb-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full" />
                    </div>
                    <span className="text-xs font-semibold text-gray-400 text-center">Customs</span>
                    <span className="text-xs text-gray-400 mt-1">Pending</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center ring-4 ring-white z-10 mb-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full" />
                    </div>
                    <span className="text-xs font-semibold text-gray-400 text-center">Delivered</span>
                    <span className="text-xs text-gray-400 mt-1">Hamburg, DE</span>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-6">
                <h3 className="font-display font-semibold text-lg text-foreground mb-6">Shipment History</h3>
                
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <div className="w-px h-full bg-gray-200 my-2" />
                  </div>
                  <div className="pb-6">
                    <p className="font-semibold text-foreground">Arrived at Transit Hub</p>
                    <p className="text-sm text-gray-500 mt-1 flex items-center gap-2"><MapPin size={14} /> Dubai International Airport (DXB)</p>
                    <p className="text-xs text-gray-400 mt-2 flex items-center gap-2"><Clock size={12} /> Oct 24, 2026 - 14:30 GST</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-gray-300" />
                    <div className="w-px h-full bg-gray-200 my-2" />
                  </div>
                  <div className="pb-6">
                    <p className="font-medium text-gray-700">Departed Origin Facility</p>
                    <p className="text-sm text-gray-500 mt-1 flex items-center gap-2"><MapPin size={14} /> Shanghai Pudong (PVG)</p>
                    <p className="text-xs text-gray-400 mt-2 flex items-center gap-2"><Clock size={12} /> Oct 23, 2026 - 08:15 CST</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-gray-300" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Shipment Information Received</p>
                    <p className="text-xs text-gray-400 mt-2 flex items-center gap-2"><Calendar size={12} /> Oct 22, 2026</p>
                  </div>
                </div>
              </div>
              
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
