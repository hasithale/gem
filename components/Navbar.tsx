"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Heritage", href: "/heritage" },
    { name: "Collections", href: "/collections" },
    { name: "Authentication", href: "/authentication" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-12 h-24 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/90 backdrop-blur-sm'
    } border-b border-amber-200/50`}>
      <Link href="/" className="font-serif text-2xl tracking-widest font-light text-blue-900">
        Ceylon Gem Merchant
      </Link>

      <div className="hidden md:flex gap-12 items-center">
        {navLinks.map((link) => (
          <Link 
            key={link.name}
            className="font-serif text-sm tracking-[0.2em] uppercase text-slate-500 hover:text-blue-900 transition-colors"
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <Link href="/contact" className="bg-primary text-on-primary px-8 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:opacity-90 transition-opacity hidden sm:block">
          Inquire
        </Link>
        
        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-amber-100 py-8 px-6 flex flex-col gap-6 shadow-xl animate-fade-in">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-sm tracking-[0.2em] uppercase text-slate-500 hover:text-blue-900"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="bg-primary text-on-primary text-center py-4 font-label-caps text-label-caps uppercase tracking-widest"
          >
            Inquire Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
