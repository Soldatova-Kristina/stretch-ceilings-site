import HeroSection from "@/components/HeroSection/HeroSection";

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
    <div className="containerServices">
      <HeroSection
  title="НАТЯЖНЫЕ ПОТОЛКИ"
  subtitle="ОСВЕЩЕНИЕ"
  city="САНКТ-ПЕТЕРБУРГ И ЛО"
  priceText="СТОИМОСТЬ НАТЯЖНОГО ПОТОЛКА ОТ 1100 РУБЛЕЙ/м²"
  buttonText="ЗАПИСАТЬСЯ НА ЗАМЕР"
  imageSrc="/images/ceilings/hero_ceilings.png"
  imageAlt="Ceilings example"
/>
    </div>
  );
}
