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
          <h1>Hero</h1>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <h2>О Нас</h2>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <h2>Наши преимущества</h2>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <h2>Наши услуги</h2>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <h2>Этапы работы</h2>
        </div>
      </section>
    </div>
  );
}
