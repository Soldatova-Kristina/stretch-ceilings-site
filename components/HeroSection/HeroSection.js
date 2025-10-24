import Image from "next/image";
import CtaButton from "@/components/CtaButton/CtaButton";
import styles from "./HeroSection.module.css";

export default function HeroSection({
  mainTitle = "НАТЯЖНЫЕ ПОТОЛКИ",
  subtitle,
  location = "САНКТ-ПЕТЕРБУРГ И ЛО",
  priceText,
  imageSrc,
  imageAlt = "Натяжные потолки",
  showSecondButton = false,
  secondButtonText = "ПОДРОБНЕЕ ОБ УСЛУГАХ",
  onSecondButtonClick,
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.leftSection}>
          <div className={styles.brandContainer}>
            <p className={styles.brandText}>
              ВДОХНОВЛЯЕМ<br />ПРОСТРАНСТВО КРАСОТОЙ<br />И УЮТОМ
            </p>
          </div>
          <p className={styles.brandName}>ПИТЕР ПОТОЛОК</p>

          <div className={styles.contentContainer}>
            <h1 className={styles.title}>
              {mainTitle}<br />
             {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
              {location}
            </h1>

            <p className={styles.priceText}>{priceText}</p>

            <CtaButton 
              text="ЗАПИСАТЬСЯ НА ЗАМЕР" 
              ariaLabel="Записаться на замер" 
              className={styles.ctaButton}
            />
          </div>
        </div>

        <div className={styles.rightSection}>
          <Image 
            src={imageSrc} 
            alt={imageAlt} 
            width={587}
            height={748}
            priority 
            className={styles.image}
            style={{ objectFit: 'cover' }}
          />
          {showSecondButton && (
            <div className={styles.secondButtonContainer}>
              <CtaButton 
                text={secondButtonText}
                ariaLabel={secondButtonText}
                className={styles.secondButton}
                onClick={onSecondButtonClick}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}