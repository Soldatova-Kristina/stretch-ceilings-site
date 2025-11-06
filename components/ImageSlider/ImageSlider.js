import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ImageSlider.module.css';

export default function ImageSlider(props) {
  const {
    images,
    address,
    width = 481,
    height = 361,
    loading = "lazy",
    variant = "default",
    rotate = false
  } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  useEffect(() => {
    setHydrated(true);
  }, []);

  const changeImage = (newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const goToPrevious = () => {
    if (!hydrated) return; 
    changeImage(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    if (!hydrated) return;
    changeImage(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToImage = (index) => {
    if (!hydrated || index === currentIndex) return;
    changeImage(index);
  };

  const containerClass = variant === "portfolio"
    ? `${styles.sliderContainer} ${styles.portfolioContainer}`
    : styles.sliderContainer;

  const wrapperClass = variant === "portfolio"
    ? `${styles.imageWrapper} ${styles.portfolioWrapper}`
    : styles.imageWrapper;

  const imageStyle = {
    objectFit: variant === "portfolio" ? 'cover' : 'contain',
    transform: rotate ? 'rotate(90deg)' : 'none',
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
          quality={85}
          decoding="async"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
          style={imageStyle}
        />
      </div>

      {hydrated && images.length > 1 && (
        <>
          <button onClick={goToPrevious} className={`${styles.sliderButton} ${styles.sliderButtonPrev}`} aria-label="Предыдущее фото">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button onClick={goToNext} className={`${styles.sliderButton} ${styles.sliderButtonNext}`} aria-label="Следующее фото">
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