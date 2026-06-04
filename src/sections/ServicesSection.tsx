import { services } from '../data/services';
import SectionTitle from '../components/SectionTitle';
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          title="Áreas donde puedo aportar valor"
          subtitle="Servicios disponibles para proyectos freelance y colaboraciones"
        />
        <div className={styles.grid}>
          {services.map((service, i) => (
            <article key={i} className={styles.card}>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
