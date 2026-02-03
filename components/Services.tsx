
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Palette, Zap, Puzzle, Layout, Search, BarChart3, ShieldCheck, PenTool } from 'lucide-react';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'design' | 'dev'>('design');

  const services = {
    design: [
      { icon: <Palette />, title: "UI/UX Design", desc: "Benutzerzentrierte Interfaces, die intuitiv und visuell beeindruckend sind." },
      { icon: <PenTool />, title: "Brand Identity", desc: "Entwicklung von Logos, Typografie und visuellen Sprachen, die auffallen." },
      { icon: <Layout />, title: "Webdesign", desc: "Maßgeschneiderte Website-Layouts, die auf Wirkung und Conversion ausgelegt sind." },
      { icon: <Puzzle />, title: "Interaktive Prototypen", desc: "Erleben Sie Ihre Seite vor dem Bau mit hochauflösenden Mockups." },
      { icon: <Search />, title: "UX Research", desc: "Tiefgehende Analyse, um die Bedürfnisse und Probleme Ihrer Nutzer zu verstehen." },
      { icon: <BarChart3 />, title: "CRO Audit", desc: "Datengetriebene Design-Anpassungen zur Steigerung Ihrer Conversion-Raten." },
    ],
    dev: [
      { icon: <Code2 />, title: "Next.js / React", desc: "Hochleistungs-Web-Apps, gebaut für Geschwindigkeit und SEO." },
      { icon: <Zap />, title: "Webflow Entwicklung", desc: "Premium Low-Code Lösungen für schnelles Skalieren und einfache Verwaltung." },
      { icon: <ShieldCheck />, title: "Custom Backend", desc: "Robuste und sichere serverseitige Logik für komplexe Anforderungen." },
      { icon: <Puzzle />, title: "App Integrationen", desc: "Nahtlose Verbindung Ihres digitalen Ökosystems über moderne APIs." },
      { icon: <Layout />, title: "CMS Lösungen", desc: "Flexible Content-Management-Systeme, perfekt auf Ihr Team zugeschnitten." },
      { icon: <BarChart3 />, title: "Performance Tuning", desc: "Optimierter Code für perfekte 100/100 Lighthouse-Scores." },
    ]
  };

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="bg-[#1A1A2E] rounded-[48px] p-8 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-4 block">WAS WIR BIETEN</span>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-white">Unsere Expertise</h2>
              </div>

              {/* Toggle Switch */}
              <div className="inline-flex p-1 bg-white/5 rounded-full border border-white/10 mx-auto md:mx-0">
                <button 
                  onClick={() => setActiveTab('design')}
                  className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'design' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                >
                  Design & Branding
                </button>
                <button 
                  onClick={() => setActiveTab('dev')}
                  className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'dev' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                >
                  Entwicklung & Tech
                </button>
              </div>
            </div>

            <motion.div 
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode='wait'>
                {services[activeTab].map((service, idx) => (
                  <motion.div
                    key={`${activeTab}-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={{ y: -8, backgroundColor: 'rgba(255,255,255,0.05)' }}
                    className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col gap-6 cursor-default transition-colors group"
                  >
                    <div className="w-14 h-14 bg-indigo-600/20 text-indigo-400 rounded-2xl flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-glow">
                      {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
