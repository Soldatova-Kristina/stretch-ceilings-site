import Seo from '@/components/Seo';
import { useState } from 'react';
import styles from './faq.module.css';
import { faqList } from '@/data/faqData';
import { createFaqStructuredData, faqSeoBase } from '@/data/seo/faqSeo';
import { assetPath } from '@/utils/assetPath';

export async function getStaticProps() {
  // Generate structured data using FAQ items
  const structuredData = JSON.stringify(createFaqStructuredData(faqList));

  return {
    props: {
      seoData: {
        ...faqSeoBase,
        structuredData
      },
    },
  };
}

export default function FAQ({ seoData }) {
  const [openIndex, setOpenIndex] = useState(null);

  const pageBackground = {
    backgroundImage: `url(${assetPath('/images/texture/faq_background.jpg')})`,
  };

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Seo {...seoData} />
      {/* FAQ Section */}
      <section className={styles.pageWrapper} style={pageBackground} itemScope itemType="https://schema.org/FAQPage" aria-label="Часто задаваемые вопросы">
          <div className={styles.container}>
            <h1 className={styles.title}>
              Мы подготовили для вас <br /> ответы на самые часто задаваемые вопросы
            </h1>

          <ul className={styles.faqList}>
            {faqList.map((item, i) => (
              <li key={i} className={styles.faqItem} itemScope itemType="https://schema.org/Question">
                <button className={styles.question} onClick={() => toggle(i)}>
                  <span className={styles.number}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.text} itemProp="name">{item.question}</span>
                  <span className={styles.icon}>{openIndex === i ? '–' : '+'}</span>
                </button>
                {openIndex === i && (
                  <div className={styles.answer} itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <div itemProp="text">{item.answer}</div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          </div>
        </section>
    </>
  );
}
