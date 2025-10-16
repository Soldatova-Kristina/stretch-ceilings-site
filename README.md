# Stretch Ceilings Landing Page

A professional landing page for a stretch ceilings and walls business, built with Next.js 15.5.5 (Pages Router) and React 19.1.0.

## 🎯 Project Overview

This website showcases stretch ceiling and wall installation services with:
- Modern, responsive design
- SEO-optimized metadata management
- Russian language content
- Accessible navigation with dropdown menus
- Multi-page structure

## 🏗️ Architecture

### Core Components

#### 1. **Layout Component** (`components/Layout/Layout.js`)
- Wraps all pages with consistent structure
- Integrates SEO, Header, and Footer components
- Provides semantic HTML structure (header, main, footer)
- Manages page-level metadata

#### 2. **SEO Component** (`components/Seo.js`)
- Manages all page-level SEO metadata
- Generates Open Graph and Twitter Card tags
- Handles canonical URLs and robots meta tags
- Supports customizable metadata per page

#### 3. **Header Component** (`components/Header/Header.js`)
- Sticky navigation with logo and menu
- Services dropdown menu (Потолки, Стены)
- Active link highlighting
- Responsive mobile menu with hamburger icon
- Keyboard navigation support
- ARIA labels for accessibility

#### 4. **Footer Component** (`components/Footer/Footer.js`)
- 4-column responsive grid layout
- Company info, navigation, services, and contact sections
- Social media links (Instagram, VK, WhatsApp, Telegram)
- Copyright and legal links
- Mobile-responsive (4-col → 2-col → 1-col)

## 📁 Project Structure

```
stretch-ceilings-site/
├── components/
│   ├── Layout/
│   │   ├── Layout.js
│   │   └── Layout.module.css
│   ├── Header/
│   │   ├── Header.js
│   │   └── Header.module.css
│   ├── Footer/
│   │   ├── Footer.js
│   │   └── Footer.module.css
│   └── Seo.js
├── pages/
│   ├── services/
│   │   ├── ceilings.js      # Натяжные потолки
│   │   └── walls.js          # Натяжные стены
│   ├── _app.js               # App wrapper with Layout
│   ├── _document.js
│   ├── index.js              # Homepage
│   ├── about.js              # О нас
│   ├── portfolio.js          # Портфолио
│   ├── reviews.js            # Отзывы
│   ├── faq.js                # FAQ
│   ├── contacts.js           # Контакты
│   ├── privacy.js            # Политика конфиденциальности
│   └── terms.js              # Условия использования
├── styles/
│   ├── globals.css           # Global styles with CSS variables
│   └── Home.module.css
├── public/
│   └── fonts/
│       └── README.md         # Font files instructions
└── package.json
```

## 🎨 Styling System

### Global Styles (`styles/globals.css`)

The project uses a comprehensive CSS custom properties system:

#### Typography
- **Font Family**: Gilroy (6 weights: 300-800)
- **Responsive font sizes** with mobile-first approach
- **Line heights**: Optimized for readability

#### Color System
```css
--color-primary: #3498db
--color-primary-hover: #2980b9
--color-text-primary: #1a1a1a
--color-text-secondary: #6b6b6b
--color-background: #ffffff
--color-background-alt: #f8f9fa
```

#### Spacing Scale (8px base unit)
```css
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px
--spacing-2xl: 48px
--spacing-3xl: 64px
--spacing-4xl: 80px
--spacing-5xl: 120px
```

#### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: ≥ 1440px

## 🔤 Typography

### Gilroy Font Family

The design uses the Gilroy typeface family. Font files should be placed in `/public/fonts/`:

- `gilroy-light.woff2` (300) - Captions, subtle text
- `gilroy-regular.woff2` (400) - Body text, paragraphs
- `gilroy-medium.woff2` (500) - Navigation, buttons
- `gilroy-semibold.woff2` (600) - Subheadings, emphasis
- `gilroy-bold.woff2` (700) - Headings, CTAs
- `gilroy-extrabold.woff2` (800) - Hero titles, impact text

**Note**: Font files are referenced but not included. Please obtain licensed font files and place them in the fonts directory.

## 🌐 Pages

### Homepage (`/`)
- Hero section with CTA buttons
- Features grid showcasing company advantages
- SEO-optimized Russian content

### Services
- **Натяжные потолки** (`/services/ceilings`)
- **Натяжные стены** (`/services/walls`)

### Other Pages
- О нас (`/about`)
- Портфолио (`/portfolio`)
- Отзывы (`/reviews`)
- FAQ (`/faq`)
- Контакты (`/contacts`)
- Политика конфиденциальности (`/privacy`)
- Условия использования (`/terms`)

## 🎯 SEO Features

Each page includes comprehensive SEO metadata:

- **Title tags** with site name suffix
- **Meta descriptions** (150-160 characters)
- **Keywords** (optional)
- **Open Graph tags** for social sharing
- **Twitter Card metadata**
- **Canonical URLs**
- **Robots meta tags** (with noIndex option)
- **Language declaration** (ru_RU)

### Example Usage

```javascript
export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: "Главная",
        description: "Профессиональная установка натяжных потолков и стен.",
        keywords: "натяжные потолки, установка потолков",
      },
    },
  };
}
```

## ♿ Accessibility

### Semantic HTML
- Proper use of `<header>`, `<nav>`, `<main>`, `<footer>`
- Hierarchical heading structure
- Semantic lists and links

### ARIA Labels
- Navigation landmarks: `aria-label="Основная навигация"`
- Dropdown states: `aria-expanded`, `aria-haspopup`
- Mobile menu toggle: `aria-label="Меню"`
- Social links: Descriptive labels

### Keyboard Navigation
- Tab navigation through all interactive elements
- Enter/Space to activate dropdowns
- Escape to close mobile menu
- Visible focus indicators

## 📱 Responsive Design

### Header
- **Desktop**: Horizontal navigation with hover dropdown
- **Mobile**: Hamburger menu with slide-in navigation
- **Height**: 70px (mobile) / 90px (desktop)

### Footer
- **Desktop**: 4-column grid
- **Tablet**: 2×2 grid
- **Mobile**: Single column stack

## 🚀 Development

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

### Production Server

```bash
npm start
```

## 🎨 Customization

### Colors

Edit CSS variables in `styles/globals.css`:

```css
:root {
  --color-primary: #3498db;      /* Change brand color */
  --color-primary-hover: #2980b9;
}
```

### Content

- Update Russian text in page components
- Modify contact information in `Footer.js`
- Change company name in `Seo.js` (siteName variable)
- Update social media links in `Footer.js`

## 📝 Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://stretchpotolki.ru
```

## 📦 Dependencies

- **next**: 15.5.5
- **react**: 19.1.0
- **react-dom**: 19.1.0

## 🎯 Performance Optimization

- **Font Loading**: `font-display: swap` prevents invisible text
- **CSS Modules**: Automatic code splitting
- **Static Generation**: All pages use `getStaticProps`
- **Semantic HTML**: Better SEO and accessibility

## 📚 Additional Notes

### Font Files

Actual Gilroy font files need to be obtained from a licensed source and placed in `/public/fonts/`. See `/public/fonts/README.md` for details.

### Future Enhancements

- Add image galleries for portfolio
- Implement customer review system
- Add contact form with validation
- Integrate analytics
- Add cookie consent banner
- Implement dark mode toggle

---

Built based on comprehensive design document specification for a stretch ceilings business landing page.
