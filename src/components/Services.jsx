import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {portfolioData.services.map((service) => (
        <motion.div
          key={service.title}
          variants={itemVariants}
          className="group glass rounded-2xl p-8 glass-hover transition-all duration-500"
        >
          <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-brand-pop transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-white/40 leading-relaxed text-lg font-light">
            {service.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
