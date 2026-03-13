import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Clock, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [mediaIndex, setMediaIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

  const nextMedia = (e) => {
    if (e) e.stopPropagation();
    if (project.media) {
      setMediaIndex((prev) => (prev + 1) % project.media.length);
    }
  };

  const prevMedia = (e) => {
    if (e) e.stopPropagation();
    if (project.media) {
      setMediaIndex((prev) => (prev - 1 + project.media.length) % project.media.length);
    }
  };

  const currentMedia = project.media?.[mediaIndex];

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-bg-card border border-border-subtle rounded-xl overflow-hidden hover:border-accent-primary/50 transition-colors duration-300 flex flex-col h-full group"
      >
        {/* Media Carousel Header */}
        {project.media && project.media.length > 0 && (
          <div 
            className="relative w-full aspect-video bg-bg-base border-b border-border-subtle group/media overflow-hidden cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            {/* Expand Icon Hint */}
            <div className="absolute top-3 right-3 z-20 bg-black/60 p-2 rounded-full text-white opacity-0 group-hover/media:opacity-100 transition-opacity backdrop-blur-sm">
              <Maximize2 size={16} />
            </div>

            <AnimatePresence mode="wait">
              {currentMedia.type === 'video' ? (
                <motion.video
                  key={mediaIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={currentMedia.url}
                  className="w-full h-full object-cover group-hover/media:scale-105 transition-transform duration-700"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <motion.img
                  key={mediaIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={currentMedia.url}
                  alt={`${project.title} screenshot ${mediaIndex + 1}`}
                  className="w-full h-full object-cover object-top group-hover/media:scale-105 transition-transform duration-700"
                />
              )}
            </AnimatePresence>

            {/* Navigation Controls */}
            {project.media.length > 1 && (
              <>
                <button 
                  onClick={prevMedia}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/60 text-white rounded-full opacity-0 group-hover/media:opacity-100 hover:bg-accent-primary transition-all backdrop-blur-sm z-20"
                >
                  <ChevronLeft size={18} />
                </button>
                <button 
                  onClick={nextMedia}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/60 text-white rounded-full opacity-0 group-hover/media:opacity-100 hover:bg-accent-primary transition-all backdrop-blur-sm z-20"
                >
                  <ChevronRight size={18} />
                </button>
                
                {/* Media Dots Indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                  {project.media.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-1.5 rounded-full transition-all ${idx === mediaIndex ? 'w-4 bg-accent-primary' : 'w-1.5 bg-white/40'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 flex flex-col grow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-text-main group-hover:text-accent-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-text-muted font-mono mt-1">
                {project.subtitle}
              </p>
            </div>
            
            <div className="flex gap-3 text-text-muted shrink-0 ml-4">
              {project.githubRepo && (
                <a href={project.githubRepo} target="_blank" rel="noreferrer" className="hover:text-accent-primary transition-colors">
                  <Github size={18} />
                </a>
              )}
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noreferrer" className="hover:text-accent-primary transition-colors">
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>

          <p className="text-text-muted mb-6 text-sm leading-relaxed grow">
            {project.description}
          </p>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-[11px] font-mono text-accent-primary bg-accent-primary/10 px-2 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>

            {project.timeTaken && (
              <div className="flex items-center gap-2 text-xs text-text-muted font-mono border-t border-border-subtle pt-4">
                <Clock size={14} />
                <span>Built in {project.timeTaken}</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {isModalOpen && currentMedia && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 p-2 rounded-full transition-colors z-110"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={24} />
            </button>

            <div 
              className="relative w-full max-w-6xl max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
            >
              {currentMedia.type === 'video' ? (
                <video
                  src={currentMedia.url}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                  autoPlay
                  loop
                  controls
                />
              ) : (
                <img
                  src={currentMedia.url}
                  alt={`${project.title} full screen`}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />
              )}

              {project.media.length > 1 && (
                <>
                  <button 
                    onClick={prevMedia}
                    className="absolute left-4 md:-left-12 top-1/2 -translate-y-1/2 p-3 bg-white/10 text-white rounded-full hover:bg-accent-primary transition-all backdrop-blur-md"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextMedia}
                    className="absolute right-4 md:-right-12 top-1/2 -translate-y-1/2 p-3 bg-white/10 text-white rounded-full hover:bg-accent-primary transition-all backdrop-blur-md"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
            
            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-mono text-sm bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-md">
              {mediaIndex + 1} / {project.media.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;