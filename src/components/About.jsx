import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-4xl glass-strong rounded-3xl p-8 md:p-14 relative overflow-hidden group glass-glow transition-all duration-500 mx-auto"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-pop to-purple-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
      <p className="text-2xl md:text-4xl text-white/90 leading-relaxed font-light tracking-tight relative z-10">
        <span className="bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent font-medium">Hello there.</span> {portfolioData.about}
      </p>
    </motion.div>
  );
}
