import { profile } from '../data/profile';
import SectionTitle from '../components/SectionTitle';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle title="Sobre mí" index={1} />
        <div className={`${styles.content} reveal reveal-delay-1`}>
          <div className={styles.text}>
            {profile.about.map((paragraph, i) => (
              <p key={i} className={styles.paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className={styles.quickInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Ubicación</span>
              <span className={styles.infoValue}>{profile.location}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Disponibilidad</span>
              <span className={styles.infoValue}>Abierto a proyectos y colaboraciones</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Modalidad</span>
              <span className={styles.infoValue}>Remoto preferentemente</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Web</span>
              <a href={`https://${profile.website}`} target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                {profile.website}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
