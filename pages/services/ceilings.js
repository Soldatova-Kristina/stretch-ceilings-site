import HeroSection from "@/components/HeroSection/HeroSection";
import SectionLayout from "@/components/SectionLayout/SectionLayout";
import CeilingGrid from "@/components/CeilingGrid/CeilingGrid";
import { ceilingTypes } from "@/data/ceilingTypes";
import { technologyTypes } from "@/data/technologyTypes";
import { lightTypes } from "@/data/lightTypes";

export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: "Натяжные потолки",
        description: "Установка натяжных потолков любой сложности. Глянцевые, матовые, сатиновые полотна. Быстрый монтаж, доступные цены, гарантия качества.",
        keywords: "натяжные потолки, установка потолков, глянцевые потолки, матовые потолки",
      },
    },
  };
}

export default function Ceilings() {
  return (
    <>
      <div className="containerServices">
        <HeroSection
          title="НАТЯЖНЫЕ ПОТОЛКИ"
          subtitle="ОСВЕЩЕНИЕ"
          city="САНКТ-ПЕТЕРБУРГ И ЛО"
          priceText="СТОИМОСТЬ НАТЯЖНОГО ПОТОЛКА ОТ 1100 РУБЛЕЙ/m²"
          buttonText="ЗАПИСАТЬСЯ НА ЗАМЕР"
          imageSrc="/images/ceilings/hero_ceilings.png"
          imageAlt="Ceilings example"
        />
      </div>

      <SectionLayout
        title="МАТЕРИАЛЫ" 
        subtitle="КАКАЯ ПОВЕРХНОСТЬ ПОДОЙДЕТ ИМЕННО ВАМ?"
      />

      <SectionLayout 
        title="ТИПЫ ПОВЕРХНОСТЕЙ"
        subtitle="КАКИЕ БЫВАЮТ МАТЕРИАЛЫ НАТЯЖНЫХ ПОТОЛКОВ?">
        <CeilingGrid items={ceilingTypes} />
      </SectionLayout>

      <SectionLayout 
        title="ТЕХНОЛОГИИ"
        subtitle="КАК ТЕХНОЛОГИИ МОНТАЖА ВЛИЯЮТ НА ИНТЕРЬЕР?">
        <CeilingGrid items={technologyTypes} />
      </SectionLayout>

      <SectionLayout 
        title="ОСВЕЩЕНИЕ"
        subtitle="КАКИЕ СВЕТОВЫЕ РЕШЕНИЯ ПОДОЙДУТ ВАШЕМУ ИНТЕРЬЕРУ?"> 
        <CeilingGrid items={lightTypes} />
      </SectionLayout>
    </>
  );
}
