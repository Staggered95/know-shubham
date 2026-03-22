import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Award } from 'lucide-react';

const CertificateCard = ({ cert }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-bg-card border border-border-subtle rounded-xl overflow-hidden hover:border-accent-primary/50 transition-colors duration-300 group flex flex-col"
      >
        {/* Image Container */}
        <div 
          className="relative w-full aspect-[4/3] bg-bg-base border-b border-border-subtle overflow-hidden cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="absolute top-3 right-3 z-20 bg-black/60 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
            <Maximize2 size={16} />
          </div>
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Text Container */}
        <div className="p-5 flex flex-col items-center text-center">
          <Award size={20} className="text-accent-primary mb-2" />
          <h3 className="text-sm font-bold text-text-main group-hover:text-accent-primary transition-colors">
            {cert.title}
          </h3>
          <p className="text-xs text-text-muted font-mono mt-1">
            {cert.issuer}
          </p>
        </div>
      </motion.div>

      {/* Full Screen Lightbox */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 p-2 rounded-full transition-colors z-[110]"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={24} />
            </button>

            <div 
              className="relative w-full max-w-5xl max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} 
            >
              <img
                src={cert.image}
                alt={`${cert.title} full screen`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CertificateCard;