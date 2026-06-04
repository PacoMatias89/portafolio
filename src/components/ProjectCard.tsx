import type { PortfolioProject } from '../data/projects';
import TechBadge from './TechBadge';
import styles from './ProjectCard.module.css';

interface Props {
  project: PortfolioProject;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className={`${styles.card} ${project.featured ? styles.featured : ''}`}>
      <div className={styles.top}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{project.name}</h3>
          {project.featured && <span className={styles.featuredBadge}>Destacado</span>}
        </div>
        <div className={styles.links}>
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Demo
            </a>
          )}
        </div>
      </div>

      <p className={styles.description}>{project.description}</p>

      <ul className={styles.highlights}>
        {project.highlights.map((h, i) => (
          <li key={i} className={styles.highlight}>
            <span className={styles.bullet} aria-hidden="true">▸</span>
            {h}
          </li>
        ))}
      </ul>

      <div className={styles.footer}>
        <div className={styles.tags}>
          {project.technologies.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
        <span className={`${styles.status} ${styles[project.status]}`}>
          {project.status === 'completed' ? 'Completado' : 'En desarrollo'}
        </span>
      </div>
    </article>
  );
}
