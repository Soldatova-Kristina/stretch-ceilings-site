import Seo from '@/components/Seo';
import faqJson from '@/lib/seo/faq.json';
import { useState } from 'react';
import styles from './faq.module.css'; 

const faqList = [
  {
    question: "Когда правильнее всего пригласить замерщика?",
    answer: "Лучше всего вызывать замерщика после завершения черновых работ, но до установки мебели и чистовой отделки. Это позволит точно замерить геометрию помещения и учесть все нюансы монтажа потолка или стен."
  },
  {
    question: "Что делают сначала — натяжной потолок или оклейку обоями?",
    answer: "Сначала устанавливают натяжной потолок, а затем клеят обои. Это помогает избежать повреждений полотна при ремонте стен и добиться аккуратного примыкания по периметру."
  },
  {
    question: "Можно ли смонтировать потолок, если встроенный шкаф уже установлен?",
    answer: "Да, потолок можно установить после монтажа встроенного шкафа. Но важно, чтобы шкаф не мешал установке багета и не перекрывал рабочую зону для натяжения полотна."
  },
  {
    question: "Что монтируют в первую очередь — натяжные потолки или встроенную мебель?",
    answer: "Рекомендуется сначала установить потолок, а затем — встроенную мебель. Это позволит избежать зазоров между мебелью и потолком, а также снизит риск повреждения полотна при установке."
  },
  {
    question: "Есть ли риск, что потолок со временем провиснет, например зимой при сквозняках?",
    answer: "Если потолок установлен правильно и использованы качественные материалы, он не провиснет даже при перепадах температуры или сквозняках. Главное — профессиональный монтаж и надёжный профиль."
  },
  {
    question: "Используемая плёнка безопасна для здоровья и не выделяет запаха?",
    answer: "Современные ПВХ-плёнки сертифицированы, безопасны для здоровья и не выделяют вредных веществ при нормальной эксплуатации. Запах возможен только в первые часы после установки."
  },
  {
    question: "Насколько сильно уменьшается высота комнаты после монтажа потолка?",
    answer: "Минимальная потеря высоты — от 3 до 5 см, если потолок устанавливается без встраиваемого освещения. При установке светильников потребуется больше пространства — обычно от 7 до 10 см."
  }
];

export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: "Часто задаваемые вопросы",
        description: "FAQ по натяжным потолкам в СПб: когда вызвать замерщика, порядок работ с обоями и мебелью, безопасность материалов, потеря высоты. Ответы от Питер Потолок.",
        keywords: "вопросы натяжные потолки, FAQ установка СПб, замер потолка, порядок монтажа, безопасность ПВХ, потеря высоты потолок, Санкт-Петербург",
        canonicalUrl: "https://piterpotolok.ru/faq",
        ogImage: "/og-default.jpg",
        ogType: "website",
        structuredData: JSON.stringify(faqJson) 
      },
    },
  };
}

export default function FAQ({ seo }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Seo {...seo} />
      <div className={styles.pageWrapper} itemScope itemType="https://schema.org/FAQPage">
        <div className="container">
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
      </div>
    </>
  );
}
