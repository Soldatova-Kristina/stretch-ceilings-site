/**
 * Общие настройки SEO для всего сайта
 * Используется для переиспользования в structured data и meta-тегах
 */

export const siteConfig = {
  siteName: "Питер Потолок",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://piterpotolok.ru",
  defaultOgImage: "/og-default.webp",
};

export const organizationData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://piterpotolok.ru/#organization",
  "name": "Питер Потолок",
  "alternateName": "PiterPotolok",
  "description": "Профессиональная установка натяжных потолков и тихих стен в Санкт-Петербурге и Ленинградской области. Опытные мастера, премиальные материалы.",
  "url": "https://piterpotolok.ru",
  "logo": {
    "@type": "ImageObject",
    "url": "https://piterpotolok.ru/icons/logogo.webp",
    "width": "112",
    "height": "90"
  },
  "image": [
    "https://piterpotolok.ru/images/main/hero_main.webp",
    "https://piterpotolok.ru/og-home.webp"
  ],
  "telephone": "+79320076085",
  "priceRange": "₽₽",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Санкт-Петербург",
    "addressRegion": "Ленинградская область",
    "addressCountry": "RU",
    "postalCode": "190000"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "59.9311",
    "longitude": "30.3609"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Санкт-Петербург",
      "sameAs": "https://ru.wikipedia.org/wiki/Санкт-Петербург"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Ленинградская область",
      "sameAs": "https://ru.wikipedia.org/wiki/Ленинградская_область"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    }
  ],
  "paymentAccepted": "Наличные, Безналичный расчет, Карты",
  "currenciesAccepted": "RUB",
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

/**
 * Создает полную организационную схему с каталогом услуг
 * @param {Object} offerCatalog - каталог услуг
 * @returns {Object} - Organization schema with offer catalog
 */
export function createOrganizationSchema(offerCatalog) {
  return {
    ...organizationData,
    ...(offerCatalog && { "hasOfferCatalog": offerCatalog })
  };
}
