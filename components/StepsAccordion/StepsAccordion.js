import { useState } from 'react';
import styles from './StepsAccordion.module.css';
import { stepsData } from '@/data/stepsData';

export default function StepsAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        {stepsData.map((step, index) => (
          <div
            key={step.id}
            className={`${styles.card} ${openIndex === index ? styles.open : ''}`}
          >
            <div className={styles.content}>
              <div className={styles.number}>{step.number}</div>

              {openIndex === index ? (
                <p className={styles.text}>{step.text}</p>
              ) : (
                <h3 className={styles.title}>{step.title}</h3>
              )}

            <button
              className={styles.arrowBottom}
              onClick={() => toggleCard(index)}
              aria-label={openIndex === index ? 'Закрыть' : 'Открыть'}
            >
              <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7.5H23M23 7.5L16 1M23 7.5L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.cta}>ЗАПИСАТЬСЯ НА ЗАМЕР</button>
    </div>
  );
}