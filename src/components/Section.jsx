import { motion } from 'framer-motion';

export default function Section({ id, title, children, className = '' }) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className="container max-w-[1100px] mx-auto px-6">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {title}
              <span className="text-brand-accent">.</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-accent to-brand-red rounded-full"></div>
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
