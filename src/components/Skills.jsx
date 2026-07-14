import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {portfolioData.skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group glass rounded-2xl p-6 glass-hover transition-all duration-300"
        >
          <div className="w-12 h-12 mb-5 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 group-hover:border-brand-pop/30 transition-all duration-300">
            <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-pop transition-colors duration-300">{skill.name}</h3>
          <p className="text-white/40 text-sm leading-relaxed font-light">
            {skill.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
