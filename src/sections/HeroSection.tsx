import { profile } from '../data/profile';
import styles from './HeroSection.module.css';

const focusAreas = [
  'Desarrollo Back-End con Java & Spring Boot',
  'Procesamiento de datos con Python',
  'Diseño de APIs REST e integración',
  'Bases de datos relacionales y Data Warehouse',
];

export default function HeroSection() {
  return (
    <section id="hero" className={styles.section}>
      <div className={styles.inner}>
        <div>
          <p className={styles.greeting}>Hola, soy</p>
          <h1 className={styles.name}>{profile.name}</h1>
          <h2 className={styles.role}>{profile.role}</h2>
          <p className={styles.specialization}>{profile.specialization}</p>
          <p className={styles.location}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {profile.location}
          </p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.btnPrimary}>Contactar</a>
            <a href="#experience" className={styles.btnSecondary}>Ver experiencia</a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnGhost}
            >
              GitHub
            </a>
          </div>
        </div>

        <aside className={styles.panel} aria-label="Áreas de especialización">
          <p className={styles.panelHeading}>Especialización técnica</p>
          <ul className={styles.areaList}>
            {focusAreas.map((area) => (
              <li key={area} className={styles.areaItem}>
                <span className={styles.areaDot} aria-hidden="true" />
                {area}
              </li>
            ))}
          </ul>
          <div className={styles.availability}>
            <span className={styles.availabilityDot} aria-hidden="true" />
            Disponible para nuevos proyectos
          </div>
        </aside>
      </div>
    </section>
  );
}
