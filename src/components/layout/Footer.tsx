import Link from "next/link";
import { Globe, MessageCircle, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-carbon text-white pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-display font-bold mb-4">
              Rajomz <span className="text-accent">Global Ventures</span>
            </h2>
            <p className="text-gray-400 max-w-sm mb-6 text-sm leading-relaxed">
              Connecting Global Trade Through Intelligent Logistics. Delivering freight, supply chain solutions, customs clearance, and global transportation services with unmatched efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Globe size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><MessageCircle size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Mail size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Phone size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-accent transition-colors">Air Freight</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Ocean Freight</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Road Transportation</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Customs Clearance</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Warehousing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Company</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Industries</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>info@rajomzglobal.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Logistics Way, Suite 400<br/>New York, NY 10001</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Rajomz Global Ventures. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-medium">Rajomz Global Ventures — Connecting Businesses Across Borders.</p>
        </div>
      </div>
    </footer>
  );
}
