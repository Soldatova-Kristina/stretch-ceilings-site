import HeroSection from "@/components/HeroSection/HeroSection";
import SectionLayout from "@/components/SectionLayout/SectionLayout";
import TechnologySection from "@/components/TechnologySection/TechnologySection";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import TextileFeatures from "@/components/TextileFeatures/TextileFeatures";
import FinishingComparison from "@/components/FinishingComparison/FinishingComparison";
import Seo from "@/components/Seo";
import { wallsPortfolioData } from "@/data/wallsPortfolioData";
import { wallsSeoData } from "@/data/seo/wallsSeo";
import { beforeAfterData } from "@/data/beforeAfterData";
import { TELEGRAM_URL } from "@/data/contactsData";
import styles from './walls.module.css';

export async function getStaticProps() {
  return {
    props: {
      seoData: wallsSeoData,
    },
  };
}

export default function Walls({ seoData }) {
    return (
      <>
        <Seo {...seoData} />
        {/* Hero Section */}
        <section aria-label="Главная секция">
            <HeroSection
              mainTitle="АРХИТЕКТУРНЫЙ ТЕКСТИЛЬ"
              subtitle="ТИХИЕ СТЕНЫ"
              location="САНКТ-ПЕТЕРБУРГ И ЛО"
              priceText="СТОИМОСТЬ ТИХИХ СТЕН ОТ 4500 РУБЛЕЙ/м²"
              imageSrc="/images/walls/hero_walls.png"
              imageAlt="Архитектурный текстиль и тихие стены в Санкт-Петербурге"
              mobileBackgroundImage="/images/walls/hero_walls.png"
            />
        </section>

        <section aria-label="О технологии тихих стен">
          <SectionLayout 
            title="О ТЕХНОЛОГИИ"
            backgroundColor={"--color-background-tecnology-and-material"}>
            <TechnologySection
              title={beforeAfterData.title}
              text={beforeAfterData.text}
              subtextTitle={beforeAfterData.subtextTitle}
              subtext={beforeAfterData.subtext}
              beforeImage={beforeAfterData.beforeImage}
              afterImage={beforeAfterData.afterImage}
            />
          </SectionLayout>
        </section>
          
        <section aria-label="Преимущества технологии">
          <SectionLayout 
            title="ПРЕИМУЩЕСТВА ТЕХНОЛОГИИ"
            backgroundImage="/images/walls/features_background.jpg"
            backgroundOpacity={0.35}>
              <TextileFeatures />
          </SectionLayout>
        </section>

        <section aria-label="Сравнение этапов работы">
          <SectionLayout 
            title="СРАВНЕНИЕ ЭТАПОВ"
            backgroundColor={"--color-background-comparison"}>
              <FinishingComparison />
          </SectionLayout>
        </section>

        <section aria-label="Примеры наших работ">
          <SectionLayout 
            title="ПРИМЕРЫ РАБОТ"
            backgroundImage="/images/texture/black_djins.png">
              <ImageSlider 
                images={wallsPortfolioData.images}
                address={wallsPortfolioData.address}
                width={1480}
                height={654}
              />
              <a 
                href={TELEGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.moreWorksButton}
              >
                БОЛЬШЕ РАБОТ
              </a>
          </SectionLayout>
        </section>
      </>
    );
}
