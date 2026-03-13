import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-bg-base/80 border-b border-border-subtle">
      {/* Expanded max-width and padding to perfectly align with App.jsx and Footer.jsx */}
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
        
        {/* Logo / Name */}
        <a href="#hero" className="text-xl font-bold tracking-tighter text-text-main hover:text-accent-primary transition-colors font-mono">
          {personalInfo.name.split(' ')[0].toLowerCase()}_
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-mono text-text-muted">
          <a href="#about" className="hover:text-accent-primary transition-colors">./about</a>
          <a href="#skills" className="hover:text-accent-primary transition-colors">./skills</a>
          <a href="#projects" className="hover:text-accent-primary transition-colors">./projects</a>
          
          {/* Desktop Contact CTA */}
          <a 
            href="#contact" 
            className="px-4 py-1.5 border border-border-subtle hover:border-accent-primary text-text-main hover:text-accent-primary rounded-sm transition-colors ml-4"
          >
            [contact]
          </a>
        </div>

        {/* Mobile Contact Link (Routes to footer instead of direct mailto) */}
        <a 
          href="#contact"
          className="md:hidden text-sm font-mono text-accent-primary hover:text-text-main transition-colors"
        >
          [contact]
        </a>
      </div>
    </nav>
  );
};

export default Navbar;