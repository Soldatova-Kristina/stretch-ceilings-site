import Seo from '../Seo';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

/**
 * Layout Component - Wraps all pages with consistent structure
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content to render
 * @param {string} [props.title] - Page-specific title for SEO
 * @param {string} [props.description] - Page meta description
 * @param {string} [props.keywords] - SEO keywords (optional)
 * @param {string} [props.ogImage] - Open Graph image URL
 * @param {string} [props.ogType] - Open Graph type
 * @param {string} [props.canonicalUrl] - Canonical URL
 * @param {boolean} [props.noIndex] - Prevent search indexing
 */
export default function Layout({
  children,
  title,
  description,
  keywords,
  ogImage,
  ogType,
  canonicalUrl,
  noIndex,
}) {
  return (
    <>
      {/* SEO Meta Tags */}
      {title && description && (
        <Seo
          title={title}
          description={description}
          keywords={keywords}
          ogImage={ogImage}
          ogType={ogType}
          canonicalUrl={canonicalUrl}
          noIndex={noIndex}
        />
      )}

      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-to-main">
        Перейти к основному содержанию
      </a>

      {/* Site Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content" className={styles.main}>
        {children}
      </main>

      {/* Site Footer */}
      <Footer />
    </>
  );
}
