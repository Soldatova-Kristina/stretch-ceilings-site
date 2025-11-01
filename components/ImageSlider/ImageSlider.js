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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const changeImage = (newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    changeImage(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    changeImage(newIndex);
  };

  const goToImage = (index) => {
    if (index !== currentIndex) {
      changeImage(index);
    }
  };

  const containerClass = variant === "portfolio" 
    ? `${styles.sliderContainer} ${styles.portfolioContainer}`
    : styles.sliderContainer;

  const wrapperClass = variant === "portfolio"
    ? `${styles.imageWrapper} ${styles.portfolioWrapper}`
    : styles.imageWrapper;

  const imageStyle = variant === "portfolio"
    ? { 
        objectFit: 'cover', 
        transform: rotate ? 'rotate(90deg)' : 'none',
        opacity: isTransitioning ? 0 : 1,
        transition: 'opacity 0.5s ease-in-out'
      }
    : { 
        objectFit: 'contain',
        opacity: isTransitioning ? 0 : 1,
        transition: 'opacity 0.5s ease-in-out'
      };

  return (
    <div className={containerClass}>
      <div className={wrapperClass}>
        <Image 
          src={`${basePath}${images[currentIndex]}`}
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
                onClick={() => goToImage(index)}
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
