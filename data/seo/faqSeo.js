/**
 * SEO configuration for FAQ page
 */

/**
 * Generates FAQ structured data from FAQ items array
 * @param {Array} faqItems - Array of FAQ objects with question and answer properties
 * @returns {Object} - FAQPage structured data
 */
export function createFaqStructuredData(faqItems) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

// Export base SEO data for FAQ page
export const faqSeoBase = {
  title: "Часто задаваемые вопросы",
  description: "FAQ по натяжным потолкам в СПб: когда вызвать замерщика, порядок работ с обоями и мебелью, безопасность материалов, потеря высоты. Ответы от Питер Потолок.",
  keywords: "вопросы натяжные потолки, FAQ установка СПб, замер потолка, порядок монтажа, безопасность ПВХ, потеря высоты потолок, Санкт-Петербург",
  canonicalUrl: "https://piterpotolok.ru/faq",
  ogImage: "/og-default.jpg",
  ogType: "website"
};
