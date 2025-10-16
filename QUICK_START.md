# 🚀 Quick Start Guide

## What Has Been Built

A complete stretch ceilings business landing page with:
- ✅ 11 pages (homepage + 10 additional pages)
- ✅ SEO-optimized metadata
- ✅ Responsive navigation with dropdown
- ✅ Mobile menu
- ✅ Footer with social links
- ✅ Russian language content
- ✅ Accessibility features

---

## 🏃 Getting Started in 3 Steps

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Add Environment Variables (Optional)

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_SITE_URL=https://stretchpotolki.ru
```

### Step 3: Start Development Server

```bash
npm run dev
```

Visit: **http://localhost:3000**

---

## 📁 What You'll See

### Homepage (/)
- Hero section: "Натяжные потолки и стены"
- Features grid with 4 advantages
- Call-to-action buttons

### Navigation Menu
- Главная (Home)
- О нас (About)
- Услуги (Services - dropdown)
  - Потолки (Ceilings)
  - Стены (Walls)
- Портфолио (Portfolio)
- Отзывы (Reviews)
- FAQ
- Контакты (Contacts)

### Working Features
✅ Sticky header  
✅ Dropdown menu on desktop  
✅ Mobile hamburger menu  
✅ Active link highlighting  
✅ Responsive footer (4-column grid)  
✅ Social media links  
✅ SEO meta tags on all pages  

---

## 🔧 Important: Font Files Needed

The project uses **Gilroy** font family. You need to:

1. Obtain licensed Gilroy font files (6 variants)
2. Convert to WOFF2 format
3. Place in `/public/fonts/` directory:
   - gilroy-light.woff2
   - gilroy-regular.woff2
   - gilroy-medium.woff2
   - gilroy-semibold.woff2
   - gilroy-bold.woff2
   - gilroy-extrabold.woff2

See `/public/fonts/README.md` for details.

**Without fonts**: Site will use system fallback fonts (still works, but not optimal).

---

## ✏️ Quick Customization

### Change Company Name
**File**: `components/Seo.js`
```javascript
const siteName = 'СтретчПотолки'; // Change here
```

### Change Phone Number
**Files**: `components/Header/Header.js` and `components/Footer/Footer.js`
```javascript
<a href="tel:+79001234567"> // Update phone
```

### Change Brand Color
**File**: `styles/globals.css`
```css
:root {
  --color-primary: #3498db; /* Change this */
}
```

### Update Social Media Links
**File**: `components/Footer/Footer.js`
```javascript
<a href="https://instagram.com" ... > // Update URLs
```

---

## 📄 Available Pages

All pages are located in `/pages/`:

1. **index.js** - Homepage
2. **about.js** - О нас
3. **services/ceilings.js** - Натяжные потолки
4. **services/walls.js** - Натяжные стены
5. **portfolio.js** - Портфолио
6. **reviews.js** - Отзывы
7. **faq.js** - FAQ
8. **contacts.js** - Контакты
9. **privacy.js** - Политика конфиденциальности
10. **terms.js** - Условия использования

Each page has:
- Unique SEO metadata
- Russian content
- Placeholder text ready for replacement

---

## 🎨 Styling System

All global styles are in `styles/globals.css`.

### CSS Variables Available:

**Colors:**
```css
var(--color-primary)
var(--color-primary-hover)
var(--color-text-primary)
var(--color-text-secondary)
var(--color-background)
var(--color-background-alt)
```

**Spacing:**
```css
var(--spacing-xs)   /* 4px */
var(--spacing-sm)   /* 8px */
var(--spacing-md)   /* 16px */
var(--spacing-lg)   /* 24px */
var(--spacing-xl)   /* 32px */
```

**Typography:**
```css
var(--font-size-h1)
var(--font-size-h2)
var(--font-size-body)
var(--font-weight-bold)
```

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

Use in CSS:
```css
@media (min-width: 768px) {
  /* Tablet and up */
}

@media (min-width: 1024px) {
  /* Desktop and up */
}
```

---

## 🔍 SEO Features

Each page has proper SEO via `getStaticProps`:

```javascript
export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: "Your Title",
        description: "Your description",
        keywords: "optional, keywords",
      },
    },
  };
}
```

This automatically generates:
- Title tag with site name
- Meta description
- Open Graph tags
- Twitter Card tags
- Canonical URLs

---

## 🚀 Build for Production

### Test Production Build Locally

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import to Vercel
3. Auto-deploys on push

Or use Vercel CLI:
```bash
npm install -g vercel
vercel
```

---

## 📝 To-Do After Setup

### Content
- [ ] Add actual company description in About page
- [ ] Add portfolio images and descriptions
- [ ] Add customer reviews
- [ ] Expand FAQ with real questions
- [ ] Update contact information

### Assets
- [ ] Add company logo image
- [ ] Create Open Graph image (1200x630px)
- [ ] Add favicon.ico
- [ ] Add portfolio images

### Functionality
- [ ] Add contact form
- [ ] Integrate analytics (Google/Yandex)
- [ ] Add cookie consent banner
- [ ] Set up email notifications

---

## ❓ Common Questions

**Q: Site runs but fonts look different?**  
A: You need to add Gilroy font files to `/public/fonts/`. See font guide.

**Q: How do I change the phone number?**  
A: Update in Header.js and Footer.js files.

**Q: Can I add more pages?**  
A: Yes! Create new files in `/pages/` with SEO props.

**Q: How do I change colors?**  
A: Edit CSS variables in `styles/globals.css`.

**Q: Is it mobile-friendly?**  
A: Yes! Fully responsive with mobile menu.

---

## 📚 Documentation

- **README.md** - Full project documentation
- **IMPLEMENTATION_SUMMARY.md** - What was built
- **This file** - Quick start guide

---

## 🆘 Need Help?

### File Structure
```
components/     - Reusable components
pages/          - Website pages
styles/         - Global and module CSS
public/         - Static assets
```

### Key Components
- **Layout** - Wraps all pages
- **Header** - Navigation and menu
- **Footer** - Site footer
- **SEO** - Meta tags management

---

## ✨ What Works Right Now

✅ Navigation with dropdown  
✅ Mobile menu  
✅ All pages accessible  
✅ SEO metadata  
✅ Responsive design  
✅ Social media links  
✅ Accessibility features  

---

## 🎯 Next Steps

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Add Gilroy fonts (optional)
4. Customize content
5. Deploy!

---

**You're ready to start!** 🎉

Run `npm run dev` and visit http://localhost:3000
