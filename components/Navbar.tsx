
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Leistungen', href: '#services' },
    { name: 'Portfolio', href: '#work' },
    { name: 'Agentur', href: '#about' },
    { name: 'Karriere', href: '#' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-indigo-600 rounded-xl flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform shadow-lg shadow-cyan-500/20">
            <div className="w-4 h-4 bg-white rounded-full -rotate-45" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">avalanche<span className="text-cyan-400">.</span></span>
        </div>

        {/* Center Desktop Links */}
        <div className="hidden md:flex items-center gap-8 glass rounded-full px-8 py-2.5">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
            >
              {link.name}
              <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </div>

        {/* Right Action */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white text-black hover:bg-gray-100 px-6 py-2.5 rounded-full font-bold transition-colors"
          >
            Projekt starten
            <div className="bg-black text-white p-1 rounded-full">
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass mt-2 p-6 md:hidden flex flex-col gap-6 mx-4 rounded-3xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xl font-medium text-white border-b border-white/10 pb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-indigo-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
              Kontakt aufnehmen <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
