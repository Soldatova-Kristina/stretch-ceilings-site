import Seo from '@/components/Seo';
import styles from './reviews.module.css';
import Image from 'next/image';
import ReviewCard from '@/components/ReviewCard/ReviewCard';
import ImageSlider from '@/components/ImageSlider/ImageSlider';
import { reviewsData, reviewImages } from '@/data/reviewsData';
import { createReviewsStructuredData, reviewsSeoBase } from '@/data/seo/reviewsSeo';
import { assetPath } from '@/utils/assetPath';

export async function getStaticProps() {
  // Generate structured data using reviews data
  const structuredData = JSON.stringify(createReviewsStructuredData(reviewsData));

  return {
    props: {
      seoData: {
        ...reviewsSeoBase,
        structuredData,
      },
      reviewImages,
    },
  };
}

export default function Reviews({ seoData, reviewImages }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  const pageWrapperStyle = {
    backgroundImage: `url(${basePath}/images/texture/black_djins.webp)`
  };
  
  // Slider 1: Иван, Антон, Евгения (indexes: 0, 1, 4)
  // Paths WITHOUT basePath - ImageSlider adds it internally
  const slider1Images = [
    reviewImages[0].src, // Иван
    reviewImages[1].src, // Антон
    reviewImages[4].src, // Евгения
  ];

  // Slider 2: Александра и Телеграм (indexes: 2, 3)
  const slider2Images = [
    reviewImages[2].src, // Александра
    reviewImages[3].src, // Телеграм
  ];

  // All images for single slider on mobile
  const allImages = [
    reviewImages[0].src, // Иван
    reviewImages[1].src, // Антон
    reviewImages[2].src, // Александра
    reviewImages[3].src, // Телеграм
    reviewImages[4].src, // Евгения
  ];

  return (
    <>
      <Seo {...seoData} />
  
      <section className={styles.pageWrapper} style={pageWrapperStyle} aria-label="Отзывы клиентов" itemScope itemType="https://schema.org/LocalBusiness">
        <meta itemProp="name" content="Питер Потолок" />
          <div className={styles.main}>
    
            <div className={styles.grid} itemProp="review" itemScope itemType="https://schema.org/Review">
                    {reviewImages.slice(0, 2).map((review, index) => (
                <ReviewCard
                  key={index}
                  src={review.src}
                  alt={review.alt}
                  className={styles.card}
                />
              ))}
              <div className={styles.headerSection}>
                <p className={styles.subtitle}>Что о нас говорят клиенты</p>
              </div>
              <ReviewCard
                src={reviewImages[2].src}
                alt={reviewImages[2].alt}
                className={styles.card}
              />
              <ReviewCard
                src={reviewImages[4].src}
                alt={reviewImages[4].alt}
                className={styles.cardEv}
              />
                    <div className={styles.cardWide}>
                <Image
                  src={assetPath(reviewImages[3].src)}
                  alt={reviewImages[3].alt}
                  width={600}
                  height={600}
                  className={styles.image}
                />
              </div>
            </div>

            <div className={styles.tabletView}>
              <div className={styles.headerSectionTablet}>
                <p className={styles.title}>Что о нас говорят клиенты</p>
              </div>
              <div className={styles.slidersContainer}>
                <div className={styles.sliderWrapper}>
                  <ImageSlider 
                    images={slider1Images} 
                    address="Отзывы клиентов"
                    width={600}
                    height={600}
                  />
                </div>
                <div className={styles.sliderWrapper}>
                  <ImageSlider 
                    images={slider2Images} 
                    address="Отзывы клиентов"
                    width={600}
                    height={600}
                  />
                </div>
              </div>
            </div>

            <div className={styles.mobileView}>
              <div className={styles.headerSectionMobile}>
                <p className={styles.title}>Что о нас говорят клиенты</p>
              </div>
              <div className={styles.sliderWrapperMobile}>
                <ImageSlider 
                  images={allImages} 
                  address="Отзывы клиентов"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
      </section>
    </>
  );
}
