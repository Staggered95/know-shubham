import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../data/portfolioData';
import { Github, Linkedin, FileText } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "> Initializing session...";

  // Terminal typing effect
  useEffect(() => {
    let i = 0;
    const typingTimer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingTimer);
      }
    }, 60); // Milliseconds per character. Lower is faster.
    
    return () => clearInterval(typingTimer);
  }, []);

  return (
    <section id="hero" className="flex flex-col justify-center min-h-[75vh] items-start">
      
      {/* Animated Terminal Greeting */}
      <div className="text-accent-primary font-mono text-sm md:text-base mb-6 flex items-center h-6">
        <span>{typedText}</span>
        {/* Blinking block cursor */}
        <span className="w-2.5 h-4 bg-accent-primary ml-1.5 animate-pulse"></span>
      </div>

      {/* Main headings - Framer Motion staggers these in after the typing starts */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-text-main"
      >
        {personalInfo.name}.
      </motion.h1>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="text-3xl md:text-5xl text-text-muted font-mono mb-8"
      >
        {personalInfo.role}
      </motion.h2>

      {/* Short bio / Philosophy */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="max-w-2xl text-text-muted leading-relaxed mb-10 text-lg"
      >
        {personalInfo.tagline} <br />
        <span className="italic">"{personalInfo.philosophy}"</span>
      </motion.p>
      
      {/* Calls to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="flex flex-wrap gap-6 items-center"
      >
        <a 
          href="#projects" 
          className="px-6 py-3 border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-text-main transition-colors duration-300 font-mono text-sm rounded-sm"
        >
          View Projects
        </a>
        
        <div className="flex gap-4 items-center border-l border-border-subtle pl-6">
          <a 
            href={socialLinks.github} 
            target="_blank" 
            rel="noreferrer"
            className="text-text-muted hover:text-accent-primary transition-colors transform hover:scale-110 duration-200"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href={socialLinks.linkedin} 
            target="_blank" 
            rel="noreferrer"
            className="text-text-muted hover:text-accent-primary transition-colors transform hover:scale-110 duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href={socialLinks.cv} 
            download
            className="text-text-muted hover:text-accent-primary transition-colors flex items-center gap-2 font-mono text-sm group"
            aria-label="Download CV"
          >
            <FileText size={24} className="transform group-hover:scale-110 duration-200" />
            <span className="hidden sm:inline">CV.pdf</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;