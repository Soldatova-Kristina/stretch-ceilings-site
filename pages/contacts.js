import Seo from '@/components/Seo';
import styles from './contacts.module.css';
import Image from 'next/image';
import Submit from '@/components/Submit/Submit';

export async function getStaticProps() {
  
  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Питер Потолок",
    "image": "https://piterpotolok.ru/og-default.jpg",
    "@id": "https://piterpotolok.ru",
    "url": "https://piterpotolok.ru/contacts",
    "telephone": "+7-932-007-60-85",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Санкт-Петербург",
      "addressRegion": "Ленинградская область",
      "postalCode": "",
      "addressCountry": "RU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 59.9311,
      "longitude": 30.3609
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Санкт-Петербург"
      },
      {
        "@type": "State",
        "name": "Ленинградская область"
      }
    ],
    "sameAs": [
      "https://t.me/piterpotolok",
      "https://vk.com/piterpoto1ok",
      "https://instagram.com/piterpotolok"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7-932-007-60-85",
      "contactType": "customer service",
      "availableLanguage": ["Russian"],
      "areaServed": "RU"
    }
  });

  return {
    props: {
      seo: {
        title: 'Контакты',
        description:
          'Свяжитесь с нами для бесплатной консультации по натяжным потолкам в Санкт-Петербурге и ЛО. Телефон +7-932-007-60-85, выезд замерщика бесплатно, работаем ежедневно.',
        keywords: 'контакты натяжные потолки, телефон Питер Потолок, адрес СПб, связаться консультация, бесплатный замер, Санкт-Петербург ЛО',
        ogImage: '/og-default.jpg',
        structuredData,
      },
    },
  };
}

export default function Contacts({ seo }) {
  return (
    <>
      <Seo {...seo} />
      <div className={styles.page} itemScope itemType="https://schema.org/ContactPage">

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

          <div className={styles.contactLine} itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
            Позвоните по этому номеру<br />
            <a href="tel:+79320076085" className={styles.phoneLink} itemProp="telephone">
              <strong>+7-932-007-60-85</strong>
            </a>
            <meta itemProp="contactType" content="customer service" />
            <meta itemProp="availableLanguage" content="Russian" />
          </div>

          <div className={styles.contactLine} itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            Наш адрес<br />
            <strong>
              <span itemProp="addressLocality">г. Санкт-Петербург</span> и <span itemProp="addressRegion">ЛО</span>
            </strong>
            <meta itemProp="addressCountry" content="RU" />
          </div>

          <div className={styles.contactLine}>
            <p className={styles.contactsLabel}>Наши социальные сети</p>
            <ul className={styles.socialList}>
              <li>
                tg: <a href="https://t.me/piterpotolok" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>@piterpotolok</a>
              </li>
              <li>
                vk: <a href="https://vk.com/piterpoto1ok" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>@piterpoto1ok</a>
              </li>
              <li>
                ig: <a href="https://instagram.com/piterpotolok" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>@piterpotolok</a>
              </li>
            </ul>

            <div className={styles.socialIcons}>
               <a href="https://t.me/piterpotolok" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <Image src="/icons/social/icon-telegram-white.svg" alt="Telegram" width={50} height={50} />
              </a>
              <a href="https://vk.com/piterpoto1ok" target="_blank" rel="noopener noreferrer" aria-label="VK">
                <Image src="/icons/social/icon-vk-white.svg" alt="VK" width={50} height={50} />
              </a>
              <a href="https://instagram.com/piterpotolok" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Image src="/icons/social/icon-instagram-white.svg" alt="Instagram" width={50} height={50} />
              </a>
               <a href="tel:+79320076085" target="_blank" rel="noopener noreferrer" aria-label="Phone">
                <Image src="/icons/social/icon-phone-white.svg" alt="Phone" width={50} height={50} />
              </a>
               <a href="https://wa.me/+79679786000" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
                <Image src="/icons/social/icon-whatsapp-white.svg" alt="Whatsapp" width={50} height={50} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}