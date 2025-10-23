import { organizationData } from './seoConfig';

/**
 * Generates reviews structured data with aggregate rating and individual reviews
 * @param {Array} reviewsData - Array of review objects with author, rating, and text
 * @returns {Object} - LocalBusiness structured data with reviews
 */
export function createReviewsStructuredData(reviewsData) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": organizationData.name,
    "image": "https://piterpotolok.ru/og-default.jpg",
    "@id": organizationData.url,
    "url": `${organizationData.url}/reviews`,
    "telephone": "+7-932-007-60-85",
    "address": organizationData.address,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "ratingCount": reviewsData.length.toString()
    },
    "review": reviewsData.map((review) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5"
      },
      "reviewBody": review.text,
      "datePublished": "2025-01-01"
    }))
  };
}

// Export base SEO data for reviews page
export const reviewsSeoBase = {
  title: "Отзывы клиентов",
  description: "Отзывы о натяжных потолках в Санкт-Петербурге: реальные мнения клиентов Питер Потолок о качестве работ, сроках монтажа и сервисе. Читайте отзывы с фото результатов.",
  keywords: "отзывы натяжные потолки СПб, мнения клиентов Санкт-Петербург, рекомендации Питер Потолок, качество работ отзывы, реальные отзывы установка потолков",
  ogImage: "/images/reviews/evgenia.png",
  canonicalUrl: "https://piterpotolok.ru/reviews",
  ogType: "website"
};
