import { organizationData, siteConfig } from './seoConfig';

/**
 * Генерирует structured data для страницы портфолио
 * @param {Array} portfolioItems - массив элементов портфолио
 * @returns {Object} - CollectionPage structured data
 */
export function createPortfolioStructuredData(portfolioItems) {
  const baseUrl = siteConfig.baseUrl;
  
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Портфолио работ по установке натяжных потолков",
    "description": "Примеры реализованных проектов натяжных потолков в Санкт-Петербурге: квартиры, дома, коммерческие помещения. Фото работ с описанием.",
    "url": `${baseUrl}/portfolio`,
    "publisher": {
      "@type": "Organization",
      "name": organizationData.name,
      "url": organizationData.url,
      "logo": {
        "@type": "ImageObject",
        "url": organizationData.logo
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
            "name": organizationData.name
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
  };
}

// Экспорт базовых SEO-данных для страницы портфолио (без structured data)
export const portfolioSeoBase = {
  title: "Портфолио работ — Натяжные потолки в СПб | Питер Потолок",
  description: "Портфолио натяжных потолков в СПб: фото реализованных проектов в квартирах и домах. Примеры работ с теневыми профилями, световыми линиями. Питер Потолок.",
  keywords: "портфолио натяжные потолки, фото потолков СПб, примеры работ Санкт-Петербург, наши проекты, реализованные объекты, галерея работ",
  ogImage: "/images/portfolio/1/1.jpg",
  canonicalUrl: "https://piterpotolok.ru/portfolio",
};
