import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
<footer className={styles.footer}>
      <div className={styles.footer__main}>

        <div className={styles.footer__logo}>
        <img
  src="/icons/logotype.svg"
  alt="Логотип Питер Потолок"
  className={styles['footer__logo-img']}
/>
        </div>

        <div className={styles.footer__content}>

          <nav className={styles.footer__nav}>
            <ul className={styles['footer__nav-list']}>
              <li className={styles['footer__nav-item']}>
                <Link href="/" className={styles['footer__nav-link']}>Главная</Link>
              </li>
              <li className={styles['footer__nav-item']}>
                <Link href="/portfolio" className={styles['footer__nav-link']}>Наши работы</Link>
              </li>
              <li className={styles['footer__nav-item']}>
                <Link href="/faq" className={styles['footer__nav-link']}>FAQ</Link>
              </li>
              <li className={styles['footer__nav-item']}>
                <Link href="/reviews" className={styles['footer__nav-link']}>Отзывы</Link>
              </li>
              <li className={styles['footer__nav-item']}>
                <Link href="/contacts" className={styles['footer__nav-link']}>Контакты</Link>
              </li>
            </ul>
          </nav>

          <div className={styles.footer__services}>
            <ul className={styles['footer__services-list']}>
              <li className={styles['footer__services-item']}>
                <Link href="/services/ceilings" className={styles['footer__services-link']}>Потолки</Link>
              </li>
              <li className={styles['footer__services-item']}>
                <Link href="/services/walls" className={styles['footer__services-link']}>Стены</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footer__contacts}>
            <a href="tel:+79209063386" className={styles['footer__contacts-phone']}>+7-920-906-33-86</a>
            <span className={styles['footer__contacts-hours']}>ПН–ВС 08:00 – 20:00</span>
            <span className={styles['footer__contacts-address-label']}>Адрес</span>
            <span className={styles['footer__contacts-address']}>г. Санкт-Петербург</span>
          </div>

        </div>

        <div className={styles.footer__social}>
          <a
            href="https://wa.me/79209063386"
            target="_blank"
            rel="noopener noreferrer"
            className={styles['footer__social-link']}
          >
            <img src="/icons/social/icon-whatsapp.svg" alt="WhatsApp" width={30} height={30} />
          </a>
          <a
            href="https://vk.com/piterpoto1ok"
            target="_blank"
            rel="noopener noreferrer"
            className={styles['footer__social-link']}
          >
            <img src="/icons/social/icon-vk.svg" alt="VK" width={30} height={30} />
          </a>
          <a
            href="tel:+79209063386"
            className={styles['footer__social-link']}
          >
            <img src="/icons/social/icon-phone.svg" alt="Телефон" width={30} height={30} />
          </a>
          <a
            href="https://t.me/piterpotolok"
            target="_blank"
            rel="noopener noreferrer"
            className={styles['footer__social-link']}
          >
            <img src="/icons/social/icon-telegram.svg" alt="Telegram" width={30} height={30} />
          </a>
        </div>

      </div>
    </footer>
  );
}
