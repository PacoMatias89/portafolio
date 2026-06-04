import type { ExperienceItem } from '../data/experience';
import TechBadge from './TechBadge';
import styles from './ExperienceCard.module.css';

interface Props {
  item: ExperienceItem;
}

export default function ExperienceCard({ item }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.role}>{item.role}</h3>
          <p className={styles.company}>{item.company}</p>
        </div>
        <div className={styles.meta}>
          <span className={styles.period}>{item.period}</span>
          <span className={styles.location}>{item.location} · {item.modality}</span>
        </div>
      </div>
      <ul className={styles.list}>
        {item.description.map((point, i) => (
          <li key={i} className={styles.point}>
            <span className={styles.bullet} aria-hidden="true">▸</span>
            {point}
          </li>
        ))}
      </ul>
      <div className={styles.tags}>
        {item.tags.map((tag) => (
          <TechBadge key={tag} label={tag} />
        ))}
      </div>
    </article>
  );
}
