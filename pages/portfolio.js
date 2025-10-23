// pages/portfolio.js
import Seo from '@/components/Seo';
import Image from 'next/image';
import { useState } from 'react';
import CtaButton from '@/components/CtaButton/CtaButton';
import styles from './portfolio.module.css';
import { createPortfolioStructuredData, portfolioSeoBase } from '@/data/seo/portfolioSeo';
import { portfolioItems } from '@/data/portfolioData';

const ImageSlider = ({ images, address }) => {
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
          width={481}
          height={361}
          className={styles.image}
          quality={90}
          loading="lazy"
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
};

export async function getStaticProps() {
 
  const structuredData = JSON.stringify(createPortfolioStructuredData(portfolioItems));

  return {
    props: {
      seo: {
        ...portfolioSeoBase,
        structuredData,
      },
      portfolioItems,
    },
    revalidate: 3600,
  };
}

export default function Portfolio({ seo, portfolioItems }) {
  return (
    <>
      <Seo {...seo} />

      <section className={styles.gallery} itemScope itemType="https://schema.org/CollectionPage">
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Примеры наших работ</h1>
          </div>

          <div className={styles.grid} itemScope itemType="https://schema.org/ItemList">
            {portfolioItems.map((item, index) => (
              <article 
                key={item.id} 
                className={styles.card}
                itemScope 
                itemType="https://schema.org/CreativeWork"
                itemProp="itemListElement"
              >
                <meta itemProp="position" content={String(index + 1)} />
                <div className={`${styles.cardContent} ${item.id === 2 || item.id === 4 ? styles.cardContentReverse : ''}`}>
                  <div className={styles.textBlock}>
                    <h2 className={styles.complexName} itemProp="name">{item.complexName}</h2>
                    <h3 className={styles.address}>{item.address}</h3>
                    <p className={styles.description} itemProp="description">{item.description}</p>
                    <meta itemProp="creator" content="Питер Потолок" />
                    <CtaButton text="УЗНАТЬ ПОДРОБНЕЕ" ariaLabel="Узнать подробнее в Telegram" className={styles.portfolioCtaButton} />
                  </div>
                  <div className={styles.imageBlock} itemProp="image">
                    <ImageSlider images={item.images} address={item.address} itemId={item.id} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}