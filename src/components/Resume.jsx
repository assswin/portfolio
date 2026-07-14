import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

export default function Resume() {
  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full aspect-[4/3] md:aspect-[16/10] bg-[#0b0b0b] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative mb-8"
      >
        <iframe 
          src="/output.pdf" 
          title="Resume PDF" 
          className="absolute inset-0 w-full h-full border-0 bg-white"
          loading="lazy"
        ></iframe>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-6"
      >
        <a 
          href="/output.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-brand-text font-medium transition-all duration-300"
        >
          <ExternalLink size={18} />
          <span>Open in New Tab</span>
        </a>
        
        <a 
          href="/output.pdf" 
          download 
          className="flex items-center space-x-2 px-6 py-3 bg-brand-accent hover:bg-brand-red text-brand-text font-medium rounded-full shadow-[0_0_20px_rgba(217,4,41,0.3)] transition-all duration-300 hover:-translate-y-1"
        >
          <Download size={18} />
          <span>Download PDF</span>
        </a>
      </motion.div>
    </div>
  );
}
