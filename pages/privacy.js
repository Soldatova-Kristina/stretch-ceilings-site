import Seo from '@/components/Seo';
import Link from 'next/link';
import styles from './privacy.module.css';

export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: "Политика конфиденциальности",
        description: "Политика конфиденциальности сайта piterpotolok.ru. Информация о сборе, обработке и защите персональных данных пользователей.",
        keywords: "политика конфиденциальности, обработка персональных данных, защита данных, piterpotolok.ru",
        noIndex: true,
      },
    },
  };
}

export default function Privacy({ seo }) {
  return (
    <>
      <Seo {...seo} />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Политика конфиденциальности</h1>
          <p className={styles.date}>Действующая редакция от 22.10.2025</p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Общие положения</h2>
          <p className={styles.text}>
            Настоящая Политика конфиденциальности определяет порядок обработки и
            защиты персональных данных пользователей сайта{" "}
            <span className={styles.mono}>piterpotolok.ru</span> (далее — «Сайт»).
          </p>
          <p className={styles.text}>
            Используя сайт и отправляя форму заявки, пользователь выражает
            согласие с настоящей Политикой. Если вы не согласны с условиями,
            прекратите использование сайта.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Состав собираемых данных</h2>
          <p className={styles.text}>
            Мы собираем только те данные, которые пользователь добровольно
            предоставляет через форму заявки:
          </p>
          <ul className={styles.list}>
            <li>имя;</li>
            <li>номер телефона.</li>
          </ul>
          <p className={styles.text}>Эти данные относятся к персональным.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Цели обработки</h2>
          <ul className={styles.list}>
            <li>- связь с пользователем по его запросу;</li>
            <li>- уточнение деталей заявки и предоставление консультации</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Передача и хранение данных</h2>
          <ul className={styles.list}>
            <li>
              Заявки могут передаваться для обработки в мессенджер Telegram в чат
              администратора сайта.
            </li>
            <li>
              Мы не передаём персональные данные третьим лицам, за исключением
              случаев, предусмотренных законом.
            </li>
            <li>
              Данные хранятся до достижения целей обработки или до получения
              запроса на удаление от пользователя.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Защита данных</h2>
          <p className={styles.text}>
            Применяются организационные и технические меры для защиты персональных
            данных от несанкционированного доступа, изменения, раскрытия или
            уничтожения.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Файлы cookie и аналитика</h2>
          <p className={styles.text}>
            Сайт не использует cookie и системы аналитики. В случае подключения
            аналитики (например, Google Analytics) Политика будет обновлена.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Изменения Политики</h2>
          <p className={styles.text}>
            Актуальная версия доступна по адресу{" "}
            <Link href="/privacy" className={styles.link}>https://piterpotolok.ru/privacy</Link>.
          </p>
        </section>
      </div>
    </>
  );
}