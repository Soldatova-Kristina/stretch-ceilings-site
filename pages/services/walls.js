import HeroSection from "@/components/HeroSection/HeroSection";
import SectionLayout from "@/components/SectionLayout/SectionLayout";
import About from "@/components/About/About";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import TextileFeatures from "@/components/TextileFeatures/TextileFeatures";
import FinishingComparison from "@/components/FinishingComparison/FinishingComparison";
import { aboutWallsData } from "@/data/aboutWalls";
import { wallsPortfolioData } from "@/data/wallsPortfolioData";
import { wallsSeoData } from "@/data/seo/wallsSeo";

export async function getStaticProps() {
  return {
    props: {
      seo: wallsSeoData,
    },
  };
}

export default function Walls() {
    return (
      <>
      <div className="containerServices">
        <HeroSection
    mainTitle="АРХИТЕКТУРНЫЙ ТЕКСТИЛЬ"
    subtitle="ТИХИЕ СТЕНЫ"
    city="САНКТ-ПЕТЕРБУРГ И ЛО"
    priceText="СТОИМОСТЬ ТИХИХ СТЕН ОТ 4500 РУБЛЕЙ/м²"
    buttonText="ЗАПИСАТЬСЯ НА ЗАМЕР"
    imageSrc="/images/walls/hero_walls.png"
    imageAlt="Ceilings example"
  />
      </div>
      <SectionLayout 
      title="О ТЕХНОЛОГИИ"
      backgroundColor={"--color-background-tecnology-and-material"}>
        <About {...aboutWallsData} />
      </SectionLayout>
      
      <SectionLayout 
      title="ПРЕИМУЩЕСТВА ТЕХНОЛОГИИ"
      backgroundImage="/images/walls/features_background.jpg"
      backgroundOpacity={0.35}>
      <TextileFeatures />
      </SectionLayout>

      <SectionLayout 
      title="СРАВНЕНИЕ ЭТАПОВ"
      backgroundColor={"--color-background-comparison"}>
       <FinishingComparison />
        </SectionLayout>

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
      </>
    );
}
