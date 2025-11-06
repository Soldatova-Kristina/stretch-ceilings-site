import Image from "next/image";
import CtaButton from "@/components/CtaButton/CtaButton";
import ShinyText from "@/components/ShinyText/ShinyText";
import { WHATSAPP_URL } from "@/data/contactsData";
import { assetPath } from "@/utils/assetPath";
import styles from "./HeroSection.module.css";

export default function HeroSection({
  mainTitle = "НАТЯЖНЫЕ ПОТОЛКИ",
  subtitle,
  location = "САНКТ-ПЕТЕРБУРГ И ЛО",
  priceText,
  imageSrc,
  imageAlt = "Натяжные потолки",
  mobileBackgroundImage,
  showSecondButton = false,
  secondButtonText = "ПОДРОБНЕЕ ОБ УСЛУГАХ",
  onSecondButtonClick,
  titleClassName = '',
  showLeftSecondButton = false,
}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  const heroStyle = {
    '--mobile-bg-image': mobileBackgroundImage 
      ? `url('${basePath}${mobileBackgroundImage}')`
      : `url(${assetPath('/images/index/mobile_main.png')})`,
  };

  const heroBeforeStyle = {
    backgroundImage: `url(${assetPath('/images/texture/white_texture.jpg')})`,
  };

  return (
    <div className={styles.hero} style={heroStyle}>
      <div className={styles.heroBackground} style={heroBeforeStyle}></div>
      <div className={styles.heroInner}>
        <p className={styles.brandText}>
          ВДОХНОВЛЯЕМ<br />ПРОСТРАНСТВО <br />КРАСОТОЙ И УЮТОМ
        </p>
        <p className={styles.brandName}>ПИТЕР ПОТОЛОК</p>
        
        <div className={styles.leftSection}>
          <div className={styles.contentContainer}>
            <h1 className={`${styles.title} ${titleClassName}`}>
              {mainTitle}<br />
             {subtitle && <p className={styles.subtitle}><ShinyText text={subtitle} /></p>}
              {location}
            </h1>

            {priceText && <p className={styles.priceText}>{priceText}</p>}

            <div className={styles.buttonsContainer}>
              <CtaButton 
                text="ЗАПИСАТЬСЯ НА ЗАМЕР" 
                href={WHATSAPP_URL}
                ariaLabel="Записаться на замер" 
                className={styles.ctaButton}
              />
              {showLeftSecondButton && (
                <CtaButton 
                  text="ПОДРОБНЕЕ ОБ УСЛУГАХ" 
                  ariaLabel="Подробнее об услугах" 
                  className={styles.ctaButtonReverse}
                  onClick={onSecondButtonClick}
                />
              )}
            </div>
          </div>
        </div>

        <div className={styles.rightSection}>
       
          <Image 
            src={`${basePath}${imageSrc}`}
            alt={imageAlt} 
            fill
            priority 
            quality={90}
            className={styles.image}
            sizes="(max-width: 540px) 100vw, (max-width: 1024px) 50vw, 587px"
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
    </div>
  );
}