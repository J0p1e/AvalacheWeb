
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden min-h-screen flex flex-col justify-center items-center">
      {/* Background Aurora Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-gradient-to-t from-cyan-400/20 via-indigo-600/10 to-transparent blur-[120px] rounded-[100%] animate-pulse-gradient" />
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-cyan-300">
            Premium Webdesign & Digitale Branding Agentur
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif font-light leading-tight mb-8"
        >
          Digitaler Impact.<br />
          Maximale <span className="italic font-light">Performance.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Wir erschaffen digitale Erlebnisse, die einen bleibenden Eindruck hinterlassen. Von atemberaubendem Design bis hin zu fehlerfreiem Code – wir bauen für den digitalen Gipfel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all group">
            Projekt anfragen
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto glass hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all">
            Portfolio ansehen
          </button>
        </motion.div>

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 42}`}
                className="w-10 h-10 rounded-full border-2 border-[#0F0F23] bg-indigo-900"
                alt="Partner"
              />
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-[#0F0F23] bg-cyan-600 flex items-center justify-center text-[10px] font-bold">
              25+
            </div>
          </div>
          <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">Vertraut von ambitionierten Marken weltweit</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
