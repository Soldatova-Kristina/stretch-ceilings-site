import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.css';

/**
 * Header Component - Site-wide navigation with dropdown menu
 */
export default function Header() {
  const router = useRouter();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
      setIsServicesOpen(false);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Check if link is active
  const isActive = (path) => {
    if (path === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(path);
  };

  // Toggle services dropdown
  const toggleServices = (e) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  // Handle services dropdown keyboard navigation
  const handleServicesKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsServicesOpen(!isServicesOpen);
    }
  };

  // Navigation items
  const navItems = [
    { href: '/', label: 'Главная' },
    { href: '/about', label: 'О нас' },
    { 
      label: 'Услуги',
      dropdown: true,
      items: [
        { href: '/services/ceilings', label: 'Потолки' },
        { href: '/services/walls', label: 'Стены' },
      ]
    },
    { href: '/portfolio', label: 'Портфолио' },
    { href: '/reviews', label: 'Отзывы' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contacts', label: 'Контакты' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>СтретчПотолки</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav} aria-label="Основная навигация">
          <ul className={styles.navList}>
            {navItems.map((item, index) => (
              <li key={index} className={styles.navItem}>
                {item.dropdown ? (
                  <div className={styles.dropdown}>
                    <button
                      className={`${styles.navLink} ${styles.dropdownToggle} ${
                        isActive('/services') ? styles.active : ''
                      }`}
                      onClick={toggleServices}
                      onKeyDown={handleServicesKeyDown}
                      aria-expanded={isServicesOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <svg 
                        className={`${styles.dropdownIcon} ${isServicesOpen ? styles.open : ''}`}
                        width="12" 
                        height="8" 
                        viewBox="0 0 12 8" 
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                    {isServicesOpen && (
                      <ul className={styles.dropdownMenu}>
                        {item.items.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.href}
                              className={`${styles.dropdownLink} ${
                                isActive(subItem.href) ? styles.active : ''
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${
                      isActive(item.href) ? styles.active : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <a href="tel:+79001234567" className={styles.ctaButton}>
          Позвонить
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.mobileMenuToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Меню"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <nav aria-label="Мобильная навигация">
          <ul className={styles.mobileNavList}>
            {navItems.map((item, index) => (
              <li key={index} className={styles.mobileNavItem}>
                {item.dropdown ? (
                  <>
                    <button
                      className={`${styles.mobileNavLink} ${
                        isActive('/services') ? styles.active : ''
                      }`}
                      onClick={toggleServices}
                      aria-expanded={isServicesOpen}
                    >
                      {item.label}
                      <svg 
                        className={`${styles.dropdownIcon} ${isServicesOpen ? styles.open : ''}`}
                        width="12" 
                        height="8" 
                        viewBox="0 0 12 8" 
                        fill="none"
                      >
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                    {isServicesOpen && (
                      <ul className={styles.mobileDropdownMenu}>
                        {item.items.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.href}
                              className={`${styles.mobileNavLink} ${styles.subLink} ${
                                isActive(subItem.href) ? styles.active : ''
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`${styles.mobileNavLink} ${
                      isActive(item.href) ? styles.active : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          
          {/* Mobile CTA */}
          <a href="tel:+79001234567" className={styles.mobileCtaButton}>
            Позвонить
          </a>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className={styles.overlay}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
