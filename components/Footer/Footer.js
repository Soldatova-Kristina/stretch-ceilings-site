import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  // Memoize navigation items
  const navItems = useMemo(() => [
    { href: '/', label: 'Главная' },
    { href: '/portfolio', label: 'Наши работы' },
    { href: '/faq', label: 'FAQ' },
    { href: '/reviews', label: 'Отзывы' },
    { href: '/contacts', label: 'Контакты' },
  ], []);

  const serviceItems = useMemo(() => [
    { href: '/services/ceilings', label: 'Потолки' },
    { href: '/services/walls', label: 'Стены' },
  ], []);

  const socialLinks = useMemo(() => [
    {
      href: 'https://wa.me/79209063386',
      icon: '/icons/social/icon-whatsapp.svg',
      label: 'WhatsApp',
      external: true,
    },
    {
      href: 'https://vk.com/piterpoto1ok',
      icon: '/icons/social/icon-vk.svg',
      label: 'VK',
      external: true,
    },
    {
      href: 'https://t.me/piterpotolok',
      icon: '/icons/social/icon-telegram.svg',
      label: 'Telegram',
      external: true,
    },
    {
      href: 'tel:+79209063386',
      icon: '/icons/social/icon-phone.svg',
      label: 'Телефон',
      external: false,
    },
  ], []);

  return (
<footer className={styles.footer}>
      <div className={styles.footer__main}>

        <div className={styles.footer__logo}>
          <Image
            src="/icons/logotype.svg"
            alt="Логотип Питер Потолок"
            width={112}
            height={90}
            className={styles['footer__logo-img']}
          />
        </div>

        <div className={styles.footer__content}>

          <nav className={styles.footer__nav} aria-label="Навигация подвала">
            <ul className={styles['footer__nav-list']}>
              {navItems.map((item) => (
                <li key={item.href} className={styles['footer__nav-item']}>
                  <Link href={item.href} className={styles['footer__nav-link']}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.footer__services}>
            <ul className={styles['footer__services-list']}>
              {serviceItems.map((item) => (
                <li key={item.href} className={styles['footer__services-item']}>
                  <Link href={item.href} className={styles['footer__services-link']}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footer__contacts}>
            <a 
              href="tel:+79320076085" 
              className={styles['footer__contacts-phone']}
              aria-label="Позвонить по номеру +7-932-007-60-85"
            >
              +7-932-007-60-85
            </a>
            <span className={styles['footer__contacts-hours']} aria-label="Время работы">ПН–ВС 08:00 – 20:00</span>
            <span className={styles['footer__contacts-address-label']}>Адрес</span>
            <address className={styles['footer__contacts-address']}>г. Санкт-Петербург</address>
          </div>

        </div>

        <div className={styles.footer__social}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
              className={styles['footer__social-link']}
              aria-label={`Связаться через ${link.label}`}
            >
              <Image
                src={link.icon}
                alt={link.label}
                width={30}
                height={30}
              />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
