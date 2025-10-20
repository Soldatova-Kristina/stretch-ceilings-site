import Seo from '@/components/Seo';
import PageTitle from '@/components/PageTitle/PageTitle';
import styles from './contacts.module.css';
import Image from 'next/image';

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
          <PageTitle>ГОТОВЫ<br />ОБСУДИТЬ ВАШ ПРОЕКТ?</PageTitle>
          <p className={styles.subtext}>
            Оставьте заявку, и наш специалист<br />свяжется с вами для бесплатной<br />консультации
          </p>

          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Имя:</label>
              <input type="text" id="name" name="name" className={styles.input} required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>Номер телефона:</label>
              <input type="tel" id="phone" name="phone" className={styles.input} required />
            </div>

            <div className={styles.checkboxWrapper}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" className={styles.checkbox} required />
                Я согласен с политикой конфиденциальности
              </label>
            </div>

            <button type="submit" className={styles.button}>
              ОТПРАВИТЬ <span className={styles.arrow}>→</span>
            </button>
          </form>
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