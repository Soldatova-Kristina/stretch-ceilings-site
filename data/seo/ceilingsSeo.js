import { createServiceSchema } from './seoConfig';

const ceilingsOfferCatalog = {
  "@type": "OfferCatalog",
  "name": "Типы натяжных потолков",
  "itemListElement": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "ПВХ-полотна",
        "description": "Матовые, сатиновые, глянцевые натяжные потолки из ПВХ"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Матовые полотна",
        "description": "Классические матовые натяжные потолки с идеально ровной поверхностью"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Глянцевые потолки",
        "description": "Зеркальные глянцевые натяжные потолки для визуального увеличения пространства"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Сатиновые полотна",
        "description": "Элегантные сатиновые потолки с мягким отражением света"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Тканевые полотна",
        "description": "Премиальные тканевые натяжные потолки"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Парящие потолки",
        "description": "Потолки с эффектом парения и скрытой подсветкой"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Теневые потолки",
        "description": "Натяжные потолки с теневым зазором для создания объемного эффекта"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Двухуровневые потолки",
        "description": "Многоуровневые конструкции натяжных потолков для зонирования пространства"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Световые потолки",
        "description": "Натяжные потолки со встроенным освещением"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Световые линии",
        "description": "Встроенные световые линии в натяжном потолке для современного дизайна"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Трековое освещение",
        "description": "Гибкая система трекового освещения на натяжных потолках"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Споты на натяжном потолке",
        "description": "Точечные светильники-споты для направленного освещения"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Звездное небо с дополнительной подсветкой",
        "description": "Натяжной потолок с эффектом звездного неба и дополнительной подсветкой"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Звездное небо с оптоволокном",
        "description": "Натяжной потолок звездное небо на основе оптоволоконной технологии"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Звездное небо с фотопечатью",
        "description": "Натяжной потолок с фотопечатью звездного неба и космических мотивов"
      }
    }
  ]
};

// Structured data для страницы потолков
const structuredData = createServiceSchema({
  serviceName: "Установка натяжных потолков",
  description: "Профессиональная установка натяжных потолков в Санкт-Петербурге и ЛО. ПВХ и тканевые полотна, глянцевые, матовые, сатиновые поверхности.",
  serviceType: "Натяжные потолки",
  price: 1100,
  priceUnit: "м²",
  offerCatalog: ceilingsOfferCatalog
});

// Экспорт SEO-данных для страницы потолков
export const ceilingsSeoData = {
  title: "Натяжные потолки в СПб и ЛО от 1100 ₽/м²",
  description: "Установка натяжных потолков в Санкт-Петербурге ⭐ ПВХ и тканевые полотна ⭐ Глянцевые, матовые, сатиновые ⭐ Быстрый монтаж ⭐ Гарантия качества ⭐ Цены от 1100 ₽/м²",
  keywords: "натяжные потолки спб, установка натяжных потолков, натяжные потолки санкт-петербург, пвх потолки, тканевые потолки, глянцевые потолки, матовые потолки, сатиновые потолки, парящие потолки, теневые потолки, двухуровневые потолки, световые потолки, световые линии, трековое освещение, споты на потолке, звездное небо, натяжные потолки цена, монтаж потолков, потолки с подсветкой, оптоволокно в потолке, фотопечать на потолке",
  ogImage: "/images/ceilings/og-ceilings.webp",
  canonicalUrl: "https://piterpotolok.ru/services/ceilings",
  structuredData: JSON.stringify(structuredData),
};
