import Image from 'next/image';
import styles from './ReviewCard.module.css';

export default function ReviewCard({ src, alt, width = 300, height = 300, className = '' }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return (
    <div className={`${styles.card} ${className}`}>
      <Image
        src={`${basePath}${src}`}
        alt={alt}
        width={width}
        height={height}
        className={styles.image}
      />
    </div>
  );
}
