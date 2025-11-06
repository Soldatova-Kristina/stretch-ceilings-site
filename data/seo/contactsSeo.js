import { organizationData } from './seoConfig';

// Structured data для страницы контактов (LocalBusiness schema)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": organizationData.name,
  "image": "https://piterpotolok.ru/og-default.webp",
  "@id": "https://piterpotolok.ru",
  "url": organizationData.url,
  "telephone": "+7-932-007-60-85",
  "priceRange": "$$",
  "address": organizationData.address,
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 59.9311,
    "longitude": 30.3609
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Санкт-Петербург"
    },
    {
      "@type": "State",
      "name": "Ленинградская область"
    }
  ],
  "sameAs": [
    "https://t.me/piterpotolok",
    "https://vk.com/piterpoto1ok",
    "https://instagram.com/piterpotolok"
  ],
  "contactPoint": organizationData.contactPoint
};

// Экспорт SEO-данных для страницы контактов
export const contactsSeoData = {
  title: "Контакты — Питер Потолок | Телефон, адрес в СПб",
  description: "Свяжитесь с нами для бесплатной консультации по натяжным потолкам в Санкт-Петербурге и ЛО. Телефон +7-932-007-60-85, выезд замерщика бесплатно, работаем ежедневно.",
  keywords: "контакты натяжные потолки, телефон Питер Потолок, адрес СПб, связаться консультация, бесплатный замер, Санкт-Петербург ЛО",
  ogImage: "/og-default.webp",
  canonicalUrl: "https://piterpotolok.ru/contacts",
  structuredData: JSON.stringify(structuredData),
};
