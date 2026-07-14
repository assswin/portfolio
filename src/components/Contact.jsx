import { motion } from 'framer-motion';
import { Mail, Link, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
      {/* Contact Info Card */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-1 glass-strong rounded-3xl p-10 flex flex-col justify-between"
      >
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">Let's talk.</h3>
          <p className="text-white/50 mb-10 text-lg font-light leading-relaxed">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <a 
            href={`mailto:${portfolioData.contact.email}`}
            className="flex items-center space-x-4 glass p-4 rounded-2xl transition-all duration-300 group glass-hover w-fit pr-8"
          >
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-brand-pop/20 transition-colors">
              <Mail className="text-white/60 group-hover:text-brand-pop transition-all duration-300" size={20} />
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Email</p>
              <span className="text-white/80 group-hover:text-white font-medium transition-all duration-300">{portfolioData.contact.email}</span>
            </div>
          </a>
          
          <a 
            href="#"
            className="flex items-center space-x-4 glass p-4 rounded-2xl transition-all duration-300 group glass-hover w-fit pr-8"
          >
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-brand-pop/20 transition-colors">
              <Link className="text-white/60 group-hover:text-brand-pop transition-all duration-300" size={20} />
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">LinkedIn</p>
              <span className="text-white/80 group-hover:text-white font-medium transition-all duration-300">{portfolioData.contact.linkedin}</span>
            </div>
          </a>
        </div>
      </motion.div>

      {/* Decorative Form UI */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 glass rounded-3xl p-10 relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pop/10 rounded-full blur-[80px] group-hover:bg-brand-pop/20 transition-colors duration-700"></div>
        <form className="relative z-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/60 ml-2">Name</label>
            <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-brand-pop/50 transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/60 ml-2">Email</label>
            <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-brand-pop/50 transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/60 ml-2">Message</label>
            <textarea placeholder="Hello, I'd like to talk about..." rows="4" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-brand-pop/50 transition-colors resize-none"></textarea>
          </div>
          <button className="w-full bg-white text-black font-semibold rounded-2xl px-6 py-4 mt-2 flex items-center justify-center space-x-2 hover:bg-brand-pop hover:text-white transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] group/btn">
            <span>Send Message</span>
            <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </form>
      </motion.div>
    </div>
  );
}
