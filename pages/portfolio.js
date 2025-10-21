// pages/portfolio.js
import Seo from '@/components/Seo';
import Image from 'next/image';
import { useState } from 'react';
import CtaButton from '@/components/CtaButton/CtaButton';
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
          width={481}
          height={361}
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
      address: 'ЖК «Квартал Che", Ул. Черниговская, 17',
      description: 'Произведен монтаж теневого профиля EURO 05 по всему периметру квартиры. Натянуто полотно HALEAD. Установлены встраиваемые карнизы FLEXY GARDINA. В качестве основного освещения заказчик выбрал накладные треки',
      slug: 'metropolis-office'
    }
    , 
    {
      id: 4,
      images: [
        '/images/portfolio/4/1.jpg',
        '/images/portfolio/4/2.jpg',
        '/images/portfolio/4/3.jpg',
        '/images/portfolio/4/4.jpg',
        '/images/portfolio/4/5.jpg',
        '/images/portfolio/4/6.jpg',
        '/images/portfolio/4/7.jpg',
        '/images/portfolio/4/8.jpg',
        '/images/portfolio/4/9.jpg',

      ],
      address: 'ЖК «Черная Речка», Ул. Белоостровская, 10к1',
      description: 'Выполнили дизайнерский объект. Весь профиль: теневой EUROKRAAB и парящий FLEXY FLY. Полотно BAUF. В качестве основного освещения по проекту установили световые линии ARLIGHT, магнитный трек со светильниками компании DENKIRS, а так же точечные сдвоенные светильники компании MAYTONI. Закарнизная часть выполнена из нишевого профиля компании LUMFER',
      slug: 'metropolis-office'
    }
  ];

  // Structured Data for Portfolio/Image Gallery (enhances visual search and rich snippets)
  const baseUrl = 'https://piterpotolok.ru';
  
  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Портфолио работ по установке натяжных потолков",
    "description": "Примеры реализованных проектов натяжных потолков в Санкт-Петербурге: квартиры, дома, коммерческие помещения. Фото работ с описанием.",
    "url": `${baseUrl}/portfolio`,
    "publisher": {
      "@type": "Organization",
      "name": "Питер Потолок",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/icons/logo.svg`
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": portfolioItems.length,
      "itemListElement": portfolioItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "name": item.address,
          "description": item.description,
          "image": item.images.map(img => `${baseUrl}${img}`),
          "creator": {
            "@type": "Organization",
            "name": "Питер Потолок"
          }
        }
      }))
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Главная",
          "item": baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Портфолио",
          "item": `${baseUrl}/portfolio`
        }
      ]
    }
  });

  return {
    props: {
      seo: {
        title: "Портфолио работ",
        description: "Портфолио натяжных потолков в СПб: фото реализованных проектов в квартирах и домах. Примеры работ с теневыми профилями, световыми линиями. Питер Потолок.",
        keywords: "портфолио натяжные потолки, фото потолков СПб, примеры работ Санкт-Петербург, наши проекты, реализованные объекты, галерея работ",
        ogImage: '/images/portfolio/1/1.jpg',
        structuredData,
      },
      portfolioItems,
    },
    revalidate: 3600,
  };
}

export default function Portfolio({ seo, portfolioItems }) {
  return (
    <>
      <Seo {...seo} />

      <section className={styles.gallery} itemScope itemType="https://schema.org/CollectionPage">
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Примеры наших работ</h1>
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

          <div className={styles.grid} itemScope itemType="https://schema.org/ItemList">
            {portfolioItems.map((item, index) => (
              <article 
                key={item.id} 
                className={styles.card}
                itemScope 
                itemType="https://schema.org/CreativeWork"
                itemProp="itemListElement"
              >
                <meta itemProp="position" content={String(index + 1)} />
                <div className={styles.cardContent}>
                  <div className={styles.textBlock}>
                    <h2 className={styles.address} itemProp="name">{item.address}</h2>
                    <p className={styles.description} itemProp="description">{item.description}</p>
                    <meta itemProp="creator" content="Питер Потолок" />
                    <CtaButton text="УЗНАТЬ ПОДРОБНЕЕ" ariaLabel="Узнать подробнее в Telegram" />
                  </div>
                  <div className={styles.imageBlock} itemProp="image">
                    <ImageSlider images={item.images} address={item.address} itemId={item.id} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}