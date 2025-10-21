
import Seo from '@/components/Seo';
import faqJson from '@/lib/seo/faq.json';
import { useState } from 'react';
import styles from './faq.module.css'; 

const faqList = [
  {
    question: "Когда правильнее всего пригласить замерщика?",
    answer: "Лучше всего после черновой отделки, но до установки мебели. Это обеспечивает точные замеры и оптимальную установку потолков и стен."
  },
  {
    question: "Что делают сначала — натяжной потолок или оклейку обоями?",
    answer: "Сначала монтируют потолок, потом клеят обои — так получается аккуратный стык и меньше риска повредить отделку."
  },
  {
    question: "Можно ли смонтировать потолок, если встроенный шкаф уже установлен?",
    answer: "Да, можно. Главное — чтобы шкаф не мешал установке багета по периметру потолка."
  },
  {
    question: "Что монтируют в первую очередь — натяжные потолки или встроенную мебель?",
    answer: "Обычно сначала потолок — тогда мебель идеально примыкает и не требует подрезки."
  },
  {
    question: "Есть ли риск, что потолок со временем провиснет, например зимой при сквозняках?",
    answer: "Нет, при правильном монтаже и качественной плёнке провисание исключено, даже при температурных перепадах."
  },
  {
    question: "Используемая плёнка безопасна для здоровья и не выделяет запаха?",
    answer: "Современные ПВХ-полотна проходят сертификацию и безопасны при использовании внутри помещений."
  },
  {
    question: "Насколько сильно уменьшается высота комнаты после монтажа потолка?",
    answer: "Минимальная потеря — от 3 до 5 см, в зависимости от освещения и типа крепления."
  }
];

export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: "Часто задаваемые вопросы о натяжных потолках и тихих стенах",
        description: "Ответы на популярные вопросы о натяжных потолках: когда вызывать замерщика, что делать сначала — потолок или обои, как монтировать с мебелью, безопасность плёнки.",
        keywords: "установка натяжных потолков, монтаж тихих стен, срок службы натяжных потолков, уход за натяжными потолками, натяжные потолки Санкт-Петербург установка, тихие стены Санкт-Петербург",
        canonicalUrl: "https://piterpotolok.ru/faq",
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
      <div className={styles.pageWrapper}>
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
