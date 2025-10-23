import Image from 'next/image';
import styles from './About.module.css';

export default function About({ 
  reverse,
  title,
  text,
  textWidth,
  horizontalImage,
  horizontalImageAlt,
  horizontalImageWidth,
  horizontalImageHeight,
  verticalImage,
  verticalImageAlt,
  verticalImageWidth,
  verticalImageHeight
}) {
  const textStyle = textWidth 
    ? { width: textWidth, maxWidth: '100%' } 
    : {};

  return (
    <section className={`${styles.section} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.leftBlock}>
        <h2 className={styles.title}>{title}</h2>

        <p className={styles.text} style={textStyle}>
          {text}
        </p>

        <div className={styles.horizontalWrapper}>
          <Image
            src={horizontalImage}
            alt={horizontalImageAlt}
            width={horizontalImageWidth}
            height={horizontalImageHeight}
            className={styles.horizontalImage}
          />
        </div>
      </div>

      <div className={styles.verticalWrapper}>
        <Image
          src={verticalImage}
          alt={verticalImageAlt}
          width={verticalImageWidth}
          height={verticalImageHeight}
          className={styles.verticalImage}
        />
      </div>
    </section>
  );
}