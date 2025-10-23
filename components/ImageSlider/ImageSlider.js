import { useState } from 'react';
import Image from 'next/image';
import styles from './ImageSlider.module.css';

export default function ImageSlider({ 
  images, 
  address, 
  width = 481, 
  height = 361,
  quality = 90,
  loading = "lazy"
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

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.imageWrapper}>
        <Image 
          src={images[currentIndex]} 
          alt={`${address} - фото ${currentIndex + 1}`}
          width={width}
          height={height}
          className={styles.image}
          quality={quality}
          loading={loading}
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
