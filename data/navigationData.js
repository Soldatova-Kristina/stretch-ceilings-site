/**
 * Navigation Data
 * Main navigation items and social links configuration
 */

// Main navigation items (with dropdown support)
export const navigationItems = [
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

// Services page simplified navigation (no dropdown)
export const servicesPageNavigation = [
  { href: '/', label: 'Главная' },
  { href: '/services/ceilings', label: 'Потолки' },
  { href: '/services/walls', label: 'Стены' },
];

// Social links configuration
export const socialLinks = [
  {
    href: 'https://wa.me/79209063386',
    icon: '/icons/social/icon-whatsapp.svg',
    label: 'WhatsApp',
    external: true,
  },
  {
    href: 'https://vk.com/piterpoto1ok',
    icon: '/icons/social/icon-vk.svg',
    label: 'VK',
    external: true,
  },
  {
    href: 'https://t.me/piterpotolok',
    icon: '/icons/social/icon-telegram.svg',
    label: 'Telegram',
    external: true,
  },
  {
    href: 'tel:+79209063386',
    icon: '/icons/social/icon-phone.svg',
    label: 'Телефон',
    external: false,
  },
];
