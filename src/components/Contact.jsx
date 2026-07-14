import { motion } from 'framer-motion';
import { Mail, Link } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto py-12">
      <motion.a 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={`mailto:${portfolioData.contact.email}`}
        className="flex items-center space-x-4 glass rounded-full px-8 py-4 transition-all duration-300 group glass-hover"
      >
        <Mail className="text-white/60 group-hover:text-brand-pop transition-all duration-300" size={20} />
        <span className="text-white/60 group-hover:text-brand-pop font-medium transition-all duration-300">{portfolioData.contact.email}</span>
      </motion.a>
      
      <motion.a 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href="#"
        className="flex items-center space-x-4 glass rounded-full px-8 py-4 transition-all duration-300 group glass-hover"
      >
        <Link className="text-white/60 group-hover:text-brand-pop transition-all duration-300" size={20} />
        <span className="text-white/60 group-hover:text-brand-pop font-medium transition-all duration-300">{portfolioData.contact.linkedin}</span>
      </motion.a>
    </div>
  );
}
