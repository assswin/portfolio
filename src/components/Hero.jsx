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

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-bg">
      {/* Parallax Background Grid */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </motion.div>

      <div className="container max-w-[1200px] mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Parallax Text Content */}
        <motion.div 
          style={{ y: textY, opacity }}
          className="flex-1 text-center md:text-left pt-12 md:pt-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 border border-brand-border rounded-full px-4 py-2 mb-8 bg-brand-surface/50 backdrop-blur-sm"
          >
            <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
            <span className="text-sm font-medium tracking-wide text-brand-muted">Frontend Developer</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-[1.1]"
          >
            Shree <br/><span className="text-brand-muted">Aswin.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-brand-muted max-w-lg font-light leading-relaxed"
          >
            Crafting minimal, high-performance web experiences through code and design.
          </motion.p>
        </motion.div>

        {/* 3D Interactive Profile Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ opacity }}
          className="flex-shrink-0 perspective-[1000px] w-[300px] h-[400px] md:w-[400px] md:h-[500px]"
        >
          <InteractiveCard className="w-full h-full bg-brand-surface border border-brand-border shadow-2xl flex flex-col justify-end p-6 overflow-hidden group">
            {/* Image Layer */}
            <div className="absolute inset-0 z-0">
              <img 
                src={profileImg} 
                alt="Shree Aswin" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>
            
            {/* Content Layer (pops out in 3D due to InteractiveCard's translateZ) */}
            <div className="relative z-10 flex flex-col gap-2">
              <h3 className="text-3xl font-bold text-white tracking-tight">Interactive</h3>
              <p className="text-brand-muted text-sm uppercase tracking-widest">Hover to interact</p>
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
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-muted mb-4 font-semibold">Scroll</span>
        <div className="w-[1px] h-16 bg-brand-border relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 bg-white"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
