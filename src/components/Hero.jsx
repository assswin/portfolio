import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import InteractiveCard from './InteractiveCard';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Floating gradient orbs for glass effect */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-[100px]"></div>
        <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]"></div>
      </motion.div>

      <div className="container max-w-[1200px] mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-between gap-16">
        
        <motion.div 
          style={{ y: textY, opacity }}
          className="flex-1 text-center md:text-left pt-12 md:pt-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 rounded-full px-4 py-2 mb-8 glass transition-all duration-300"
          >
            <div className="w-2 h-2 rounded-full bg-brand-pop animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.6)]"></div>
            <span className="text-sm font-medium tracking-wide text-white/80">Frontend Developer</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-[1.1]"
          >
            Shree <br/><span className="text-white/50">Aswin.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/60 max-w-lg font-light leading-relaxed"
          >
            Crafting minimal, high-performance web experiences through code and design.
          </motion.p>
        </motion.div>

        {/* 3D Glass Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ opacity }}
          className="flex-shrink-0 perspective-[1000px] w-[300px] h-[400px] md:w-[400px] md:h-[500px]"
        >
          <InteractiveCard className="w-full h-full glass-strong rounded-2xl flex flex-col justify-end p-6 overflow-hidden group glass-glow transition-all duration-500">
            <div className="absolute inset-0 z-0">
              <img 
                src={profileImg} 
                alt="Shree Aswin" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-[#0f0f1a]/40 to-transparent z-10"></div>
            </div>
            
            <div className="relative z-20 flex flex-col gap-2">
              <h3 className="text-3xl font-bold text-white tracking-tight group-hover:text-brand-pop transition-colors duration-300">Interactive</h3>
              <p className="text-white/50 text-sm uppercase tracking-widest group-hover:text-white/80 transition-colors duration-300">Hover to interact</p>
            </div>
          </InteractiveCard>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4 font-semibold">Scroll</span>
        <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 bg-brand-pop shadow-[0_0_8px_rgba(99,102,241,0.5)]"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
