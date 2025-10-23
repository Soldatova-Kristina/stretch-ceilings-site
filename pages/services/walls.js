import HeroSection from "@/components/HeroSection/HeroSection";
import SectionLayout from "@/components/SectionLayout/SectionLayout";

export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: "Тихие стены",
        description: "Установка натяжных стен для оригинального дизайна интерьера. Скрытие неровностей, звукоизоляция, уникальный внешний вид.",
        keywords: "натяжные стены, дизайн стен, декоративные стены, отделка стен",
      },
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
      <SectionLayout />
      </>
    );
}
