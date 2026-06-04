import { profile } from '../data/profile';
import SectionTitle from '../components/SectionTitle';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle title="Contacto" />
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.lead}>
              Si tienes un proyecto, una propuesta de colaboración o simplemente quieres hablar sobre tecnología, estoy disponible.
            </p>
          </div>
          <div className={styles.cards}>
            <a href={`mailto:${profile.email}`} className={styles.contactCard}>
              <span className={styles.contactLabel}>Email</span>
              <span className={styles.contactValue}>{profile.email}</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <span className={styles.contactLabel}>GitHub</span>
              <span className={styles.contactValue}>{profile.githubUser}</span>
            </a>
            <div className={styles.contactCard}>
              <span className={styles.contactLabel}>Ubicación</span>
              <span className={styles.contactValue}>{profile.location}</span>
            </div>
            <div className={styles.contactCard}>
              <span className={styles.contactLabel}>Web</span>
              <a
                href={`https://${profile.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactValue}
              >
                {profile.website}
              </a>
            </div>
          </div>
          <a href={`mailto:${profile.email}`} className={styles.cta}>
            Enviar un email
          </a>
        </div>
      </div>
    </section>
  );
}
