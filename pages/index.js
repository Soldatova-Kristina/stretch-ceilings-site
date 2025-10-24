import HeroSection from "@/components/HeroSection/HeroSection";
import SectionLayout from "@/components/SectionLayout/SectionLayout";
import About from "@/components/About/About";
import AdvantagesBlock from "@/components/AdvantagesBlock/AdvantagesBlock";
import ServiceBlock from "@/components/ServiceBlock/ServiceBlock";
import { aboutIndexData } from "@/data/aboutIndex";
import StepsAccordion from "@/components/StepsAccordion/StepsAccordion";
import Seo from "@/components/Seo";
import { homeSeoData } from "@/data/seo/homeSeo";

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
           <div className="containerServices">
             <HeroSection
         title="НАТЯЖНЫЕ ПОТОЛКИ"
         subtitle="ТИХИЕ СТЕНЫ"
         location="САНКТ-ПЕТЕРБУРГ И ЛО"
         imageSrc="/images/index/hero_main.png"
         imageAlt="Натяжные потолки в Санкт-Петербурге - современные решения для вашего интерьера"
         showSecondButton={true}
         secondButtonText="ПОДРОБНЕЕ ОБ УСЛУГАХ"
         onSecondButtonClick={scrollToServices}
       />
           </div>
           <SectionLayout 
                 title="О НАС"
                 backgroundColor={"--color-background-tecnology-and-material"}>
                  <About {...aboutIndexData} />
                 </SectionLayout>
                 
                 <SectionLayout 
                 title="НАШИ ПРЕИМУЩЕТСВА">
                  <AdvantagesBlock />
                 </SectionLayout>

                 <SectionLayout 
                 id="services-section"
                 title="НАШИ УСЛУГИ"
                 backgroundColor={"--color-background-our-services"}>
                  <ServiceBlock />
                  </SectionLayout>

                 <SectionLayout 
                 title="ЭТАПЫ РАБОТЫ"
                 backgroundImage="/images/texture/black_djins.png">
                  <StepsAccordion />
                  </SectionLayout>
                 </>
         );
}
