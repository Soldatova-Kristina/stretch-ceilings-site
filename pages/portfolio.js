// pages/portfolio.js
import Head from 'next/head';
import Image from 'next/image';
import PageTitle from '@/components/PageTitle/PageTitle';
import { useState } from 'react';
import styles from './portfolio.module.css';

const ImageSlider = ({ images, address }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.imageWrapper}>
        <Image 
          src={images[currentIndex]} 
          alt={`${address} - фото ${currentIndex + 1}`}
          width={474}
          height={372}
          className={styles.image}
          quality={90}
          loading="lazy"
        />
      </div>

      {images.length > 1 && (
        <>
          <button 
            onClick={goToPrevious}
            className={`${styles.sliderButton} ${styles.sliderButtonPrev}`}
            aria-label="Предыдущее фото"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button 
            onClick={goToNext}
            className={`${styles.sliderButton} ${styles.sliderButtonNext}`}
            aria-label="Следующее фото"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className={styles.sliderDots}>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                aria-label={`Перейти к фото ${index + 1}`}
              />
            ))}
          </div>

          <div className={styles.sliderCounter}>
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
};

export async function getStaticProps() {
  const portfolioItems = [
    {
      id: 1,
      images: [
        '/images/portfolio/1/1.jpg',
        '/images/portfolio/1/2.jpg',
        '/images/portfolio/1/3.jpg',
        '/images/portfolio/1/4.jpg',
        '/images/portfolio/1/5.jpg',
      ],
      address: 'ЖК «MODUM», Авиаконструкторов, 54',
      description: 'Был выполнен монтаж всей евродвушки. Заказчиком выбран стандартный профиль с полотнами BAUF. В качестве основного освещения были использованы световые линии, накладные треки и точечные светильники в ванной комнате. А так же выполнены карнизные ниши с подсветкой. Данное решение в натяжных потолках помогло подчеркнуть дизайн-интерьер во всей квартире, а так же сделало ее более уютной.',
      slug: 'novye-gorizonty'
    },
    {
      id: 2,
      images: [
        '/images/portfolio/2/1.jpg',
        '/images/portfolio/2/2.jpg',
        '/images/portfolio/2/3.jpg',
        '/images/portfolio/2/4.jpg',
        '/images/portfolio/2/5.jpg',
        '/images/portfolio/2/6.jpg',
      ],
      address: 'ЖК «ПОЛИС 2», Ул. Арцеуловская аллея, 9',
      description: 'Произвели монтаж теневого профиля FLEXY EURO 05 по всему периметру евродвушки. Натянули полотно MSD PREMIUM. Смонтировали черные встраиваемые карнизы FLEXY GARDINA. В качестве основного освещения использовали точечные двойные светильники MAYTONI, люстра STLUCE, а так же магнитный трек с линейными светильниками от компании LUMFER',
      slug: 'rublevka-house'
    },
    {
      id: 3,
      images: [
        '/images/portfolio/3/che_1.jpg',
        '/images/portfolio/3/che_2.jpg',
        '/images/portfolio/3/che_3.jpg',
        '/images/portfolio/3/che_4.jpg',
        '/images/portfolio/3/che_5.jpg',
      ],
      address: 'ЖК «Квартал Che”, Ул. Черниговская, 17',
      description: 'Произведен монтаж теневого профиля EURO 05 по всему периметру квартиры. Натянуто полотно HALEAD. Установлены встраиваемые карнизы FLEXY GARDINA. В качестве основного освещения заказчик выбрал накладные треки',
      slug: 'metropolis-office'
    }
    , 
    {
      id: 4,
      images: [
          '/images/portfolio/2/2.jpg',
        '/images/portfolio/2/3.jpg',
        '/images/portfolio/2/4.jpg',
        '/images/portfolio/2/5.jpg',
        '/images/portfolio/2/6.jpg',
        '/images/portfolio/2/7.jpg',
        '/images/portfolio/2/8.jpg',
        '/images/portfolio/2/9.jpg',

      ],
      address: 'ЖК «Черная Речка», Ул. Белоостровская, 10к1',
      description: 'Выполнили дизайнерский объект. Весь профиль: теневой EUROKRAAB и парящий FLEXY FLY. Полотно BAUF. В качестве основного освещения по проекту установили световые линии ARLIGHT, магнитный трек со светильниками компании DENKIRS, а так же точечные сдвоенные светильники компании MAYTONI. Закарнизная часть выполнена из нишевого профиля компании LUMFER',
      slug: 'metropolis-office'
    }
  ];

  return {
    props: {
      seo: {
        title: "Портфолио — Примеры наших работ | Натяжные потолки",
        description: "Примеры наших работ по установке натяжных потолков и стен. Реализованные проекты в квартирах, домах и коммерческих помещениях.",
        keywords: "портфолио, примеры работ, фото потолков, наши проекты, натяжные потолки фото",
      },
      portfolioItems,
    },
    revalidate: 3600,
  };
}

export default function Portfolio({ seo, portfolioItems }) {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
      </Head>

      <section className={styles.gallery}>
        <div className={styles.header}>
          <PageTitle>Примеры наших работ</PageTitle>
          <a 
            href="https://t.me/piterpotolok"
            className={styles.moreButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            БОЛЬШЕ РАБОТ ТУТ
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path 
                d="M4 10H16M16 10L11 5M16 10L11 15" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className={styles.grid}>
          {portfolioItems.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.textBlock}>
                  <h2 className={styles.address}>{item.address}</h2>
                  <p className={styles.description}>{item.description}</p>
                  <a
                    href="https://t.me/piterpotolok"
                    className={styles.ctaButton}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Узнать подробнее в Telegram"
                  >
                    <span className={styles.ctaText}>УЗНАТЬ ПОДРОБНЕЕ</span>
                    <svg className={styles.ctaArrow} width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M37.5303 6.53033C37.8232 6.23744 37.8232 5.76256 37.5303 5.46967L32.7574 0.696699C32.4645 0.403806 31.9896 0.403806 31.6967 0.696699C31.4038 0.989593 31.4038 1.46447 31.6967 1.75736L35.9393 6L31.6967 10.2426C31.4038 10.5355 31.4038 11.0104 31.6967 11.3033C31.9896 11.5962 32.4645 11.5962 32.7574 11.3033L37.5303 6.53033ZM0 6.75H37V5.25H0V6.75Z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
                <div className={styles.imageBlock}>
                  <ImageSlider images={item.images} address={item.address} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}