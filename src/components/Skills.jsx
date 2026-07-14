import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-2 md:grid-cols-3 gap-6"
    >
      {portfolioData.skills.map((skill) => (
        <motion.div
          key={skill.name}
          variants={itemVariants}
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
    </motion.div>
  );
}
