import { motion } from 'framer-motion';
import { Mail, Link } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto py-12">
      <motion.a 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={`mailto:${portfolioData.contact.email}`}
        className="flex items-center space-x-4 bg-transparent border border-brand-border hover:border-white rounded-full px-8 py-4 transition-all duration-300 group"
      >
        <Mail className="text-brand-muted group-hover:text-brand-text transition-colors" size={20} />
        <span className="text-brand-muted group-hover:text-brand-text font-medium">{portfolioData.contact.email}</span>
      </motion.a>
      
      <motion.a 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href="#" // Add actual link here if available
        className="flex items-center space-x-4 bg-transparent border border-brand-border hover:border-white rounded-full px-8 py-4 transition-all duration-300 group"
      >
        <Link className="text-brand-muted group-hover:text-brand-text transition-colors" size={20} />
        <span className="text-brand-muted group-hover:text-brand-text font-medium">{portfolioData.contact.linkedin}</span>
      </motion.a>
    </div>
  );
}
