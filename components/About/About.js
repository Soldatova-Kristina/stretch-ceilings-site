import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.leftBlock}>
        <h2 className={styles.title}>АРХИТЕКТУРНЫЙ ТЕКСТИЛЬ</h2>

        <p className={styles.text}>
          Финишная отделка стен и потолков архитектурным текстилем — это быстрый,
          эстетичный и долговечный способ преобразить любое пространство.
          Материал обеспечивает качественное звукопоглощение и улучшает акустику.
          Благодаря продуманной технологии монтажа установка выполняется в пять
          раз быстрее традиционных способов отделки помещений. При этом текстиль
          сохраняет свои свойства и внешний вид.
        </p>

        <div className={styles.horizontalWrapper}>
          <Image
            src="/images/walls/review_backgroundd.jpg"
            alt="Архитектурный текстиль"
            width={721}
            height={397}
            className={styles.horizontalImage}
          />
        </div>
      </div>

      <div className={styles.verticalWrapper}>
        <Image
          src="/images/walls/about1.jpg"
          alt="Интерьер с текстилем"
          width={453}
          height={736}
          className={styles.verticalImage}
        />
      </div>
    </section>
  );
}