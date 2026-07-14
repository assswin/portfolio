import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {portfolioData.services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
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
    </div>
  );
}
