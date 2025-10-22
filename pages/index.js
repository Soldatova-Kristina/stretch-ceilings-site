import styles from "@/styles/Home.module.css";
import HeroSection from "@/components/HeroSection/HeroSection";

export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: "Главная",
        description: "Профессиональная установка натяжных потолков и стен. Качественные материалы, опытные мастера, доступные цены. Бесплатный замер и консультация.",
        keywords: "натяжные потолки, натяжные стены, установка потолков, ремонт, дизайн интерьера",
      },
    },
  };
}

export default function Home() {
    return (
           <div className="containerServices">
             <HeroSection
         title="НАТЯЖНЫЕ ПОТОЛКИ"
         subtitle="ТИХИЕ СТЕНЫ"
         city="САНКТ-ПЕТЕРБУРГ И ЛО"
         buttonText="ЗАПИСАТЬСЯ НА ЗАМЕР"
         imageSrc="/images/main/hero_main.png"
         imageAlt="Ceilings example"
       />
           </div>
         );
}
