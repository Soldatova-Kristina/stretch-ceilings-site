import HeroSection from "@/components/HeroSection/HeroSection";
import SectionLayout from "@/components/SectionLayout/SectionLayout";
import About from "@/components/About/About";
import AdvantagesBlock from "@/components/AdvantagesBlock/AdvantagesBlock";
import ServiceBlock from "@/components/ServiceBlock/ServiceBlock";
import { aboutIndexData } from "@/data/aboutIndex";
import StepsAccordion from "@/components/StepsAccordion/StepsAccordion";
import Seo from "@/components/Seo";
import { homeSeoData } from "@/data/seo/homeSeo";
import dynamic from 'next/dynamic'
import styles from '@/styles/Home.module.css';
const LightRays = dynamic(() => import('@/components/LightRays/LightRays'), { ssr: false })

export async function getStaticProps() {
  return {
    props: {
      seoData: homeSeoData,
    },
  };
}

export default function Home({ seoData }) {
    const scrollToServices = () => {
      const servicesSection = document.getElementById('services-section');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    return (
      <>
           <Seo {...seoData} />
           {/* Hero Section */}
           <section aria-label="Главная секция">
               <HeroSection
                 mainTitle="НАТЯЖНЫЕ ПОТОЛКИ"
                 subtitle="ТИХИЕ СТЕНЫ"
                 location="САНКТ-ПЕТЕРБУРГ И ЛО"
                 imageSrc="/images/index/hero_main.png"
                 imageAlt="Натяжные потолки в Санкт-Петербурге - современные решения для вашего интерьера"
                 showSecondButton={true}
                 secondButtonText="ПОДРОБНЕЕ ОБ УСЛУГАХ"
                 onSecondButtonClick={scrollToServices}
                 titleClassName={styles.indexHeroTitle}
               />
           </section>

           <section aria-label="О компании">
             <SectionLayout 
               title="О НАС"
               backgroundColor={"--color-background-tecnology-and-material"}>
                <About {...aboutIndexData} />
             </SectionLayout>
           </section>
             
           <section aria-label="Наши преимущества">
             <SectionLayout 
               title="НАШИ ПРЕИМУЩЕСТВА">
                <AdvantagesBlock />
             </SectionLayout>
           </section>

       <section aria-label="Наши услуги" style={{ position: 'relative', overflow: 'hidden' }}>
  <SectionLayout
    id="services-section"
    title="НАШИ УСЛУГИ"
  >
    <ServiceBlock />
  </SectionLayout>
</section>

           <section aria-label="Этапы работы">
             <SectionLayout 
               title="ЭТАПЫ РАБОТЫ"
               backgroundImage="/images/texture/black_djins.png">
                <StepsAccordion />
             </SectionLayout>
           </section>
      </>
    );
}


  {/* <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
      />
    </div> */}