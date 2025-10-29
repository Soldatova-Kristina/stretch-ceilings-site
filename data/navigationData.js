/**
 * Navigation Data
 * Main navigation items and social links configuration
 */

import { WHATSAPP_URL, VK_URL, TELEGRAM_URL, COMPANY_PHONE } from './contactsData';

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
    href: WHATSAPP_URL,
    icon: '/icons/social/icon-whatsapp.svg',
    label: 'WhatsApp',
    external: true,
  },
  {
    href: VK_URL,
    icon: '/icons/social/icon-vk.svg',
    label: 'VK',
    external: true,
  },
  {
    href: TELEGRAM_URL,
    icon: '/icons/social/icon-telegram.svg',
    label: 'Telegram',
    external: true,
  },
  {
    href: `tel:${COMPANY_PHONE}`,
    icon: '/icons/social/icon-phone.svg',
    label: 'Телефон',
    external: false,
  },
];
