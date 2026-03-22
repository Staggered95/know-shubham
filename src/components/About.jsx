import { personalInfo } from '../data/portfolioData';
import { Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-text-main flex items-center gap-4">
        <span className="text-accent-primary font-mono text-2xl">./</span> Who I Am
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Image & Text Content */}
        <div className="flex flex-col gap-8">
          
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            {/* The Image Container */}
            <div className="shrink-0 relative group">
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-accent-primary/20 blur-xl rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={personalInfo.pfp}
                alt={personalInfo.name}
                className="w-40 h-40 md:w-48 md:h-48 rounded-md object-cover border border-border-subtle group-hover:border-accent-primary transition-all duration-500 grayscale group-hover:grayscale-0 relative z-10 shadow-lg"
              />
            </div>

            {/* Bio Text */}
            <p className="text-text-muted leading-relaxed text-lg">
              {personalInfo.about}
            </p>
          </div>

          <div className="border-l-2 border-accent-primary pl-4 py-2">
            <p className="font-mono text-sm text-text-main italic">
              "{personalInfo.philosophy}"
            </p>
          </div>
        </div>

        {/* Right Column: Visual Element: Mock Terminal */}
        <div className="bg-[#0f0f0f] border border-border-subtle rounded-md overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-border-subtle">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            <span className="ml-4 text-xs font-mono text-text-muted flex items-center gap-2">
              <Terminal size={12} /> shubham@arch-linux:~
            </span>
          </div>
          {/* Terminal Body */}
          <div className="p-4 font-mono text-sm text-text-muted">
            <p><span className="text-accent-primary">➜</span> <span className="text-blue-400">~</span> whoami</p>
            <p className="mt-1 text-text-main">{personalInfo.name}</p>
            <p className="mt-3"><span className="text-accent-primary">➜</span> <span className="text-blue-400">~</span> cat interests.txt</p>
            <p className="mt-1 text-text-main">Web Development, Linux Ricing, Anime, Deep Space</p>
            <p className="mt-3"><span className="text-accent-primary">➜</span> <span className="text-blue-400">~</span> uptime</p>
            <p className="mt-1 text-text-main">5-6 hours of absolute focus</p>
            <p className="mt-3 animate-pulse">_</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;