import Seo from '@/components/Seo';
import styles from './contacts.module.css';
import Image from 'next/image';
import Submit from '@/components/Submit/Submit';
import { contactsSeoData } from '@/data/seo/contactsSeo';
import { assetPath } from '@/utils/assetPath';

export async function getStaticProps() {
  return {
    props: {
      seoData: contactsSeoData,
    },
  };
}

export default function Contacts({ seoData }) {
  const pageBackground = {
    backgroundImage: `url(${assetPath('images/texture/black_djins.png')})`,
  };

  return (
    <>
      <Seo {...seoData} />
      <div className={styles.pageWrapper} style={pageBackground} itemScope itemType="https://schema.org/ContactPage">
        {/* Contact Form Section */}
        <section className={styles.section} aria-label="Форма обратной связи">
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

        {/* Contact Information Section */}
        <section className={styles.sectionTwo} aria-label="Контактная информация">
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