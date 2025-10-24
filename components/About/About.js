import Image from 'next/image';
import styles from './About.module.css';
import CountUp from '../CountUp/CountUp';

export default function About({ 
  reverse,
  title,
  text,
  textWidth,
  statistics,
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

  // Function to render title with CountUp animation for number 1000
  const renderTitle = () => {
    const parts = title.split('1000');
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}
          <CountUp end={1000} duration={2000} separator=" " />
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <div className={`${styles.section} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.leftBlock}>
        <h2 className={styles.title}>{renderTitle()}</h2>

        <div className={styles.contentWrapper}>
          <p className={styles.text} style={textStyle}>
            {text}
          </p>

          {statistics && (
            <div className={styles.statistics}>
              {statistics.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statDescription}>{stat.description}</div>
                </div>
              ))}
            </div>
          )}
        </div>

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
    </div>
  );
}