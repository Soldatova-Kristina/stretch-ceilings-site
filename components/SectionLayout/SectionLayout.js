// components/SectionLayout.jsx
import styles from './SectionLayout.module.css';

export default function SectionLayout({ title, subtitle, children }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.line} />
        <p className={styles.subtitle}>{subtitle}</p>
        {children}
      </div>
    </section>
  );
}