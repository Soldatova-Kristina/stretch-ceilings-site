import Image from 'next/image';
import styles from './ServiceBlock.module.css';
import { servicesData } from '@/data/servicesData';

export default function ServiceBlocks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {servicesData.map((service) => (
          <div key={service.id} className={styles.block}>
            <Image
              src={service.image}
              alt={service.title}
              width={563}
              height={330}
              className={styles.image}
              quality={90}
              loading="lazy"
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