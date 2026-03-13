import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronRight, ChevronLeft, Terminal, Maximize2, X } from 'lucide-react';
import { projects } from '../data/portfolioData';

const YumeTunesShowcase = () => {
  const yumeData = projects.find(p => p.id === 'yumetunes');
  
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  
  // Modal State: knows if it's open, and whether it's showing desktop or mobile arrays
  const [modalConfig, setModalConfig] = useState({ isOpen: false, type: 'desktop', index: 0 });

  // Auto-play carousels (Pauses if modal is open)
  useEffect(() => {
    if (modalConfig.isOpen) return;

    const desktopTimer = setInterval(() => {
      setDesktopIndex((prev) => (prev + 1) % yumeData.media.desktop.length);
    }, 4000);
    const mobileTimer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % yumeData.media.mobile.length);
    }, 3500);

    return () => {
      clearInterval(desktopTimer);
      clearInterval(mobileTimer);
    };
  }, [modalConfig.isOpen, yumeData.media.desktop.length, yumeData.media.mobile.length]);

  // Lock scroll when modal is active
  useEffect(() => {
    document.body.style.overflow = modalConfig.isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [modalConfig.isOpen]);

  const openModal = (type, index) => {
    setModalConfig({ isOpen: true, type, index });
  };

  const nextModalMedia = (e) => {
    e.stopPropagation();
    const arr = yumeData.media[modalConfig.type];
    setModalConfig(prev => ({ ...prev, index: (prev.index + 1) % arr.length }));
  };

  const prevModalMedia = (e) => {
    e.stopPropagation();
    const arr = yumeData.media[modalConfig.type];
    setModalConfig(prev => ({ ...prev, index: (prev.index - 1 + arr.length) % arr.length }));
  };

  const currentModalArray = modalConfig.isOpen ? yumeData.media[modalConfig.type] : [];

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mb-32 bg-bg-card border border-accent-primary/30 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.1)] relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent-primary/20 blur-[100px] pointer-events-none rounded-full" />

        <div className="p-8 md:p-12 flex flex-col lg:flex-row gap-12 relative z-10">
          
          {/* Left Column: Text & Tech */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 mb-4"
            >
              <img src={yumeData.media.logo} alt="YumeTunes Logo" className="w-12 h-12 rounded-lg object-contain bg-bg-base p-1 border border-border-subtle" />
              <div>
                <h3 className="text-4xl font-bold text-text-main tracking-tight">
                  {yumeData.title}
                </h3>
                <p className="text-accent-primary font-mono text-sm mt-1">
                  {yumeData.subtitle}
                </p>
              </div>
            </motion.div>

            <p className="text-text-muted text-lg mb-6 leading-relaxed">
              {yumeData.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {yumeData.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-text-muted">
                  <Terminal size={16} className="text-accent-primary mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {yumeData.techStack.map(tech => (
                <span key={tech} className="px-3 py-1 bg-bg-base border border-border-subtle rounded-md text-xs font-mono text-accent-primary shadow-sm">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a href={yumeData.liveDemo} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-accent-primary text-white px-6 py-3 rounded-md font-mono text-sm hover:bg-accent-hover transition-colors shadow-lg shadow-accent-primary/25">
                <ExternalLink size={18} /> Live Deployment
              </a>
              <a href={yumeData.githubRepo} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-border-subtle px-6 py-3 rounded-md font-mono text-sm hover:border-accent-primary hover:text-accent-primary transition-colors">
                <Github size={18} /> Repository
              </a>
            </div>
          </div>

          {/* Right Column: Media Mockups */}
          <div className="lg:w-1/2 relative min-h-[400px] flex items-center justify-center">
            
            {/* Desktop Mockup */}
            <div 
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] md:w-[85%] aspect-video bg-bg-base rounded-lg border border-border-subtle shadow-2xl overflow-hidden z-10 hidden sm:block cursor-pointer group/mockup"
              onClick={() => openModal('desktop', desktopIndex)}
            >
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/mockup:opacity-100 transition-opacity z-20 flex items-center justify-center backdrop-blur-sm">
                <Maximize2 size={32} className="text-white" />
              </div>
              <div className="h-6 bg-[#1a1a1a] border-b border-border-subtle flex items-center px-3 gap-2 relative z-30">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                <div className="mx-auto h-3 w-1/3 bg-white/5 rounded-full"></div>
              </div>
              <div className="relative w-full h-[calc(100%-1.5rem)] bg-black">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={desktopIndex}
                    src={yumeData.media.desktop[desktopIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover object-top"
                    alt="YumeTunes Desktop"
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Mockup */}
            <div 
              className="relative sm:absolute sm:-left-4 sm:top-1/2 sm:-translate-y-1/2 w-[220px] aspect-9/19 bg-black rounded-4xl border-4 border-bg-card shadow-[20px_20px_40px_rgba(0,0,0,0.8)] overflow-hidden z-20 cursor-pointer group/mobile"
              onClick={() => openModal('mobile', mobileIndex)}
            >
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/mobile:opacity-100 transition-opacity z-40 flex items-center justify-center backdrop-blur-sm">
                <Maximize2 size={24} className="text-white" />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-bg-card rounded-b-xl z-30"></div>
              <AnimatePresence mode="wait">
                <motion.img
                  key={mobileIndex}
                  src={yumeData.media.mobile[mobileIndex]}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                  alt="YumeTunes Mobile"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {modalConfig.isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setModalConfig({ ...modalConfig, isOpen: false })}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 p-2 rounded-full transition-colors z-110"
              onClick={() => setModalConfig({ ...modalConfig, isOpen: false })}
            >
              <X size={24} />
            </button>

            <div 
              className={`relative w-full max-h-full flex items-center justify-center ${modalConfig.type === 'mobile' ? 'max-w-md' : 'max-w-6xl'}`}
              onClick={(e) => e.stopPropagation()} 
            >
              <img
                src={currentModalArray[modalConfig.index]}
                alt={`YumeTunes Fullscreen ${modalConfig.type}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />

              {currentModalArray.length > 1 && (
                <>
                  <button 
                    onClick={prevModalMedia}
                    className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 p-3 bg-white/10 text-white rounded-full hover:bg-accent-primary transition-all backdrop-blur-md"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextModalMedia}
                    className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 p-3 bg-white/10 text-white rounded-full hover:bg-accent-primary transition-all backdrop-blur-md"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
            
            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-mono text-sm bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-md">
              {modalConfig.index + 1} / {currentModalArray.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default YumeTunesShowcase;