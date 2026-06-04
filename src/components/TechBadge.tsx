import styles from './TechBadge.module.css';

interface Props {
  label: string;
  variant?: 'default' | 'learning';
}

export default function TechBadge({ label, variant = 'default' }: Props) {
  return (
    <span className={`${styles.badge} ${variant === 'learning' ? styles.learning : ''}`}>
      {label}
    </span>
  );
}
