import Seo from '@/components/Seo';
import styles from './reviews.module.css';
import Image from 'next/image';
import ReviewCard from '@/components/ReviewCard/ReviewCard';
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
  return (
    <>
      <Seo {...seoData} />
      {/* Reviews Section */}
      <section className={styles.pageWrapper} aria-label="Отзывы клиентов" itemScope itemType="https://schema.org/LocalBusiness">
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
                <h1 className={styles.title}>ОТЗЫВЫ</h1>
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
                  src="/images/reviews/telegram.png"
                  alt="Telegram review"
                  width={600}
                  height={600}
                  className={styles.image}
                />
              </div>
            </div>
          </div>
      </section>
    </>
  );
}
