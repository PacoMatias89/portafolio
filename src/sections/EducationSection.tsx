import { education } from '../data/education';
import SectionTitle from '../components/SectionTitle';
import styles from './EducationSection.module.css';

export default function EducationSection() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle title="Formación" index={4} />
        <div className={styles.list}>
          {education.map((item, i) => (
            <article key={i} className={`${styles.card} reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <div className={styles.header}>
                <div>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.institution}>{item.institution}</p>
                </div>
                <span className={styles.period}>{item.period}</span>
              </div>
              <p className={styles.description}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
