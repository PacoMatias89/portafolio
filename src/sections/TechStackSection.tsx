import { techStack } from '../data/techstack';
import TechBadge from '../components/TechBadge';
import SectionTitle from '../components/SectionTitle';
import styles from './TechStackSection.module.css';

export default function TechStackSection() {
  const learningCategory = 'En aprendizaje activo';

  return (
    <section id="stack" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          title="Stack tecnológico"
          subtitle="Tecnologías con las que trabajo habitualmente"
        />
        <div className={styles.grid}>
          {techStack.map((category) => (
            <div key={category.label} className={styles.category}>
              <h3 className={styles.categoryLabel}>{category.label}</h3>
              <div className={styles.badges}>
                {category.items.map((item) => (
                  <TechBadge
                    key={item}
                    label={item}
                    variant={category.label === learningCategory ? 'learning' : 'default'}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
