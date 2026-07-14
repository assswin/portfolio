import { motion } from 'framer-motion';

export default function Section({ id, title, children, className = '' }) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className="container max-w-[1100px] mx-auto px-6">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">
                {title}
                <span className="text-brand-pop">.</span>
              </h2>
              <div className="flex-1 h-[1px] bg-white/10"></div>
            </div>
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
