import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ShinyText from '@/components/ShinyText/ShinyText';
import { navigationItems, servicesPageNavigation, socialLinks } from '@/data/navigationData';
import { COMPANY_PHONE, TELEGRAM_URL } from '@/data/contactsData';
import { useScrollLock } from './useScrollLock';
import ArrowIcon from './ArrowIcon';
import DropdownIcon from './DropdownIcon';
import styles from './Header.module.css';
/**
 * Header Component - Site-wide navigation with dropdown menu
 */
export default function Header() {
  const router = useRouter();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Use scroll lock hook
  useScrollLock(isMobileMenuOpen);

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
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  // Check if link is active (memoized)
  const isActive = useCallback((path) => {
    if (path === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(path);
  }, [router.pathname]);

  // Toggle services dropdown (desktop only)
  const toggleServices = useCallback((e) => {
    e.preventDefault();
    setIsServicesOpen(prev => !prev);
  }, []);

  // Handle services dropdown keyboard navigation (desktop only)
  const handleServicesKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsServicesOpen(prev => !prev);
    } else if (e.key === 'Escape') {
      setIsServicesOpen(false);
    }
  }, []);

  // Toggle mobile menu handler
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  // Get navigation items based on current page
  const isHomepage = router.pathname === '/';
  const isServicesPage = router.pathname.startsWith('/services/');
  const navItems = isServicesPage ? servicesPageNavigation : navigationItems;

  return (
    <header className={styles.header} data-mode={isHomepage ? 'homepage' : isServicesPage ? 'services' : 'standard'}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logoWrapper}>
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
        </div>

        {/* Navigation Section */}
        <div className={styles.navWrapper}>
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
                        <DropdownIcon 
                          className={`${styles.dropdownIcon} ${isServicesOpen ? styles.open : ''}`}
                        />
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
        </div>

        {/* Actions Section (CTA Button + Mobile Menu) */}
        <div className={styles.actionsWrapper}>
          {/* CTA Button - Hidden on homepage */}
          {!isHomepage && (
            <button
              className={styles.ctaButton}
              onClick={() => window.open(TELEGRAM_URL, '_blank', 'noopener,noreferrer')}
              aria-label="Записаться на замер в Telegram"
              type="button"
            >
              <span className={styles.ctaText}>
                <ShinyText text="ЗАПИСАТЬСЯ НА ЗАМЕР" />
              </span>
              <ArrowIcon className={styles.ctaArrow} />
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileMenuToggle}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav aria-label="Мобильная навигация">
          <ul className={styles.mobileNavList}>
            <li className={styles.mobileNavItem}>
              <Link
                href="/"
                className={`${styles.mobileNavLink} ${
                  isActive('/') ? styles.active : ''
                }`}
              >
                О нас
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                href="/services/ceilings"
                className={`${styles.mobileNavLink} ${
                  isActive('/services/ceilings') ? styles.active : ''
                }`}
              >
                Потолки
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                href="/services/walls"
                className={`${styles.mobileNavLink} ${
                  isActive('/services/walls') ? styles.active : ''
                }`}
              >
                Стены
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                href="/portfolio"
                className={`${styles.mobileNavLink} ${
                  isActive('/portfolio') ? styles.active : ''
                }`}
              >
                Наши работы
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                href="/faq"
                className={`${styles.mobileNavLink} ${
                  isActive('/faq') ? styles.active : ''
                }`}
              >
                FAQ
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                href="/reviews"
                className={`${styles.mobileNavLink} ${
                  isActive('/reviews') ? styles.active : ''
                }`}
              >
                Отзывы
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                href="/contacts"
                className={`${styles.mobileNavLink} ${
                  isActive('/contacts') ? styles.active : ''
                }`}
              >
                Контакты
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Footer */}
        <div className={styles.mobileMenuFooter}>
          {/* Mobile CTA Button */}
          <button
            className={styles.mobileCtaButton}
            onClick={() => window.open(TELEGRAM_URL, '_blank', 'noopener,noreferrer')}
            aria-label="Записаться на замер в Telegram"
            type="button"
          >
            <span className={styles.ctaText}>
              <ShinyText text="ЗАПИСАТЬСЯ НА ЗАМЕР" />
            </span>
            <ArrowIcon className={styles.ctaArrow} />
          </button>

          {/* Phone Number */}
          <a href={`tel:${COMPANY_PHONE}`} className={styles.mobilePhone}>
            {COMPANY_PHONE}
          </a>

          {/* Social Links */}
          <div className={styles.mobileSocial}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                className={styles.mobileSocialLink}
                aria-label={`Связаться через ${link.label}`}
              >
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={35}
                  height={35}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className={styles.overlay}
          onClick={toggleMobileMenu}
          aria-hidden="true"
          role="presentation"
        />
      )}
    </header>
  );
}
