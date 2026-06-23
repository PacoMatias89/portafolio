import { useState, useEffect } from 'react';
import { profile } from '../data/profile';
import styles from './HeroSection.module.css';

const focusAreas = [
  'Desarrollo Back-End con Java & Spring Boot',
  'Procesamiento de datos con Python',
  'Diseño de APIs REST e integración',
  'Bases de datos relacionales y Data Warehouse',
];

const FULL_ROLE = profile.role;

export default function HeroSection() {
  const [displayRole, setDisplayRole] = useState('');
  const [typed, setTyped] = useState(false);

  useEffect(() => {
    let idx = 0;
    const timer = setInterval(() => {
      idx++;
      setDisplayRole(FULL_ROLE.slice(0, idx));
      if (idx >= FULL_ROLE.length) {
        clearInterval(timer);
        setTimeout(() => setTyped(true), 1200);
      }
    }, 55);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className={styles.section}>
      <div className={styles.inner}>
        <div>
          <p className={styles.eyebrow}>Hola, soy</p>
          <h1 className={styles.name}>
            {profile.name.split(' ')[0]}
            <span className={styles.nameHighlight}>{' ' + profile.name.split(' ').slice(1).join(' ')}</span>
          </h1>
          <h2 className={styles.role}>
            {displayRole}
            <span className={`${styles.cursor} ${typed ? styles.cursorHide : ''}`} aria-hidden="true">|</span>
          </h2>
          <p className={styles.specialization}>{profile.specialization}</p>
          <p className={styles.location}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {profile.location}
          </p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.btnPrimary}>Contactar</a>
            <a
              href="/cv-francisco-molina.pdf"
              download
              className={styles.btnSecondary}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Descargar CV
            </a>
            <a href="#experience" className={styles.btnGhost}>Ver experiencia</a>
          </div>
        </div>

        <aside className={`${styles.panel} reveal reveal-delay-3`} aria-label="Áreas de especialización">
          <div className={styles.panelGlow} aria-hidden="true" />
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
