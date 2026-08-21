import projects from '../../data/projects'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import ProjectCard from '../projects/ProjectCard'

function Projects() {
  return (
    <section id="projects" data-label="Projects" className="mx-auto max-w-[1140px] px-6 py-16 max-tablet:px-4 max-tablet:py-12">
      <Reveal>
        <SectionHeading
          eyebrow="Selected work"
          title="A few things I&apos;ve made."
          copy="Placeholder projects live here for now. Each one is ready to be swapped with the work you want the world to see."
        />
      </Reveal>
      <div className="grid grid-cols-3 gap-6 max-tablet:grid-cols-1 max-tablet:mx-auto max-tablet:max-w-[500px]">
        {projects.map((project, index) => (
          <ProjectCard key={project.number} project={project} delay={index * 0.1} />
        ))}
      </div>
    </section>
  )
}

export default Projects

