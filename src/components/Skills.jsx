import { skills } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-text-main flex items-center gap-4">
        <span className="text-accent-primary font-mono text-2xl">02.</span> Technologies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <div 
            key={category} 
            className="bg-bg-card border border-border-subtle p-6 rounded-sm hover:border-accent-primary/50 transition-colors"
          >
            {/* Category Title (Capitalized) */}
            <h3 className="text-lg font-mono text-text-main mb-4 capitalize border-b border-border-subtle pb-2 inline-block">
              {category}
            </h3>
            
            {/* Skills List  */}
            <ul className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <li 
                  key={skill} 
                  className="text-sm text-text-muted bg-bg-base border border-border-subtle px-3 py-1 rounded-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;