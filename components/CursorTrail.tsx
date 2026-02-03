
import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CursorTrail: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      style={{
        x: mouseX,
        y: mouseY,
      }}
      className="fixed top-0 left-0 w-6 h-6 border-2 border-indigo-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
    />
  );
};

export default CursorTrail;
