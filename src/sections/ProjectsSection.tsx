import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          title="Proyectos"
          subtitle="Proyectos propios desarrollados durante mi trayectoria"
          index={5}
        />
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div key={project.name} className={`reveal reveal-delay-${(i % 2) + 1}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
