import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
