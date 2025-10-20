import Head from 'next/head';
import { useRouter } from 'next/router';

/**
 * SEO Component - Manages all page-level SEO metadata
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Page title (will be suffixed with site name)
 * @param {string} props.description - Page meta description (150-160 characters recommended)
 * @param {string} [props.keywords] - Comma-separated SEO keywords (optional)
 * @param {string} [props.ogImage='/og-default.jpg'] - Open Graph image URL (1200×630px recommended)
 * @param {string} [props.ogType='website'] - Open Graph type (website/article)
 * @param {string} [props.canonicalUrl] - Canonical URL for duplicate content handling
 * @param {boolean} [props.noIndex=false] - If true, prevents search engine indexing
 * @param {string} [props.structuredData] - JSON-LD structured data as stringified JSON
 */
export default function Seo({
  title,
  description,
  keywords,
  ogImage = '/og-default.jpg',
  ogType = 'website',
  canonicalUrl,
  noIndex = false,
  structuredData, // 👈 добавлено
}) {
  const router = useRouter();
  const siteName = 'Питер Потолок';
  
  // Construct full page title with site name suffix
  const fullTitle = title ? `${title} — ${siteName}` : siteName;
  
  // Get current URL for canonical and OG tags
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://piterpotolok.ru';
  const currentUrl = canonicalUrl || `${baseUrl}${router.asPath}`;
  
  // Construct full OG image URL
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
  
  // Robots meta tag value
  const robotsContent = noIndex ? 'noindex,nofollow' : 'index,follow';

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsContent} />
      
      {/* Viewport and mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="ru" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="ru_RU" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteName} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Favicon */}
      <link rel="icon" href="/icons/logo.svg" />
      
      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#3498db" />

      {/* JSON-LD Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
      )}
    </Head>
  );
}