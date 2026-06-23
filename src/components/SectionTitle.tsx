import styles from './SectionTitle.module.css';

interface Props {
  title: string;
  subtitle?: string;
  index?: number;
}

export default function SectionTitle({ title, subtitle, index }: Props) {
  return (
    <div className={`${styles.wrapper} reveal`}>
      {index !== undefined && (
        <span className={styles.index} aria-hidden="true">
          {String(index).padStart(2, '0')}
        </span>
      )}
      <div className={styles.line} />
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
