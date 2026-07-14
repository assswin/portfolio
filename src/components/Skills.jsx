import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
      {portfolioData.skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group flex flex-col items-start"
        >
          <div className="w-12 h-12 mb-6 flex items-center justify-center bg-brand-surface rounded-full border border-brand-border group-hover:bg-white group-hover:border-white transition-colors duration-500">
            <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain group-hover:brightness-0 transition-all duration-500" />
          </div>
          <h3 className="text-xl font-bold text-brand-text mb-2">{skill.name}</h3>
          <p className="text-brand-muted text-sm leading-relaxed font-light max-w-[200px]">
            {skill.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
