import styles from './FinishingComparison.module.css';
import { standardFinishingSteps, quietWallsSteps } from '@/data/finishingComparisonData';

export default function FinishingComparison() {
  return (
    <section className={styles.section}>
      <div className={styles.column}>
        <h2 className={styles.columnTitle}>СТАНДАРТНАЯ ОТДЕЛКА</h2>
        <div className={styles.list}>
          {standardFinishingSteps.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.textBlock}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardSubtitle}>{item.subtitle}</p>
              </div>
              <span className={styles.cardNum}>{item.num}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.verticalLine}></div>

      <div className={styles.columnRight}>
        <h2 className={styles.columnTitle}>ТИХИЕ СТЕНЫ</h2>
        <div className={styles.list}>
          {quietWallsSteps.map((item, i) => (
            <div key={i} className={`${styles.card} ${styles.cardRight}`}>
              <div className={styles.textBlockRight}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardSubtitle}>{item.subtitle}</p>
              </div>
              <span className={styles.cardNumRight}>{item.num}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}