
import React from 'react';
import { motion } from 'framer-motion';

const GlassStack: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
      <motion.div
        animate={{ 
          rotateY: [0, 5, 0, -5, 0],
          rotateX: [0, -5, 0, 5, 0],
          y: [0, -10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-64 h-80"
      >
        {/* Layer 1 - Cyan */}
        <div className="absolute inset-0 bg-cyan-400/20 backdrop-blur-xl border border-cyan-400/30 rounded-3xl -rotate-12 translate-x-[-20%] translate-y-4 shadow-xl" />
        
        {/* Layer 2 - Indigo */}
        <div className="absolute inset-0 bg-indigo-500/20 backdrop-blur-xl border border-indigo-500/30 rounded-3xl rotate-3 translate-x-4 translate-y-[-10%] shadow-xl" />
        
        {/* Layer 3 - Purple (Main) */}
        <div className="absolute inset-0 bg-purple-600/30 backdrop-blur-2xl border border-purple-400/40 rounded-3xl rotate-[-6deg] translate-x-[-10%] translate-y-[-5%] flex items-center justify-center shadow-2xl">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg" />
          </div>
        </div>
        
        {/* Floating circles */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-400/40 blur-2xl rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, -30, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-300/40 blur-3xl rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default GlassStack;
