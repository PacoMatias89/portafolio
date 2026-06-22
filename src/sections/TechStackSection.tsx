import React from 'react';
import { techStack } from '../data/techstack';
import TechBadge from '../components/TechBadge';
import SectionTitle from '../components/SectionTitle';
import styles from './TechStackSection.module.css';

const categoryIcons: Record<string, React.ReactNode> = {
  'Lenguajes': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  'Java / Spring': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),
  'Python': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  'Bases de datos': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  'DevOps / Herramientas': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  'En aprendizaje activo': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
};

export default function TechStackSection() {
  const learningCategory = 'En aprendizaje activo';

  return (
    <section id="stack" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          title="Stack tecnológico"
          subtitle="Tecnologías con las que trabajo habitualmente"
          index={3}
        />
        <div className={styles.grid}>
          {techStack.map((category, i) => (
            <div
              key={category.label}
              className={`${styles.category} reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>
                  {categoryIcons[category.label]}
                </span>
                <h3 className={styles.categoryLabel}>{category.label}</h3>
              </div>
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
