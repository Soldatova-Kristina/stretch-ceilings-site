import styles from "@/styles/Home.module.css";

export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: "Главная",
        description: "Профессиональная установка натяжных потолков и стен. Качественные материалы, опытные мастера, доступные цены. Бесплатный замер и консультация.",
        keywords: "натяжные потолки, натяжные стены, установка потолков, ремонт, дизайн интерьера",
      },
    },
  };
}

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1>Натяжные потолки и стены</h1>
          <p className={styles.lead}>
            Преобразите ваше пространство с помощью современных натяжных конструкций. 
            Быстрая установка, долговечность и безупречный внешний вид.
          </p>
          <div className={styles.ctas}>
            <a href="/contacts" className={styles.primaryButton}>
              Бесплатный замер
            </a>
            <a href="/portfolio" className={styles.secondaryButton}>
              Наши работы
            </a>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <h2>Почему выбирают нас</h2>
          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <h3>Опыт</h3>
              <p>Более 10 лет на рынке натяжных потолков</p>
            </div>
            <div className={styles.feature}>
              <h3>Качество</h3>
              <p>Используем только сертифицированные материалы</p>
            </div>
            <div className={styles.feature}>
              <h3>Гарантия</h3>
              <p>Предоставляем гарантию на все виды работ</p>
            </div>
            <div className={styles.feature}>
              <h3>Цены</h3>
              <p>Доступные цены без скрытых платежей</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
