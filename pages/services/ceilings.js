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
      seo: ceilingsSeoData,
    },
  };
}

export default function Ceilings({ seo }) {
  return (
    <>
      <Seo {...seo} />
      
      <div className="containerServices">
        <HeroSection
          title="НАТЯЖНЫЕ ПОТОЛКИ"
          subtitle="ОСВЕЩЕНИЕ"
          city="САНКТ-ПЕТЕРБУРГ И ЛО"
          priceText="СТОИМОСТЬ НАТЯЖНОГО ПОТОЛКА ОТ 1100 РУБЛЕЙ/м²"
          buttonText="ЗАПИСАТЬСЯ НА ЗАМЕР"
          imageSrc="/images/ceilings/hero_ceilings.png"
          imageAlt="Натяжные потолки - примеры работ в Санкт-Петербурге"
        />
      </div>

      <SectionLayout 
      title="МАТЕРИАЛЫ" 
      subtitle="КАКАЯ ПОВЕРХНОСТЬ ПОДОЙДЕТ ИМЕННО ВАМ?"
      secondSubtitle="Для натяжных потолков используется два основных материала — ПВХ-плёнка и тканевые полотна"
      backgroundColor="--color-background-tecnology-and-material">
        <MaterialsPreview />
      </SectionLayout>

      <SectionLayout title="ТИПЫ ПОВЕРХНОСТЕЙ" subtitle="КАКИЕ БЫВАЮТ МАТЕРИАЛЫ НАТЯЖНЫХ ПОТОЛКОВ?">
        <CeilingGrid items={ceilingTypes} />
      </SectionLayout>

      <SectionLayout title="ТЕХНОЛОГИИ" subtitle="КАК ТЕХНОЛОГИИ МОНТАЖА ВЛИЯЮТ НА ИНТЕРЬЕР?">
        <CeilingGrid items={technologyTypes} />
      </SectionLayout>

      <SectionLayout 
      title="ОСВЕЩЕНИЕ" 
      subtitle="КАКИЕ СВЕТОВЫЕ РЕШЕНИЯ ПОДОЙДУТ ВАШЕМУ ИНТЕРЬЕРУ?"
      backgroundColor="--color-background-light">
        <CeilingGrid items={lightTypes} />
      </SectionLayout>
    </>
  );
}
