import Seo from '@/components/Seo';
import styles from './contacts.module.css';
import Image from 'next/image';
import Submit from '@/components/Submit/Submit';

export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: 'Контакты',
        description:
          'Свяжитесь с нами для бесплатной консультации и замера. Телефон, адрес, время работы. Ответим на все ваши вопросы.',
        keywords: 'контакты, телефон, адрес, связаться, консультация, замер',
      },
    },
  };
}

export default function Contacts() {
  return (
    <div className={styles.page}>
      {/* Первый блок — форма + фото */}
      <section className={styles.section}>
        <div className={styles.leftColumn}>
          <h1 className={styles.title}>ГОТОВЫ<br />ОБСУДИТЬ ВАШ ПРОЕКТ?</h1>
          <p className={styles.subtext}>
            Оставьте заявку, и наш специалист<br />свяжется с вами для бесплатной<br />консультации
          </p>
          <Submit/>
        </div>

        <div className={styles.rightColumn}>
          <Image
            src="/images/contacts/contacts_photo_one.png"
            alt="Интерьер с ёлкой"
            width={740}
            height={836}
            className={styles.photoOne}
          />
        </div>
      </section>

      {/* Второй блок — фото + контакты (зеркально) */}
      <section className={styles.sectionTwo}>
        <div className={styles.leftColumn}>
          <Image
            src="/images/contacts/contacts_photo_two.png"
            alt="Потолок и перегородка"
            width={740}
            height={836}
            className={styles.photoTwo}
          />
        </div>

        <div className={styles.rightColumn}>
          <h2 className={styles.contactsHeading}>НАШИ<br />КОНТАКТЫ</h2>

          <p className={styles.contactLine}>
            Позвоните по этому номеру<br />
            <a href="tel:+79209063386" className={styles.phoneLink}>
              <strong>+7 920 906 3386</strong>
            </a>
          </p>

          <p className={styles.contactLine}>
            Наш адрес<br />
            <strong>г. Санкт-Петербург и ЛО</strong>
          </p>

          <div className={styles.contactLine}>
            <p className={styles.contactsLabel}>Наши контакты</p>
            <ul className={styles.socialList}>
              <li>
                tg: <a href="https://t.me/piterpotolok" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>@piterpotolok</a>
              </li>
              <li>
                vk: <a href="https://vk.com/piterpoto1ok" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>@piterpoto1ok</a>
              </li>
              <li>
                ig: <a href="instagram.com/piterpotolok" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>+7-920-906-33-86</a>
              </li>
            </ul>

            <div className={styles.socialIcons}>
              <a href="https://vk.com/piterpoto1ok" target="_blank" rel="noopener noreferrer" aria-label="VK">
                <Image src="/icons/social/icon-vk-white.svg" alt="VK" width={50} height={50} />
              </a>
              <a href="https://t.me/piterpotolok" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <Image src="/icons/social/icon-telegram-white.svg" alt="Telegram" width={50} height={50} />
              </a>
              <a href="https://instagram.com/piterpotolok" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Image src="/icons/social/icon-instagram-white.svg" alt="Instagram" width={50} height={50} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}