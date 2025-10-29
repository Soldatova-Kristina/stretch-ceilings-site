import BeforeAfter from '@/components/BeforeAfter/BeforeAfter';
import styles from './TechnologySection.module.css';

export default function TechnologySection({ title, text,subtextTitle, subtext, beforeImage, afterImage }) {
  return (
    <div className={styles.container}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <p className={styles.subtextTitle}>{subtextTitle}</p>
        <p className={styles.subtext}>{subtext}</p>
      </div>
      <BeforeAfter
        beforeSrc={beforeImage}
        afterSrc={afterImage}
      />
    </div>
  );
}
