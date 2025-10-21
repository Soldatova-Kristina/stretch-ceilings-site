import Seo from '@/components/Seo';
import styles from './reviews.module.css';
import Image from 'next/image';

export async function getStaticProps() {

  const reviewsData = [
    {
      author: "Евгения",
      rating: 5,
      text: "Отличная работа! Потолок установили быстро и качественно. Мастера аккуратные, всё убрали за собой."
    },
    {
      author: "Антон",
      rating: 5,
      text: "Очень доволен результатом. Профессиональная команда, разумные цены. Рекомендую!"
    },
    {
      author: "Александра",
      rating: 5,
      text: "Спасибо за прекрасную работу! Потолки выглядят идеально, всё сделано точно в срок."
    },
    {
      author: "Иван",
      rating: 5,
      text: "Отличный сервис от консультации до установки. Результат превзошёл ожидания!"
    }
  ];

  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Питер Потолок",
    "image": "https://piterpotolok.ru/og-default.jpg",
    "@id": "https://piterpotolok.ru",
    "url": "https://piterpotolok.ru/reviews",
    "telephone": "+7-932-007-60-85",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Санкт-Петербург",
      "addressCountry": "RU"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "ratingCount": reviewsData.length.toString()
    },
    "review": reviewsData.map((review, index) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5"
      },
      "reviewBody": review.text,
      "datePublished": "2025-01-01"
    }))
  });

  return {
    props: {
      seo: {
        title: "Отзывы клиентов",
        description: "Отзывы о натяжных потолках в Санкт-Петербурге: реальные мнения клиентов Питер Потолок о качестве работ, сроках монтажа и сервисе. Читайте отзывы с фото результатов.",
        keywords: "отзывы натяжные потолки СПб, мнения клиентов Санкт-Петербург, рекомендации Питер Потолок, качество работ отзывы, реальные отзывы установка потолков",
        ogImage: "/images/reviews/evgenia.png",
        structuredData,
      },
    },
  };
}

export default function Reviews({ seo }) {
  return (
    <>
      <Seo {...seo} />
      <main className={styles.main} itemScope itemType="https://schema.org/LocalBusiness">
        <meta itemProp="name" content="Питер Потолок" />
        <h2 className={styles.title}>Отзывы</h2>
        <p className={styles.subtitle}>Что о нас говорят клиенты</p>

        <div className={styles.grid} itemProp="review" itemScope itemType="https://schema.org/Review">
        <div className={styles.card}>
          <Image
            src="/images/reviews/evgenia.png"
            alt="Review by Evgenia"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.card}>
          <Image
            src="/images/reviews/anton.png"
            alt="Review by Anton"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.card}>
          <Image
            src="/images/reviews/alexandra.png"
            alt="Review by Alexandra"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.card}>
          <Image
            src="/images/reviews/ivan.png"
            alt="Review by Ivan"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
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
    </main>
    </>
  );
}
