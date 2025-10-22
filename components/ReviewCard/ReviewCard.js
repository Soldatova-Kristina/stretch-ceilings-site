import Image from 'next/image';
import styles from './ReviewCard.module.css';

export default function ReviewCard({ src, alt, width = 300, height = 300, className = '' }) {
  return (
    <div className={`${styles.card} ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={styles.image}
      />
    </div>
  );
}
