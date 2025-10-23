/**
 * Общие настройки SEO для всего сайта
 * Используется для переиспользования в structured data и meta-тегах
 */

export const siteConfig = {
  siteName: "Питер Потолок",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://piterpotolok.ru",
  defaultOgImage: "/og-default.jpg",
};

export const organizationData = {
  "@type": "Organization",
  "name": "Питер Потолок",
  "url": "https://piterpotolok.ru",
  "logo": "https://piterpotolok.ru/images/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Санкт-Петербург",
    "addressRegion": "Ленинградская область",
    "addressCountry": "RU"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "areaServed": "RU",
    "availableLanguage": "Russian"
  }
};

export const geoData = {
  "@type": "GeoCircle",
  "geoMidpoint": {
    "@type": "GeoCoordinates",
    "latitude": "59.9311",
    "longitude": "30.3609"
  },
  "geoRadius": "100000"
};

/**
 * Генерирует базовую структуру Service schema
 * @param {Object} params - параметры услуги
 * @returns {Object} - Service structured data
 */
export function createServiceSchema({
  serviceName,
  description,
  serviceType,
  price,
  priceUnit = "м²",
  offerCatalog
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": organizationData,
    "areaServed": geoData,
    "serviceType": serviceType,
    "offers": {
      "@type": "Offer",
      "price": price.toString(),
      "priceCurrency": "RUB",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": price.toString(),
        "priceCurrency": "RUB",
        "unitText": priceUnit
      }
    },
    ...(offerCatalog && { "hasOfferCatalog": offerCatalog })
  };
}
