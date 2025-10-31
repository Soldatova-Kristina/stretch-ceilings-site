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
  // Function to log image path
  const logImagePath = (imagePath, imageType) => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const fullPath = `${basePath}${imagePath}`;
    console.log(`[About Component] ${imageType} image path:`, fullPath);
    console.log(`[About Component] ${imageType} - basePath:`, basePath);
    console.log(`[About Component] ${imageType} - imagePath prop:`, imagePath);
    return fullPath;
  };

  const textStyle = textWidth 
    ? { width: textWidth, maxWidth: '100%' } 
    : {};

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
        </div>

        <div className={styles.horizontalWrapper}>
          <Image
            unoptimized
            src={logImagePath(horizontalImage, 'Horizontal')}
            alt={horizontalImageAlt}
            width={horizontalImageWidth}
            height={horizontalImageHeight}
            className={styles.horizontalImage}
          />
        </div>
      </div>

      <div className={styles.verticalWrapper}>
        <Image
          unoptimized
          src={logImagePath(verticalImage, 'Vertical')}
          alt={verticalImageAlt}
          width={verticalImageWidth}
          height={verticalImageHeight}
          className={styles.verticalImage}
        />
      </div>

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
  );
}