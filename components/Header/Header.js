import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './Header.module.css';

/**
 * Header Component - Site-wide navigation with dropdown menu
 */
export default function Header() {
  const router = useRouter();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesOpen]);

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

  // Check if link is active (memoized)
  const isActive = useCallback((path) => {
    if (path === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(path);
  }, [router.pathname]);

  // Toggle services dropdown (memoized)
  const toggleServices = useCallback((e) => {
    e.preventDefault();
    setIsServicesOpen(prev => !prev);
  }, []);

  // Handle services dropdown keyboard navigation (memoized)
  const handleServicesKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsServicesOpen(prev => !prev);
    } else if (e.key === 'Escape') {
      setIsServicesOpen(false);
    }
  }, []);

  // Determine current display mode based on route
  const isHomepage = router.pathname === '/';
  const isServicesPage = router.pathname.startsWith('/services/');

  // Base navigation items
  const allNavItems = [
    { href: '/', label: 'Главная' },
    { 
      label: 'Услуги',
      dropdown: true,
      items: [
        { href: '/services/ceilings', label: 'Потолки' },
        { href: '/services/walls', label: 'Стены' },
      ]
    },
    { href: '/portfolio', label: 'Наши работы' },
    { href: '/faq', label: 'FAQ' },
    { href: '/reviews', label: 'Отзывы' },
    { href: '/contacts', label: 'Контакты' },
  ];

  // Filter navigation items based on current page mode
  const getNavItems = () => {
    if (isServicesPage) {
      // Services mode: Show only Главная, Потолки, Стены (no dropdown)
      return [
        { href: '/', label: 'Главная' },
        { href: '/services/ceilings', label: 'Потолки' },
        { href: '/services/walls', label: 'Стены' },
      ];
    }
    // Homepage and Standard mode: Show all items with dropdown
    return allNavItems;
  };

  const navItems = getNavItems();

  return (
    <header className={styles.header} data-mode={isHomepage ? 'homepage' : isServicesPage ? 'services' : 'standard'}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Перейти на главную страницу">
          <Image
            src="/icons/logotype.svg"
            alt="Логотип Питер Потолок"
            width={112}
            height={90}
            priority
            className={styles.logoImg}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav} aria-label="Основная навигация">
          <ul className={styles.navList}>
            {navItems.map((item, index) => (
              <li key={index} className={styles.navItem}>
                {item.dropdown ? (
                  <div className={styles.dropdown} ref={dropdownRef}>
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

        {/* CTA Button - Hidden on homepage */}
        {!isHomepage && (
          <a 
            href="https://t.me/piterpotolok" 
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Записаться на замер в Telegram"
          >
            <span className={styles.ctaText}>ЗАПИСАТЬСЯ НА ЗАМЕР</span>
            <svg className={styles.ctaArrow} width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M37.5303 6.53033C37.8232 6.23744 37.8232 5.76256 37.5303 5.46967L32.7574 0.696699C32.4645 0.403806 31.9896 0.403806 31.6967 0.696699C31.4038 0.989593 31.4038 1.46447 31.6967 1.75736L35.9393 6L31.6967 10.2426C31.4038 10.5355 31.4038 11.0104 31.6967 11.3033C31.9896 11.5962 32.4645 11.5962 32.7574 11.3033L37.5303 6.53033ZM0 6.75H37V5.25H0V6.75Z" fill="currentColor"/>
            </svg>
          </a>
        )}

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
            {allNavItems.map((item, index) => (
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
          <a 
            href="https://t.me/piterpotolok" 
            className={styles.mobileCtaButton}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Связаться через Telegram"
          >
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
