import { personalInfo, socialLinks } from '../data/portfolioData';
import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="w-full border-t border-border-subtle py-12 md:py-16 mt-24 bg-bg-base">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Top Section: Split on large screens, stacked on small */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-12">
          
          {/* Left Column: Text */}
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-text-main mb-4 flex items-center gap-3">
              <span className="text-accent-primary font-mono text-xl">./</span> Get In Touch
            </h2>
            <p className="text-text-muted leading-relaxed text-sm md:text-base">
              Currently looking for new opportunities. Whether you have a question, a project proposition, or just want to talk about Linux, tech, or anime, my inbox is always open.
            </p>
          </div>

          {/* Right Column: Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-center gap-2 bg-accent-primary text-white px-6 py-3 rounded-md font-mono text-sm hover:bg-accent-hover transition-colors shadow-lg shadow-accent-primary/20 w-full sm:w-auto"
            >
              <Mail size={18} /> Email Me
            </a>
            
            {personalInfo.phone && (
              <a 
                href={`tel:${personalInfo.phone}`}
                className="flex items-center justify-center gap-2 border border-border-subtle text-text-main px-6 py-3 rounded-md font-mono text-sm hover:border-accent-primary hover:text-accent-primary transition-colors w-full sm:w-auto"
              >
                <Phone size={18} /> Call Me
              </a>
            )}
          </div>
        </div>

        {/* Bottom Section: Socials & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border-subtle/50">
          
          {/* Social Links */}
          <div className="flex gap-6">
            <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-text-muted hover:text-accent-primary transition-colors transform hover:scale-110">
              <Github size={22} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-text-muted hover:text-accent-primary transition-colors transform hover:scale-110">
              <Linkedin size={22} />
            </a>
            <a href={socialLinks.cv} download aria-label="Download CV" className="text-text-muted hover:text-accent-primary transition-colors transform hover:scale-110">
              <FileText size={22} />
            </a>
          </div>

          {/* Copyright text */}
          <div className="text-xs md:text-sm text-text-muted font-mono flex flex-col md:flex-row items-center md:gap-4 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
            <span className="hidden md:inline text-border-subtle">|</span>
            <p className="opacity-60 mt-2 md:mt-0">Built with React, Tailwind v4 & Framer Motion.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;