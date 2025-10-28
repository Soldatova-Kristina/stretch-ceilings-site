import HeroSection from "@/components/HeroSection/HeroSection";
import SectionLayout from "@/components/SectionLayout/SectionLayout";
import About from "@/components/About/About";
import BeforeAfter from "@/components/BeforeAfter/BeforeAfter";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import TextileFeatures from "@/components/TextileFeatures/TextileFeatures";
import FinishingComparison from "@/components/FinishingComparison/FinishingComparison";
import Seo from "@/components/Seo";
import { aboutWallsData } from "@/data/aboutWalls";
import { wallsPortfolioData } from "@/data/wallsPortfolioData";
import { wallsSeoData } from "@/data/seo/wallsSeo";
import { beforeAfterData } from "@/data/beforeAfterData";

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
            <div style={{ paddingLeft: "20px", textAlign: "start", paddingTop: "30px", color: "white" }}>
              <h2 style={{ fontFamily: 'var(--font-family-regular)', fontSize: '25px', marginBottom: '35px', color: '#fff' }}>
                {beforeAfterData.title}
              </h2>
              <p style={{ fontFamily: 'var(--font-family-light)', fontSize: '16px', marginBottom: '40px', padding: '0 20px' }}>
                {beforeAfterData.text}
              </p>
            </div>
            <BeforeAfter
              beforeSrc={beforeAfterData.beforeImage}
              afterSrc={beforeAfterData.afterImage}
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
          </SectionLayout>
        </section>
      </>
    );
}
