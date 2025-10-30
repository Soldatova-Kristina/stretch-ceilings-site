import Image from 'next/image';
import styles from './AdvantagesBlock.module.css';
import { advantagesData } from '@/data/advantagesData';

export default function AdvantagesBlock() {
  return (
    <div className={styles.section}>
      <div className={styles.advantages}>
        {advantagesData.map((item) => (
          <div key={item.id} className={styles.card}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src="/images/index/advantages.jpg"
          alt="Интерьер с подсветкой"
          width={1480}
          height={562}
          className={styles.image}
          loading="lazy"
        />
      </div>
    </div>
  );
}