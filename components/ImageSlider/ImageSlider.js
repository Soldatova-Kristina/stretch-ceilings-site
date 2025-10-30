import { useState } from 'react';
import Image from 'next/image';
import styles from './ImageSlider.module.css';

export default function ImageSlider({ 
  images, 
  address, 
  width = 481, 
  height = 361,
  loading = "lazy",
  variant = "default", 
  rotate = false 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const containerClass = variant === "portfolio" 
    ? `${styles.sliderContainer} ${styles.portfolioContainer}`
    : styles.sliderContainer;

  const wrapperClass = variant === "portfolio"
    ? `${styles.imageWrapper} ${styles.portfolioWrapper}`
    : styles.imageWrapper;

  const imageStyle = variant === "portfolio"
    ? { objectFit: 'cover', transform: rotate ? 'rotate(90deg)' : 'none' }
    : { objectFit: 'contain' };

  return (
    <div className={containerClass}>
      <div className={wrapperClass}>
        <Image 
          src={images[currentIndex]} 
          alt={`${address} - фото ${currentIndex + 1}`}
          fill
          className={styles.image}
          loading={loading}
          sizes="(max-width: 768px) 100vw, (max-width: 1480px) 90vw, 1480px"
          style={imageStyle}
        />
      </div>

      {images.length > 1 && (
        <>
          <button 
            onClick={goToPrevious}
            className={`${styles.sliderButton} ${styles.sliderButtonPrev}`}
            aria-label="Предыдущее фото"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button 
            onClick={goToNext}
            className={`${styles.sliderButton} ${styles.sliderButtonNext}`}
            aria-label="Следующее фото"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className={styles.sliderDots}>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                aria-label={`Перейти к фото ${index + 1}`}
              />
            ))}
          </div>

          <div className={styles.sliderCounter}>
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}
