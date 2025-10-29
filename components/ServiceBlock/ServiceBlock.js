import Image from 'next/image';
import Link from 'next/link';
import styles from './ServiceBlock.module.css';
import { servicesData } from '@/data/servicesData';

export default function ServiceBlocks() {
  return (
    <div className={styles.section}>
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

              <Link href={service.link} className={styles.button}>
                ПОДРОБНЕЕ ОБ УСЛУГЕ
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}