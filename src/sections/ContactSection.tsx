import { profile } from '../data/profile';
import SectionTitle from '../components/SectionTitle';
import styles from './ContactSection.module.css';

const emailIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const githubIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const linkedinIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const locationIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const downloadIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle title="Contacto" index={7} />
        <div className={`${styles.content} reveal reveal-delay-1`}>
          <p className={styles.lead}>
            Si tienes un proyecto, una propuesta de colaboración o simplemente quieres hablar sobre tecnología, estoy disponible.
          </p>
          <div className={styles.cards}>
            <a href={`mailto:${profile.email}`} className={styles.contactCard}>
              <span className={styles.contactIcon}>{emailIcon}</span>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Email</span>
                <span className={styles.contactValue}>{profile.email}</span>
              </div>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <span className={styles.contactIcon}>{linkedinIcon}</span>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>LinkedIn</span>
                <span className={styles.contactValue}>francisco-molina-jurado</span>
              </div>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <span className={styles.contactIcon}>{githubIcon}</span>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>GitHub</span>
                <span className={styles.contactValue}>{profile.githubUser}</span>
              </div>
            </a>
            <div className={styles.contactCard}>
              <span className={styles.contactIcon}>{locationIcon}</span>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Ubicación</span>
                <span className={styles.contactValue}>{profile.location}</span>
              </div>
            </div>
          </div>
          <div className={styles.actions}>
            <a href={`mailto:${profile.email}`} className={styles.cta}>
              Enviar un email
            </a>
            <a
              href="/cv-francisco-molina.pdf"
              download
              className={styles.ctaSecondary}
            >
              {downloadIcon}
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
