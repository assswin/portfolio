import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  return (
    <div className="flex flex-col gap-24 md:gap-40 py-10">
      {portfolioData.projects.map((project, index) => {
        const isEven = index % 2 === 0;
        return (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 group`}
          >
            {/* Image Side */}
            <div className="w-full md:w-3/5 overflow-hidden rounded-2xl glass glass-glow transition-all duration-300">
              <motion.a 
                href={project.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden"
                whileHover="hover"
              >
                <motion.img 
                  variants={{ hover: { scale: 1.05 } }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-[300px] md:h-[450px] object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-transparent to-transparent z-10"></div>
              </motion.a>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-2/5 flex flex-col justify-center">
              <span className="text-white/30 text-sm uppercase tracking-widest mb-4 font-semibold group-hover:text-brand-pop transition-colors duration-300">
                Case Study {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-brand-pop transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-white/40 text-lg leading-relaxed mb-8 font-light">
                {project.description}
              </p>
              
              <a 
                href={project.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-white/60 font-medium hover:text-brand-pop transition-all w-fit pb-1"
              >
                <span>View Case Study</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
