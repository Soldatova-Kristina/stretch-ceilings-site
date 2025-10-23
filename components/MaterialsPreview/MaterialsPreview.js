import Image from "next/image";
import styles from "./MaterialsPreview.module.css";
import { materialsData } from "@/data/materialsData";

function MaterialBlock({ title, items, imageSrc, imageAlt }) {
  return (
    <div className={styles.block}>
      <h3 className={styles.blockTitle}>{title}</h3>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={565}
          height={376}
          className={styles.image}
        />
      </div>
    </div>
  );
}

export default function MaterialsPreview() {
  return (
    <div className={styles.wrapper}>
      {materialsData.map((material) => (
        <MaterialBlock key={material.id} {...material} />
      ))}
    </div>
  );
}
