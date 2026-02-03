
import React from 'react';
import { motion } from 'framer-motion';
import GlassStack from './GlassStack';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#E8FFF5] py-24 md:py-32 rounded-[48px] mx-4 my-12 overflow-hidden text-[#1F2937]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4 block">DIE KRAFT HINTER DEM GIPFEL</span>
            <h2 className="text-4xl md:text-6xl font-serif font-light mb-8 leading-tight">
              Wir gestalten digitale Meilensteine, die <span className="italic">skalieren.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
              Avalanche ist ein Boutique-Designstudio, das aus der Leidenschaft für ästhetische Präzision und technische Exzellenz entstanden ist. Wir bauen nicht nur Webseiten; wir initiieren digitale Lawinen des Erfolgs für Marken, die bereit sind, die Führung zu übernehmen.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-3xl bg-white/60 border border-white/40 shadow-sm backdrop-blur-md group hover:bg-white/80 transition-all">
                <h4 className="font-bold text-xl mb-3 text-indigo-600">Ästhetische Präzision</h4>
                <p className="text-sm text-gray-500">Jedes Pixel wird mit Absicht gesetzt, um sicherzustellen, dass Ihre Marke so hochwertig aussieht wie Ihr Service.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white/60 border border-white/40 shadow-sm backdrop-blur-md group hover:bg-white/80 transition-all">
                <h4 className="font-bold text-xl mb-3 text-cyan-600">Spitzentechnologie</h4>
                <p className="text-sm text-gray-500">Wir nutzen modernste Frameworks, um blitzschnelle Ladezeiten und unendliche Skalierbarkeit zu garantieren.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual (3D Stack) */}
          <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
            <GlassStack />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
