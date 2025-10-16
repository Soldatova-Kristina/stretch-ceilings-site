import Link from 'next/link';
import styles from './Footer.module.css';

/**
 * Footer Component - Site-wide footer with company info and navigation
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Column 1: Company Info */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>СтретчПотолки</h3>
          <p className={styles.description}>
            Профессиональная установка натяжных потолков и стен. Качество, гарантия, доступные цены.
          </p>
          <div className={styles.socialLinks}>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
              </svg>
            </a>
            <a 
              href="https://vk.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="VK"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12.785 16.241s.288-.032.436-.193c.136-.149.131-.428.131-.428s-.019-1.304.587-1.496c.597-.19 1.364 1.26 2.177 1.818.615.422 1.083.33 1.083.33l2.177-.03s1.139-.07.599-966c-.04-.084-.282-.594-1.45-1.678-1.224-1.136-1.06-.952.414-2.914.898-1.195 1.256-1.924 1.145-2.236-.106-.297-.762-.219-.762-.219l-2.452.015s-.182-.025-.316.056c-.131.079-.216.263-.216.263s-.387 1.03-.903 1.906c-1.088 1.849-1.524 1.946-1.701 1.831-.413-.268-.31-1.076-.31-1.651 0-1.794.272-2.542-.53-2.736-.267-.065-.463-.108-1.145-.115-.875-.009-1.616.003-2.034.208-.278.136-.493.44-.362.457.162.022.529.099.724.364.252.342.243 1.11.243 1.11s.145 2.112-.338 2.373c-.331.179-.785-.187-1.76-1.863-.499-.85-.877-1.79-.877-1.79s-.073-.179-.203-.275c-.157-.116-.377-.153-.377-.153l-2.329.015s-.35.01-.478.162c-.114.135-.009.414-.009.414s1.816 4.245 3.873 6.383c1.887 1.96 4.027 1.832 4.027 1.832h.971z" fill="currentColor"/>
              </svg>
            </a>
            <a 
              href="https://wa.me/79001234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="WhatsApp"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" fill="currentColor"/>
              </svg>
            </a>
            <a 
              href="https://t.me/stretchpotolki" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Telegram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.015-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.122.098.155.23.171.324.016.094.036.308.02.475z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Навигация</h4>
          <ul className={styles.linkList}>
            <li>
              <Link href="/" className={styles.link}>Главная</Link>
            </li>
            <li>
              <Link href="/about" className={styles.link}>О нас</Link>
            </li>
            <li>
              <Link href="/portfolio" className={styles.link}>Портфолио</Link>
            </li>
            <li>
              <Link href="/reviews" className={styles.link}>Отзывы</Link>
            </li>
            <li>
              <Link href="/faq" className={styles.link}>FAQ</Link>
            </li>
            <li>
              <Link href="/contacts" className={styles.link}>Контакты</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Услуги</h4>
          <ul className={styles.linkList}>
            <li>
              <Link href="/services/ceilings" className={styles.link}>
                Натяжные потолки
              </Link>
            </li>
            <li>
              <Link href="/services/walls" className={styles.link}>
                Натяжные стены
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Контакты</h4>
          <ul className={styles.contactList}>
            <li>
              <a href="tel:+79001234567" className={styles.contactLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                +7 (900) 123-45-67
              </a>
            </li>
            <li>
              <a href="mailto:info@stretchpotolki.ru" className={styles.contactLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                info@stretchpotolki.ru
              </a>
            </li>
            <li className={styles.workingHours}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div>
                <div>Пн-Пт: 9:00 - 20:00</div>
                <div>Сб-Вс: 10:00 - 18:00</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <p className={styles.copyright}>
            © {currentYear} СтретчПотолки. Все права защищены.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className={styles.legalLink}>
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
