import Seo from '@/components/Seo';
import styles from './reviews.module.css';
import Image from 'next/image';
import ReviewCard from '@/components/ReviewCard/ReviewCard';
import ImageSlider from '@/components/ImageSlider/ImageSlider';
import { reviewsData, reviewImages } from '@/data/reviewsData';
import { createReviewsStructuredData, reviewsSeoBase } from '@/data/seo/reviewsSeo';

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
    backgroundImage: `url(${basePath}/images/texture/black_djins.png)`
  };
  
  // Slider 1: Александра, Евгения, Антон (indexes: 2, 0, 1)
  const slider1Images = [
    `${basePath}${reviewImages[2].src}`, // Александра
    `${basePath}${reviewImages[0].src}`, // Евгения
    `${basePath}${reviewImages[1].src}`, // Антон
  ];

  // Slider 2: Иван и Телеграм (indexes: 3, 4)
  const slider2Images = [
    `${basePath}${reviewImages[3].src}`, // Иван
    `${basePath}${reviewImages[4].src}`, // Телеграм
  ];

  // All images for single slider on mobile
  const allImages = [
    `${basePath}${reviewImages[2].src}`, // Александра
    `${basePath}${reviewImages[0].src}`, // Евгения
    `${basePath}${reviewImages[1].src}`, // Антон
    `${basePath}${reviewImages[3].src}`, // Иван
    `${basePath}${reviewImages[4].src}`, // Телеграм
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
                    {reviewImages.slice(2).map((review, index) => (
                <ReviewCard
                  key={index + 2}
                  src={review.src}
                  alt={review.alt}
                  className={styles.card}
                />
              ))}
                    <div className={styles.cardWide}>
                <Image
                  src={`${basePath}${reviewImages[4].src}`}
                  alt={reviewImages[4].alt}
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
