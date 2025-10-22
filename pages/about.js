import HeroSection from "@/components/HeroSection/HeroSection";

export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: "О нас",
        description: "Узнайте больше о нашей компании. Мы специализируемся на установке натяжных потолков и стен с 2014 года. Опытная команда, качественные материалы.",
        keywords: "о компании, натяжные потолки, опыт работы, команда",
      },
    },
  };
}

export default function About() {
       return (
         <div className="containerServices">
           <HeroSection
       title="НАТЯЖНЫЕ ПОТОЛКИ"
       subtitle="ТИХИЕ СТЕНЫ"
       city="САНКТ-ПЕТЕРБУРГ И ЛО"
       priceText="СТОИМОСТЬ ТИХИХ СТЕН ОТ 4500 РУБЛЕЙ*"
       buttonText="ЗАПИСАТЬСЯ НА ЗАМЕР"
       imageSrc="/images/ceilings/hero_ceilings.png"
       imageAlt="Ceilings example"
     />
         </div>
       );
}
