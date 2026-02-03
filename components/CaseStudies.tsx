
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  return (
    <section id="work" className="bg-[#F0FFFE] py-24 md:py-32 rounded-[48px] mx-4 my-12 text-[#1F2937]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-20 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-cyan-600 mb-4">AUSGEWÄHLTE PROJEKTE</span>
          <h2 className="text-4xl md:text-6xl font-serif font-light">Digitale Meilensteine</h2>
        </div>

        <div className="flex flex-col gap-24">
          {/* Project 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[32px] group"
            >
              <img 
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=1200&h=800" 
                alt="Luxury Lifestyle Store" 
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-wrap gap-2">
                {['LUXUS-RETAIL', 'UI/UX DESIGN', 'NEXT.JS', 'STRIPE'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-[10px] font-bold tracking-wider text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-light leading-snug">
                The Zenith: Ein High-End Lifestyle Store für globalen Luxus
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-lg">
                Wir haben ein minimales, hochgeschwindigkeits-Shopping-Erlebnis für Zenith entworfen, das die Exklusivität ihrer physischen Showrooms widerspiegelt.
              </p>
              <button className="flex items-center gap-2 font-bold text-indigo-600 hover:gap-4 transition-all">
                Case Study lesen <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          {/* Project 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1 flex flex-col gap-6"
            >
              <div className="flex flex-wrap gap-2">
                {['SAAS', 'FINTECH', 'BRANDING', 'DASHBOARD'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-[10px] font-bold tracking-wider text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-light leading-snug">
                Lumina: Intuitives Dashboard-Design für moderne Finanzen
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-lg">
                Lumina benötigte ein komplexes Dashboard, das sich trotzdem einfach bedienen lässt. Unsere Lösung kombiniert Datendichte mit klarer visueller Hierarchie.
              </p>
              <button className="flex items-center gap-2 font-bold text-indigo-600 hover:gap-4 transition-all">
                Case Study lesen <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 relative overflow-hidden rounded-[32px] group"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=800" 
                alt="SaaS Dashboard" 
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>
        </div>

        <div className="mt-32 text-center">
          <button className="bg-white text-black border border-gray-200 px-10 py-5 rounded-full font-bold shadow-sm hover:shadow-lg transition-all flex items-center gap-3 mx-auto">
            Gesamtes Portfolio <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
