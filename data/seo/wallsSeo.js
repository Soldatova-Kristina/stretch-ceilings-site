import { createServiceSchema, organizationData, geoData } from './seoConfig';

const wallsOfferCatalog = {
  "@type": "OfferCatalog",
  "name": "Типы отделки тихих стен архитектурным текстилем",
  "itemListElement": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Акустический текстиль для стен",
        "description": "Специальный акустический текстиль для эффективного звукопоглощения и улучшения акустики помещения"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Архитектурный текстиль премиум",
        "description": "Премиальный архитектурный текстиль для стен с повышенными декоративными и акустическими свойствами"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Тканевая отделка стен",
        "description": "Тканевая отделка стен с эффектом шумоизоляции и современным дизайном"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Текстильные стеновые панели",
        "description": "Современные текстильные панели для стен с быстрым монтажом"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Натяжные стены с подсветкой",
        "description": "Натяжные стены из архитектурного текстиля со встроенной подсветкой"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Текстиль с фотопечатью",
        "description": "Архитектурный текстиль с индивидуальной фотопечатью для уникального дизайна"
      }
    }
  ]
};

const wallsServiceSchema = createServiceSchema({
  serviceName: "Установка тихих стен из архитектурного текстиля",
  description: "Профессиональная установка тихих стен в Санкт-Петербурге и ЛО. Архитектурный текстиль для звукоизоляции, современный дизайн, быстрый монтаж без пыли и грязи.",
  serviceType: "Тихие стены, натяжные стены, архитектурный текстиль",
  price: 4500,
  priceUnit: "м²",
  offerCatalog: wallsOfferCatalog
});

const wallsStructuredData = [
  wallsServiceSchema,
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Что такое тихие стены?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Тихие стены — это инновационная технология отделки стен архитектурным текстилем, которая обеспечивает качественное звукопоглощение, улучшает акустику помещения и создает современный эстетичный вид интерьера."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько времени занимает установка тихих стен?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Установка тихих стен из архитектурного текстиля занимает всего 1 день, что в 10 раз быстрее традиционной отделки стен, которая требует около 10 дней."
        }
      },
      {
        "@type": "Question",
        "name": "Какая стоимость установки тихих стен?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стоимость установки тихих стен из архитектурного текстиля в Санкт-Петербурге начинается от 4500 рублей за квадратный метр. Цена включает материалы и монтаж."
        }
      },
      {
        "@type": "Question",
        "name": "Какие преимущества у тихих стен?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Тихие стены обладают множеством преимуществ: эффективное звукопоглощение и улучшение акустики, быстрый монтаж без пыли за 1 день, долговечность материала, возможность интеграции с освещением, гипоаллергенность и безопасность."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли установить тихие стены в любом помещении?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, тихие стены из архитектурного текстиля подходят для любых помещений: квартир, домов, офисов, коммерческих пространств. Материал адаптируется к помещениям с любыми архитектурными особенностями."
        }
      }
    ]
  },
  
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": "https://piterpotolok.ru"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Услуги",
        "item": "https://piterpotolok.ru/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Тихие стены",
        "item": "https://piterpotolok.ru/services/walls"
      }
    ]
  },
  
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Тихие стены из архитектурного текстиля",
    "description": "Установка тихих стен - современная альтернатива традиционной отделке. Архитектурный текстиль обеспечивает звукоизоляцию, улучшает акустику и создает уникальный дизайн. Монтаж за 1 день без пыли и грязи.",
    "brand": organizationData,
    "offers": {
      "@type": "Offer",
      "url": "https://piterpotolok.ru/services/walls",
      "priceCurrency": "RUB",
      "price": "4500",
      "priceValidUntil": "2025-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": organizationData,
      "areaServed": geoData
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "ratingCount": "127"
    }
  }
];

export const wallsSeoData = {
  title: "Тихие стены в СПб и ЛО от 4500 ₽/м² | Архитектурный текстиль для стен",
  description: "Установка тихих стен из архитектурного текстиля в Санкт-Петербурге ⭐ Звукоизоляция и улучшение акустики ⭐ Монтаж за 1 день без пыли ⭐ Гипоаллергенный материал ⭐ Современный дизайн ⭐ Цены от 4500 ₽/м²",
  keywords: "тихие стены, тихие стены спб, архитектурный текстиль, натяжные стены, текстильные стены, звукоизоляция стен, акустические стены, отделка стен текстилем, установка тихих стен, тканевые стены, стеновые панели, звукопоглощающие стены, акустический текстиль, декоративный текстиль для стен, быстрая отделка стен, монтаж стен за 1 день, стены без пыли, архитектурный текстиль санкт-петербург, тихие стены цена, современная отделка стен",
  ogTitle: "Тихие стены из архитектурного текстиля — монтаж за 1 день",
  ogDescription: "Установка тихих стен в СПб и ЛО. Звукоизоляция, улучшение акустики, быстрый монтаж. Цены от 4500 ₽/м². Гарантия качества.",
  ogImage: "/images/walls/og-walls.webp",
  ogType: "website",
  canonicalUrl: "https://piterpotolok.ru/services/walls",
  structuredData: wallsStructuredData.map(schema => JSON.stringify(schema)),

  additionalMeta: [
    { name: "geo.region", content: "RU-SPE" },
    { name: "geo.placename", content: "Санкт-Петербург" },
    { name: "geo.position", content: "59.9311;30.3609" },
    { name: "ICBM", content: "59.9311, 30.3609" },
    { property: "article:author", content: "Питер Потолок" },
    { property: "article:publisher", content: "https://piterpotolok.ru" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Тихие стены из архитектурного текстиля — монтаж за 1 день" },
    { name: "twitter:description", content: "Установка тихих стен в СПб и ЛО. Звукоизоляция, улучшение акустики, быстрый монтаж. Цены от 4500 ₽/м²." },
    { name: "twitter:image", content: "/images/walls/og-walls.webp" },
  ]
};
