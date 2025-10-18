# Header Testing Guide

## Quick Start

```bash
npm run dev
# or
yarn dev
```

Open browser at `http://localhost:3000`

## Visual Testing Checklist

### 1. Homepage (`/`)
- [ ] Header height: 90px
- [ ] Logo positioned at 90px from left
- [ ] Navigation shows: Главная, Услуги, Наши работы, FAQ, Отзывы, Контакты
- [ ] "Главная" is highlighted in #6D4C49
- [ ] CTA button is NOT visible
- [ ] Dropdown arrow visible next to "Услуги"
- [ ] Navigation items spaced 40px apart

### 2. Services - Ceilings (`/services/ceilings`)
- [ ] Header height: 90px
- [ ] Navigation shows only: Главная, Потолки, Стены
- [ ] "Потолки" is highlighted in #6D4C49
- [ ] CTA button IS visible on the right
- [ ] CTA button: 286px × 44px with border
- [ ] CTA text: "ЗАПИСАТЬСЯ НА ЗАМЕР" (uppercase)
- [ ] Arrow icon visible on CTA button (38px width)
- [ ] No dropdown functionality

### 3. Services - Walls (`/services/walls`)
- [ ] Header height: 90px
- [ ] Navigation shows only: Главная, Потолки, Стены
- [ ] "Стены" is highlighted in #6D4C49
- [ ] CTA button IS visible on the right
- [ ] No dropdown functionality

### 4. Portfolio (`/portfolio`)
- [ ] Full navigation visible
- [ ] "Наши работы" is highlighted in #6D4C49
- [ ] CTA button IS visible
- [ ] Dropdown functionality enabled

### 5. FAQ (`/faq`)
- [ ] Full navigation visible
- [ ] "FAQ" is highlighted in #6D4C49
- [ ] CTA button IS visible
- [ ] Dropdown functionality enabled

### 6. Reviews (`/reviews`)
- [ ] Full navigation visible
- [ ] "Отзывы" is highlighted in #6D4C49
- [ ] CTA button IS visible
- [ ] Dropdown functionality enabled

### 7. Contacts (`/contacts`)
- [ ] Full navigation visible
- [ ] "Контакты" is highlighted in #6D4C49
- [ ] CTA button IS visible
- [ ] Dropdown functionality enabled

## Interaction Testing

### Dropdown Functionality (Homepage & Standard Pages)
1. [ ] Click "Услуги" → dropdown opens
2. [ ] Dropdown shows "Потолки" and "Стены"
3. [ ] Arrow icon rotates 180deg when open
4. [ ] Click outside → dropdown closes
5. [ ] Press Escape → dropdown closes
6. [ ] Dropdown appears with fade-in animation

### Hover States
1. [ ] Hover over navigation item → color changes to #6D4C49
2. [ ] Hover over CTA button → background turns black, text white
3. [ ] Hover over dropdown item → background light gray

### CTA Button
1. [ ] Click CTA button → initiates phone call (tel:+79001234567)
2. [ ] Button displays uppercase text
3. [ ] Arrow icon visible on right side
4. [ ] Proper spacing: 18px padding on both sides

## Spacing Verification (Use DevTools)

### Header Container
- [ ] Height: 90px
- [ ] Max-width: 1480px

### Logo
- [ ] Margin-left: 90px
- [ ] Margin-right: 45px
- [ ] Width: 94px
- [ ] Height: 79px
- [ ] Padding: 5.5px top/bottom

### Navigation (Homepage/Standard)
- [ ] Width: 623px
- [ ] Left padding: 10px
- [ ] Right padding: 30px
- [ ] Item gap: 40px
- [ ] Vertical padding: 35.5px

### Navigation (Services)
- [ ] Width: 315px
- [ ] Left padding: 10px
- [ ] Right padding: 30px
- [ ] Item gap: 40px
- [ ] Right margin: 521px

### CTA Button
- [ ] Width: 286px
- [ ] Height: 44px
- [ ] Border-radius: 20px
- [ ] Border: 1px solid black
- [ ] Text left padding: 18px
- [ ] Arrow width: 38px
- [ ] Arrow right padding: 18px
- [ ] Right margin: 149.5px

## Typography Verification

### Navigation Links
- [ ] Font: Gilroy-Regular
- [ ] Size: 16px
- [ ] Weight: 400 (default)
- [ ] Weight: 600 (active)
- [ ] Color: #000000 (default)
- [ ] Color: #6D4C49 (active/hover)

### CTA Button
- [ ] Font: Gilroy-Medium
- [ ] Size: 16px
- [ ] Weight: 500
- [ ] Text-transform: uppercase
- [ ] Color: #000000 (default)
- [ ] Color: #FFFFFF (hover)

## Mobile Testing (< 1024px)

1. [ ] Hamburger menu visible
2. [ ] Desktop navigation hidden
3. [ ] Desktop CTA button hidden
4. [ ] Click hamburger → mobile menu slides in
5. [ ] Mobile menu shows all navigation items
6. [ ] Mobile CTA button visible ("Позвонить")
7. [ ] Overlay appears when menu open
8. [ ] Click overlay → menu closes
9. [ ] Press Escape → menu closes

## Accessibility Testing

### Keyboard Navigation
1. [ ] Tab through all navigation items
2. [ ] Tab reaches CTA button (when visible)
3. [ ] Enter/Space activates links
4. [ ] Enter/Space toggles dropdown
5. [ ] Escape closes dropdown
6. [ ] Focus visible on all interactive elements

### ARIA Attributes
1. [ ] Navigation has aria-label
2. [ ] Dropdown toggle has aria-expanded
3. [ ] Dropdown toggle has aria-haspopup="true"
4. [ ] Icons have aria-hidden="true"

### Screen Reader
1. [ ] Navigation announced as "Основная навигация"
2. [ ] Active page clearly indicated
3. [ ] Dropdown state changes announced
4. [ ] Link purposes clear

## Browser Testing

Test on all browsers at 1024px+ width:

### Chrome
- [ ] All spacing correct
- [ ] Fonts render properly
- [ ] Animations smooth
- [ ] Dropdown positions correctly

### Firefox
- [ ] All spacing correct
- [ ] Fonts render properly
- [ ] Animations smooth
- [ ] Dropdown positions correctly

### Safari
- [ ] All spacing correct
- [ ] Fonts render properly
- [ ] Animations smooth
- [ ] Dropdown positions correctly

### Edge
- [ ] All spacing correct
- [ ] Fonts render properly
- [ ] Animations smooth
- [ ] Dropdown positions correctly

## DevTools Inspection Commands

```javascript
// Check header height
document.querySelector('header').offsetHeight // Should be 90

// Check navigation width (homepage)
document.querySelector('header[data-mode="homepage"] .navList').offsetWidth // Should be 623

// Check navigation width (services)
document.querySelector('header[data-mode="services"] .navList').offsetWidth // Should be 315

// Check CTA button dimensions
const cta = document.querySelector('.ctaButton');
console.log(cta.offsetWidth, cta.offsetHeight); // Should be 286, 44

// Check logo spacing
const logo = document.querySelector('.logo');
const logoStyles = window.getComputedStyle(logo);
console.log(logoStyles.marginLeft, logoStyles.marginRight); // Should be 90px, 45px
```

## Common Issues & Solutions

### Issue: CTA button showing on homepage
**Solution**: Verify `router.pathname === '/'` check in Header.js

### Issue: Wrong navigation items on services pages
**Solution**: Check `getNavItems()` function logic

### Issue: Spacing incorrect
**Solution**: Verify CSS media query at 1024px is applying

### Issue: Active state not highlighting
**Solution**: Check `isActive()` function and route matching

### Issue: Dropdown not working on services pages
**Solution**: Correct - dropdown should be disabled on services pages

## Sign-off Criteria

All checkboxes above must be checked before considering the implementation complete.

**Tested by**: _________________
**Date**: _________________
**Browser versions**: _________________
**Screen resolutions tested**: _________________

---

**Note**: This implementation follows the Figma design specifications exactly. Any deviations should be documented and approved by the design team.
