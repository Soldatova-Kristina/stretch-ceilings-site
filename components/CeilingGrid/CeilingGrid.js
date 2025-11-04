import Image from "next/image";
import { TELEGRAM_URL } from "@/data/contactsData";
import styles from "./CeilingGrid.module.css";

function CeilingCard({ image, imageAlt, title, subtitle, description, buttonText = "ПОДРОБНЕЕ", rotate = 0 }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper} style={{ '--mobile-rotate': `${rotate}deg` }}>
        <Image
          src={`${basePath}${image}`}
          alt={imageAlt}
          width={283}
          height={388}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}
        <p className={styles.description}>{description}</p>
        <a 
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          {buttonText}
        </a>
      </div>
    </article>
  );
}

export default function CeilingGrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item, index) => (
        <CeilingCard key={item.id || index} {...item} />
      ))}
    </div>
  );
}
