import { createOrganizationSchema } from './seoConfig';

const organizationSchema = createOrganizationSchema({
  "@type": "OfferCatalog",
  "name": "Услуги по установке натяжных потолков и стен",
  "itemListElement": [
    {
      "@type": "OfferCatalog",
      "name": "Натяжные потолки",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Матовые натяжные потолки",
            "description": "Классические матовые потолки - идеально ровная поверхность"
          },
          "price": "1100",
          "priceCurrency": "RUB",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "1100",
            "priceCurrency": "RUB",
            "unitText": "м²"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Глянцевые натяжные потолки",
            "description": "Глянцевые потолки для визуального увеличения пространства"
          },
          "price": "1200",
          "priceCurrency": "RUB",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "1200",
            "priceCurrency": "RUB",
            "unitText": "м²"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Сатиновые натяжные потолки",
            "description": "Сатиновые потолки с мягким отражением света"
          },
          "price": "1150",
          "priceCurrency": "RUB",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "1150",
            "priceCurrency": "RUB",
            "unitText": "м²"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Тканевые натяжные потолки",
            "description": "Премиальные тканевые потолки премиального качества"
          },
          "price": "1800",
          "priceCurrency": "RUB",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "1800",
            "priceCurrency": "RUB",
            "unitText": "м²"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Двухуровневые натяжные потолки",
            "description": "Многоуровневые конструкции для зонирования и дизайна"
          },
          "price": "1500",
          "priceCurrency": "RUB",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "1500",
            "priceCurrency": "RUB",
            "unitText": "м²"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Парящие потолки со светодиодной подсветкой",
            "description": "Потолки с эффектом парения и LED-подсветкой"
          },
          "price": "1600",
          "priceCurrency": "RUB",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "1600",
            "priceCurrency": "RUB",
            "unitText": "м²"
          }
        }
      ]
    },
    {
      "@type": "OfferCatalog",
      "name": "Тихие стены",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Установка тихих стен",
            "description": "Текстильные стены для звукоизоляции и дизайна интерьера"
          },
          "price": "1400",
          "priceCurrency": "RUB",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "1400",
            "priceCurrency": "RUB",
            "unitText": "м²"
          }
        }
      ]
    }
  ]
});

// WebSite Schema - для поисковой строки Google
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://piterpotolok.ru/#website",
  "url": "https://piterpotolok.ru",
  "name": "Питер Потолок",
  "description": "Натяжные потолки и тихие стены в Санкт-Петербурге",
  "publisher": {
    "@id": "https://piterpotolok.ru/#organization"
  },
  "inLanguage": "ru-RU",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://piterpotolok.ru/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Главная",
      "item": "https://piterpotolok.ru"
    }
  ]
};

// WebPage Schema - для главной страницы
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://piterpotolok.ru/#webpage",
  "url": "https://piterpotolok.ru",
  "name": "Натяжные потолки и тихие стены в СПб | Питер Потолок",
  "description": "Профессиональная установка натяжных потолков и тихих стен в Санкт-Петербурге и ЛО. Цены от 1100 ₽/м². Бесплатный замер. Опытные мастера. Звоните!",
  "isPartOf": {
    "@id": "https://piterpotolok.ru/#website"
  },
  "about": {
    "@id": "https://piterpotolok.ru/#organization"
  },
  "inLanguage": "ru-RU",
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://piterpotolok.ru/images/main/hero_main.webp"
  },
  "breadcrumb": {
    "@id": "https://piterpotolok.ru/#breadcrumb"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Сколько стоит установка натяжного потолка в Санкт-Петербурге?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Стоимость установки натяжного потолка в СПб начинается от 1100 ₽ за м² для матовых полотен. Цена зависит от типа материала, площади помещения и сложности конструкции. Глянцевые потолки - от 1200 ₽/м², тканевые - от 1800 ₽/м², двухуровневые - от 1500 ₽/м²."
      }
    },
    {
      "@type": "Question",
      "name": "За какой срок устанавливаются натяжные потолки?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Стандартный монтаж натяжного потолка в одной комнате занимает 3-4 часа. Для сложных многоуровневых конструкций может потребоваться от 6 до 8 часов. Работы выполняются за один день без строительного мусора и пыли."
      }
    },

    {
      "@type": "Question",
      "name": "В каких районах Санкт-Петербурга вы работаете?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Мы выполняем установку натяжных потолков во всех районах Санкт-Петербурга: Центральный, Адмиралтейский, Василеостровский, Выборгский, Калининский, Кировский, Колпинский, Красногвардейский, Красносельский, Кронштадтский, Курортный, Московский, Невский, Петроградский, Петродворцовый, Приморский, Пушкинский, Фрунзенский районы, а также в Ленинградской области."
      }
    },
    {
      "@type": "Question",
      "name": "Что такое тихие стены и для чего они нужны?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Тихие стены - это текстильные панели, устанавливаемые на стены для улучшения звукоизоляции помещения и создания уютного интерьера. Они поглощают до 70% шума, предотвращают эхо, скрывают неровности стен и легко монтируются. Идеально подходят для спален, детских комнат, домашних кинотеатров и офисов."
      }
    }
  ]
};

export const homeSeoData = {
  title: "Натяжные потолки и тихие стены в СПб от 1100 ₽/м²",
  description: "Профессиональная установка натяжных потолков и тихих стен в Санкт-Петербурге и ЛО. Цены от 1100 ₽/м². Бесплатный замер. Монтаж за 1 день. Премиальные материалы. Опытные мастера. Звоните!",
  keywords: "натяжные потолки спб, натяжные потолки санкт-петербург, установка натяжных потолков, тихие стены, натяжные потолки цена, монтаж потолков, глянцевые потолки, матовые потолки, сатиновые потолки, тканевые потолки, двухуровневые потолки, парящие потолки, потолки с подсветкой, натяжные потолки в квартиру, потолки в спальню, потолки на кухню, потолки в гостиную, звукоизоляция стен, текстильные стены, натяжные потолки недорого, натяжные потолки петербург, потолки ло, ремонт квартир спб, дизайн потолков",
  ogTitle: "Натяжные потолки и тихие стены в СПб | Питер Потолок",
  ogDescription: "Профессиональная установка натяжных потолков и тихих стен в Санкт-Петербурге. Цены от 1100 ₽/м². Монтаж за 1 день. Бесплатный замер!",
  ogImage: "/og-home.webp",
  canonicalUrl: "https://piterpotolok.ru",
  structuredData: [
    JSON.stringify(organizationSchema),
    JSON.stringify(websiteSchema),
    JSON.stringify(breadcrumbSchema),
    JSON.stringify(webPageSchema),
    JSON.stringify(faqSchema)
  ],
  additionalMeta: [
  
    { name: "geo.position", content: "59.9311;30.3609" },
    { name: "ICBM", content: "59.9311, 30.3609" },
    { name: "DC.title", content: "Натяжные потолки СПб - Питер Потолок" },
    
    { name: "yandex-verification", content: "your-yandex-verification-code" },
    
    { name: "google-site-verification", content: "your-google-verification-code" },

    { property: "og:phone_number", content: "+79320076085" },
    { property: "og:locality", content: "Санкт-Петербург" },
    { property: "og:region", content: "SPE" },
    { property: "og:country-name", content: "Russia" },
    
    // Специфичные теги для региона
    { name: "city", content: "Санкт-Петербург" },
    { name: "country", content: "Россия" }
  ]
};
