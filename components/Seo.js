import Head from 'next/head';
import { useRouter } from 'next/router';

/**
 * SEO Component - Manages all page-level SEO metadata
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Page title (will be suffixed with site name)
 * @param {string} props.description - Page meta description (150-160 characters recommended)
 * @param {string} [props.keywords] - Comma-separated SEO keywords (optional)
 * @param {string} [props.ogTitle] - Open Graph title (if different from title)
 * @param {string} [props.ogDescription] - Open Graph description (if different from description)
 * @param {string} [props.ogImage='/og-default.webp'] - Open Graph image URL (1200×630px recommended)
 * @param {string} [props.ogType='website'] - Open Graph type (website/article)
 * @param {string} [props.canonicalUrl] - Canonical URL for duplicate content handling
 * @param {boolean} [props.noIndex=false] - If true, prevents search engine indexing
 * @param {string|string[]} [props.structuredData] - JSON-LD structured data as stringified JSON or array of strings
 * @param {Array} [props.additionalMeta] - Additional meta tags array [{name/property: value, content: value}]
 */
export default function Seo({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = '/og-default.webp',
  ogType = 'website',
  canonicalUrl,
  noIndex = false,
  structuredData,
  additionalMeta = [],
}) {
  const router = useRouter();
  const siteName = 'Питер Потолок';
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  const fullTitle = title ? `${title} — ${siteName}` : siteName;
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://piterpotolok.ru';
  const currentUrl = canonicalUrl || `${baseUrl}${router.asPath}`;

  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
  
  const robotsContent = noIndex ? 'noindex,nofollow' : 'index,follow';

  const structuredDataArray = Array.isArray(structuredData) ? structuredData : (structuredData ? [structuredData] : []);

  return (
    <Head>

      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsContent} />
      
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      <meta httpEquiv="content-language" content="ru" />
      <meta name="geo.region" content="RU-SPE" />
      <meta name="geo.placename" content="Санкт-Петербург" />
      
      <link rel="canonical" href={currentUrl} />
      
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle || title || siteName} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="ru_RU" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteName} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      <link rel="icon" href={`${basePath}/icons/logogo.png`} />
      
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#3498db" />
     
      <meta name="author" content="Питер Потолок" />
      <link rel="publisher" href="https://piterpotolok.ru" />

      {structuredDataArray.map((data, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: data }}
        />
      ))}
      
      {additionalMeta.map((meta, index) => {
        const key = `additional-meta-${index}`;
        if (meta.property) {
          return <meta key={key} property={meta.property} content={meta.content} />;
        }
        return <meta key={key} name={meta.name} content={meta.content} />;
      })}
    </Head>
  );
}