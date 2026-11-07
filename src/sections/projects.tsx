import { ProjectCard } from '../components/projectcard';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section id="projetos" className="projects-section container">
      <div className="section-heading">
        <h2>Código que encontra<br /><span>o mundo real.</span></h2>
        <p>Software, experimentos e ideias em validação.<br />Cada projeto, um problema que vale resolver.</p>
      </div>
      <div className="project-grid">
        {projects.map(project => <ProjectCard key={project.title} {...project} />)}
      </div>
    </section>
  );
}
