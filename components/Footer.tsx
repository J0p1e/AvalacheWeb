
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F0F23] pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-indigo-600 rounded-xl flex items-center justify-center rotate-45">
                <div className="w-4 h-4 bg-white rounded-full -rotate-45" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">avalanche<span className="text-cyan-400">.</span></span>
            </div>
            <p className="text-gray-400 max-w-xs leading-relaxed font-light">
              Wir gestalten und entwickeln digitale Erlebnisse, die einen bleibenden Eindruck hinterlassen. Von atemberaubendem Design bis hin zu fehlerfreiem Code.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Entdecken</h4>
            <ul className="flex flex-col gap-4 text-gray-500 text-sm font-medium">
              <li><a href="#services" className="hover:text-white transition-colors">Leistungen</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Die Agentur</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Kontakt</h4>
            <ul className="flex flex-col gap-4 text-gray-500 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Behance</a></li>
              <li><a href="mailto:hello@avalanche.design" className="hover:text-white transition-colors">hello@avalanche.design</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-600">
          <p>© 2025 Avalanche Studio. Gebaut für den Gipfel.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
