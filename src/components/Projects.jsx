import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import YumeTunesShowcase from './YumeTunesShowcase';

const Projects = () => {
  const otherProjects = projects.filter(project => project.id !== 'yumetunes');

  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-text-main flex items-center gap-4">
        <span className="text-accent-primary font-mono text-2xl">./</span> Featured Work
      </h2>
      
      <YumeTunesShowcase />

      <h3 className="text-2xl font-bold mb-8 text-text-main flex items-center gap-3">
        <span className="text-text-muted font-mono text-xl">./</span> Other Projects
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {otherProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;