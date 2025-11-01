import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ShinyText from '@/components/ShinyText/ShinyText';
import { navigationItems, socialLinks } from '@/data/navigationData';
import { COMPANY_PHONE, WHATSAPP_URL } from '@/data/contactsData';
import { useScrollLock } from './useScrollLock';
import { assetPath } from '@/utils/assetPath';
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

  // Get navigation items for desktop menu
  const getDesktopNavItems = () => {
    const isServicesPage = router.pathname.startsWith('/services/');
    
    // On services pages, show simplified navigation without dropdown
    if (isServicesPage) {
      return [
        { href: '/', label: 'Главная' },
        { href: '/services/ceilings', label: 'Потолки' },
        { href: '/services/walls', label: 'Стены' },
      ];
    }
    
    return navigationItems;
  };

  // Get mobile navigation items (flattened, no dropdowns)
  const getMobileNavItems = () => {
    const items = [];
    
    navigationItems.forEach(item => {
      if (item.dropdown && item.items) {
        // Add dropdown items as separate links
        item.items.forEach(subItem => items.push(subItem));
      } else if (!item.dropdown) {
        // Add regular items
        items.push(item);
      }
    });
    
    return items;
  };

  const isHomepage = router.pathname === '/';
  const isServicesPage = router.pathname.startsWith('/services/');
  const desktopNavItems = getDesktopNavItems();
  const mobileNavItems = getMobileNavItems();

  // Background styles for different sections
  const whiteTextureBackground = {
    backgroundImage: `url(${assetPath('images/texture/white_texture.jpg')})`,
  };
  const blackTextureBackground = {
    backgroundImage: `url(${assetPath('images/texture/black_djins.png')})`,
  };

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <header className={styles.header} data-mode={isHomepage ? 'homepage' : isServicesPage ? 'services' : 'standard'} style={whiteTextureBackground}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.logo} aria-label="Перейти на главную страницу">
            <Image
              src={`${basePath}/icons/logotypeNew.svg`}
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
              {desktopNavItems.map((item, index) => (
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
                        <ul className={styles.dropdownMenu} style={whiteTextureBackground}>
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
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
              aria-label="Записаться на замер в WhatsApp"
            >
              <span className={styles.ctaText}>
                <ShinyText text="ЗАПИСАТЬСЯ НА ЗАМЕР" />
              </span>
              <ArrowIcon className={styles.ctaArrow} />
            </a>
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
        style={blackTextureBackground}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav aria-label="Мобильная навигация">
          <ul className={styles.mobileNavList}>
            {mobileNavItems.map((item, index) => (
              <li key={index} className={styles.mobileNavItem}>
                <Link
                  href={item.href}
                  className={`${styles.mobileNavLink} ${
                    isActive(item.href) ? styles.active : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Footer */}
        <div className={styles.mobileMenuFooter}>
          {/* Mobile CTA Button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileCtaButton}
            aria-label="Записаться на замер в WhatsApp"
          >
            <span className={styles.ctaText}>
              <ShinyText text="ЗАПИСАТЬСЯ НА ЗАМЕР" />
            </span>
            <ArrowIcon className={styles.ctaArrow} />
          </a>

          <a href={`tel:${COMPANY_PHONE}`} className={styles.mobilePhone}>
            {COMPANY_PHONE}
          </a>

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
                  src={`${basePath}${link.icon}`}
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
