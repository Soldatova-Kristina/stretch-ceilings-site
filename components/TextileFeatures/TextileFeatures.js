import Image from 'next/image';
import styles from './TextileFeatures.module.css';
import { textileFeaturesData } from '@/data/textileFeaturesData';

export default function TextileFeatures() {
  // Split features into two rows of 3 items each
  const firstRow = textileFeaturesData.slice(0, 3);
  const secondRow = textileFeaturesData.slice(3, 6);

  return (
    <div className={styles.section}>
      <div className={styles.row}>
        {firstRow.map((feature) => (
          <div key={feature.id} className={styles.card}>
            <div className={styles.icon}>
              <Image 
                src={feature.icon} 
                alt={feature.iconAlt} 
                width={78} 
                height={78} 
              />
            </div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.text}>{feature.text}</p>
          </div>
        ))}
      </div>

      <div className={styles.row}>
        {secondRow.map((feature) => (
          <div key={feature.id} className={styles.card}>
            <div className={styles.icon}>
              <Image 
                src={feature.icon} 
                alt={feature.iconAlt} 
                width={78} 
                height={78} 
              />
            </div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.text}>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}