import { experience } from '../data/experience';
import ExperienceCard from '../components/ExperienceCard';
import SectionTitle from '../components/SectionTitle';
import styles from './ExperienceSection.module.css';

export default function ExperienceSection() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          title="Experiencia profesional"
          subtitle="Historial de trabajo relevante"
          index={2}
        />
        <div className={styles.list}>
          {experience.map((item, i) => (
            <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <ExperienceCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
