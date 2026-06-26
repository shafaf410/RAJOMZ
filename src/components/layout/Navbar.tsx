"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-surface shadow-md py-2" 
          : "bg-white/30 backdrop-blur-lg border-b border-white/30 shadow-sm py-3"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo-transparent.png" alt="Rajomz Global Ventures" width={150} height={40} className="object-contain" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-6">
          <a
            href="mailto:rajomzgroups@gmail.com"
            className="px-6 py-2.5 bg-accent text-white text-sm font-medium rounded-sm hover:bg-accent/90 transition-colors"
          >
            Request Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-surface shadow-md py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="border-t border-gray-200 my-2 pt-4 flex flex-col space-y-4">
            <a
              href="mailto:rajomzgroups@gmail.com"
              className="px-6 py-3 bg-accent text-white text-center font-medium rounded-sm hover:bg-accent/90 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request Quote
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
