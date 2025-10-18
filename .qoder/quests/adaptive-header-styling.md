# Adaptive Header Styling Design

## Overview

This design defines the visual styling specifications for an adaptive header component that displays in three distinct modes based on the current page context: homepage, services pages, and other pages. The header component logic is already implemented; this design focuses exclusively on the CSS styling in `Header.module.css` to match the Figma specifications.

**Design Goals:**
- Provide three distinct header layouts with precise spacing and positioning
- Maintain visual consistency with brand color (#6D4C49) for active states
- Conditionally show/hide the CTA button based on page context
- Ensure pixel-perfect implementation of desktop specifications

**User Value:**
- Clear visual distinction between different sections of the site
- Simplified navigation on service pages
- Consistent call-to-action placement across non-homepage pages

## Technology Stack

- **Framework**: Next.js with React
- **Styling**: CSS Modules (Header.module.css)
- **Typography**: Gilroy font family (inherited from global styles)
- **Responsive Approach**: Desktop-first (mobile responsiveness not in scope)

## Header Display Modes

The header adapts its layout and content based on the current route, providing three distinct modes:

### Mode Determination Logic

| Mode | Routes | Navigation Items | Dropdown | CTA Button Visible |
|------|--------|-----------------|----------|-------------------|
































