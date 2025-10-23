import Image from 'next/image';
import styles from './ServiceBlock.module.css';

export default function ServiceBlocks() {
  const services = [
    {
      title: 'НАТЯЖНЫЕ ПОТОЛКИ',
      text: 'Лучшее решение в отделке потолков, сочетающее в себе высокое эксплуатационное качество и доступную стоимость. Подходят как для жилых, так и для коммерческих помещений',
      image: '/images/index/service1.png',
    },
    {
      title: 'ТИХИЕ СТЕНЫ',
      text: 'Архитектурный текстиль для финишной отделки стен и потолков. Безупречная акустика и звукопоглощение. Монтаж в 5 раз быстрее стандартной отделки. Срок службы более 30-ти лет.',
      image: '/images/index/service2.png',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {services.map((service, index) => (
          <div key={index} className={styles.block}>
            <Image
              src={service.image}
              alt={service.title}
              width={563}
              height={330}
              className={styles.image}
            />

            <div className={styles.content}>
              <h2 className={styles.title}>{service.title}</h2>
              <p className={styles.text}>{service.text}</p>

              <button className={styles.button}>
                ПОДРОБНЕЕ ОБ УСЛУГЕ →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}