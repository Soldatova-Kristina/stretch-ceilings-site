import Seo from '@/components/Seo';
import styles from './reviews.module.css';
import Image from 'next/image';

export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: "Отзывы",
        description: "Отзывы наших клиентов о качестве работ и сервисе. Реальные мнения людей, которые уже установили натяжные потолки с нами.",
        keywords: "отзывы, мнения клиентов, рекомендации, качество работ",
      },
    },
  };
}

export default function Reviews() {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Отзывы</h2>
      <p className={styles.subtitle}>Что о нас говорят клиенты</p>

      <div className={styles.grid}>
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
  );
}
