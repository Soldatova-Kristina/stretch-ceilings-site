import HeroSection from "@/components/HeroSection/HeroSection";
import SectionLayout from "@/components/SectionLayout/SectionLayout";
import CeilingGrid from "@/components/CeilingGrid/CeilingGrid";
import MaterialsPreview from "@/components/MaterialsPreview/MaterialsPreview";
import Seo from "@/components/Seo";
import { ceilingTypes } from "@/data/ceilingTypes";
import { technologyTypes } from "@/data/technologyTypes";
import { lightTypes } from "@/data/lightTypes";
import { ceilingsSeoData } from "@/data/seo/ceilingsSeo";

export async function getStaticProps() {
  return {
    props: {
      seoData: ceilingsSeoData,
    },
  };
}

export default function Ceilings({ seoData }) {
  return (
    <>
      <Seo {...seoData} />
      {/* Hero Section */}
      <section aria-label="Главная секция">
          <HeroSection
            mainTitle="НАТЯЖНЫЕ ПОТОЛКИ"
            subtitle="ОСВЕЩЕНИЕ"
            location="САНКТ-ПЕТЕРБУРГ И ЛО"
            priceText="СТОИМОСТЬ НАТЯЖНОГО ПОТОЛКА ОТ 1100 РУБЛЕЙ/м²"
            imageSrc="/images/ceilings/hero_ceilings.webp"
            imageAlt="Натяжные потолки - примеры работ в Санкт-Петербурге"
            mobileBackgroundImage="/images/ceilings/hero_ceilings.webp"
          />
      </section>

      <section aria-label="Материалы для натяжных потолков">
        <SectionLayout 
          title="МАТЕРИАЛЫ" 
          subtitle="КАКАЯ ПОВЕРХНОСТЬ ПОДОЙДЕТ ИМЕННО ВАМ?"
          secondSubtitle="Для натяжных потолков используется два основных материала — ПВХ-плёнка и тканевые полотна"
          backgroundColor="--color-background-tecnology-and-material">
            <MaterialsPreview />
        </SectionLayout>
      </section>

      <section aria-label="Типы поверхностей натяжных потолков">
        <SectionLayout 
          title="ТИПЫ ПОВЕРХНОСТЕЙ" 
          subtitle="КАКИЕ БЫВАЮТ МАТЕРИАЛЫ НАТЯЖНЫХ ПОТОЛКОВ?">
            <CeilingGrid items={ceilingTypes} />
        </SectionLayout>
      </section>

      <section aria-label="Технологии монтажа натяжных потолков">
        <SectionLayout 
          title="ТЕХНОЛОГИИ" 
          subtitle="КАК ТЕХНОЛОГИИ МОНТАЖА ВЛИЯЮТ НА ИНТЕРЬЕР?">
            <CeilingGrid items={technologyTypes} />
        </SectionLayout>
      </section>

      <section aria-label="Освещение для натяжных потолков">
        <SectionLayout 
          title="ОСВЕЩЕНИЕ" 
          subtitle="КАКИЕ СВЕТОВЫЕ РЕШЕНИЯ ПОДОЙДУТ ВАШЕМУ ИНТЕРЬЕРУ?"
          backgroundColor="--color-background-light">
            <CeilingGrid items={lightTypes} />
        </SectionLayout>
      </section>
    </>
  );
}
