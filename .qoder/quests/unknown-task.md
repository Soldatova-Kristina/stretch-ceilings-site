# Absolute Image Path Configuration for Multi-Environment Deployment

## Overview

This design outlines the systematic approach to ensure all image paths in the stretch-ceilings-site application are absolute and correctly configured for deployment across multiple hosting environments (GitHub Pages with `/stretch-ceilings-site` basePath and Timeweb with root `/` basePath).

### Business Context

The application must support two distinct deployment targets:
- **GitHub Pages**: Requires `/stretch-ceilings-site` basePath prefix for all assets
- **Timeweb**: Operates at root level with empty basePath or custom subdirectory path

All image references must dynamically adapt to the deployment environment without manual intervention, ensuring consistent asset loading across platforms.

## Current State Analysis

### Existing Infrastructure

The project already has foundational basePath handling:

| Component | Current State | Purpose |
|-----------|---------------|---------|
| `next.config.mjs` | Configures basePath based on `DEPLOY_TARGET` or `BASE_PATH` environment variables | Build-time configuration |
| `utils/assetPath.js` | Helper function that prepends `NEXT_PUBLIC_BASE_PATH` to relative paths | Runtime path resolution |
| `utils/imageLoader.js` | Custom Next.js image loader with basePath support | Next.js Image component integration |
| `scripts/fix-css-paths.mjs` | Post-build script to rewrite static CSS paths | Static file path correction |

### Environment Configuration Matrix

| Environment | Variable | BasePath Value | Build Command |
|-------------|----------|----------------|---------------|
| GitHub Pages | `DEPLOY_TARGET=gh` | `/stretch-ceilings-site` | `npm run build:gh` |
| Timeweb Root | (none) | `` (empty) | `npm run build:timeweb` |
| Timeweb Subdirectory | `BASE_PATH=/custom-path` | `/custom-path` | `npm run build:timeweb-subpath` |

## Architecture

### Path Resolution Flow

```mermaid
flowchart TD
    A[Image Reference] --> B{Image Type}
    B -->|Next.js Image Component| C[imageLoader.js]
    B -->|Regular img tag| D[assetPath helper]
    B -->|CSS Background| E[Inline Style or Post-build Script]
    
    C --> F[Prepend NEXT_PUBLIC_BASE_PATH]
    D --> F
    E --> G{Rendering Context}
    
    G -->|Component inline style| H[assetPath in backgroundImage]
    G -->|Static CSS| I[fix-css-paths.mjs post-build]
    
    F --> J[Absolute Path with basePath]
    H --> J
    I --> J
    
    J --> K{Deployment Target}
    K -->|GitHub Pages| L[/stretch-ceilings-site/images/...]
    K -->|Timeweb| M[/images/...]
```

### Component Layer Architecture

``mermaid
graph TB
    subgraph "Build Configuration Layer"
        NC[next.config.mjs]
        ENV[Environment Variables]
    end
    
    subgraph "Runtime Utilities Layer"
        AP[assetPath.js]
        IL[imageLoader.js]
    end
    
    subgraph "Component Layer"
        IMG[Next.js Image Components]
        STYLE[Inline CSS Styles]
        HTML[Regular img tags]
    end
    
    subgraph "Static Asset Layer"
        CSS[CSS Module Files]
        SCSS[Global CSS Files]
    end
    
    subgraph "Post-Build Layer"
        SCRIPT[fix-css-paths.mjs]
    end
    
    ENV --> NC
    NC --> AP
    NC --> IL
    
    AP --> STYLE
    AP --> HTML
    IL --> IMG
    
    STYLE --> SCRIPT
    CSS --> SCRIPT
    SCSS --> SCRIPT
```

## Implementation Strategy

### 1. Next.js Image Component Usage

**Requirement**: All `<Image>` components from `next/image` must receive absolute paths through the custom loader.

**Current Implementation Pattern**:
```
Image component receives path → imageLoader.js intercepts → Prepends NEXT_PUBLIC_BASE_PATH
```

**Component Implementation Pattern**:

| Pattern | Correct Usage | Notes |
|---------|---------------|-------|
| Static paths | `<Image src="/images/hero.jpg" ... />` | Loader automatically prepends basePath |
| Dynamic paths from data | `<Image src={item.imageSrc} ... />` | Data must contain paths starting with `/` |
| External URLs | `<Image src="https://..." ... />` | Loader skips basePath for absolute URLs |

**Affected Components**:
- About
- AdvantagesBlock
- BeforeAfter
- CeilingGrid
- Footer
- Header
- HeroSection
- ImageSlider
- MaterialsPreview
- ReviewCard
- ServiceBlock
- TextileFeatures
- Pages: contacts, reviews

**Validation Rule**: Image paths in data files must start with `/` to ensure proper resolution.

### 2. Regular HTML img Tag Handling

**Requirement**: Standard `<img>` tags must use the `assetPath` helper function.

**Implementation Pattern**:

The `assetPath` utility function provides:
- Automatic basePath prepending for relative paths
- Pass-through for absolute HTTP/HTTPS URLs
- Path normalization (ensures leading `/`)

**Usage Examples**:

| Scenario | Implementation |
|----------|----------------|
| Direct img tag | `<img src={assetPath('/images/icon.png')} alt="..." />` |
| In data object | Store `/images/...` paths, apply `assetPath` when rendering |

**Current Status**: No standard `<img>` tags found in component scan.

### 3. CSS Background Image Handling

**Requirement**: All CSS background images must receive absolute paths compatible with basePath configuration.

#### 3.1 Inline CSS Styles (Component-level)

**Pattern**: Use `assetPath` helper within inline style objects.

**Implementation Approach**:

Components creating inline styles with background images must construct style objects using `assetPath`:

```
const styleObject = {
  backgroundImage: `url(${assetPath('/images/texture/pattern.jpg')})`
}
```

**Currently Implemented Components**:
- HeroSection (mobile background + heroBackground)
- Header (white/black texture backgrounds)
- Footer (texture background)
- FinishingComparison (card backgrounds)
- StepsAccordion (card backgrounds)
- contacts.js page
- faq.js page
- portfolio.js page

**Pattern Analysis**:

| Component | Implementation | Status |
|-----------|----------------|--------|
| HeroSection | CSS variable + inline style with assetPath | ✓ Correct |
| Header | Inline style object with assetPath | ✓ Correct |
| Footer | Inline style object with assetPath | ✓ Correct |
| FinishingComparison | Inline style object with assetPath | ✓ Correct |
| StepsAccordion | Inline style object with assetPath | ✓ Correct |
| SectionLayout | Direct URL without assetPath | ⚠ Requires Update |

**SectionLayout Special Case**:

The component accepts `backgroundImage` prop and applies it directly:
```
bgStyle.backgroundImage = `url(${backgroundImage})`
```

**Resolution Strategy**:
- Option A: Calling components pass pre-processed paths using `assetPath`
- Option B: SectionLayout internally applies `assetPath` to the prop value
- **Recommended**: Option B ensures consistent behavior regardless of caller

#### 3.2 Static CSS Files

**Pattern**: Post-build script rewrites URL paths in compiled CSS.

**Current Implementation**:

The `fix-css-paths.mjs` script processes all CSS files in the build output and replaces relative paths with basePath-prefixed absolute paths.

**Processing Rules**:

| Asset Type | Regex Pattern | Replacement |
|------------|---------------|-------------|
| Fonts | `/fonts/...` | `${basePath}/fonts/...` |
| Images | `/images/...` | `${basePath}/images/...` |
| Icons | `/icons/...` | `${basePath}/icons/...` |

**CSS Module Source Requirements**:

All background-image declarations in CSS modules must use absolute paths starting with `/`:

```
background-image: url(/images/texture/pattern.jpg);
```

**Script Behavior**:
- Scans entire `out/` directory recursively
- Processes `.css` and `.html` files
- Skips processing when basePath is empty (Timeweb root deployment)
- Reports modified files to console

**Identified Issue**:

File: `pages/reviews.module.css`
Line: `background-image: url(/images/texture/black_djins.png);`
Status: ✓ Correct format - will be processed by fix-css-paths.mjs

### 4. Data File Path Convention

**Requirement**: All image paths stored in data files must be absolute (starting with `/`).

**Data Files with Image Paths**:

| File | Path Format | Example |
|------|-------------|---------|
| portfolioData.js | `/images/portfolio/{id}/{file}.jpg` | `/images/portfolio/1/3.jpg` |
| wallsPortfolioData.js | `/images/...` | (similar pattern expected) |
| beforeAfterData.js | `/images/...` | (inspection needed) |
| ceilingTypes.js | `/images/...` | (inspection needed) |
| lightTypes.js | `/images/...` | (inspection needed) |
| materialsData.js | `/images/...` | (inspection needed) |

**Validation Checklist**:

For each data file containing image paths:
1. Verify all paths start with `/`
2. Confirm paths match actual file locations in `public/` directory
3. Ensure no hardcoded basePath prefixes exist

### 5. Build Process Integration

``mermaid
sequenceDiagram
    participant Dev as Developer
    participant NPM as npm script
    participant Next as Next.js Build
    participant Config as next.config.mjs
    participant Script as fix-css-paths.mjs
    participant Out as out/ directory
    
    Dev->>NPM: npm run build:gh
    NPM->>Config: Set DEPLOY_TARGET=gh
    Config->>Config: basePath = /stretch-ceilings-site
    Config->>Next: Configure build
    Next->>Out: Generate static files
    Next->>NPM: Build complete
    NPM->>Script: Run postbuild hook
    Script->>Out: Scan CSS/HTML files
    Script->>Out: Rewrite paths with basePath
    Script->>Dev: Report modified files
```

**Build Script Responsibilities**:

| Script | Purpose | When It Runs |
|--------|---------|--------------|
| `build:gh` | Sets `DEPLOY_TARGET=gh` | Manual GitHub deployment |
| `build:timeweb` | No environment variables | Manual Timeweb deployment |
| `build:timeweb-subpath` | Sets custom `BASE_PATH` | Timeweb subdirectory deployment |
| `postbuild` | Automatically runs `fix-css-paths.mjs` | After every build |

## Testing Strategy

### Test Matrix

| Test Case | Environment | Expected Result |
|-----------|-------------|-----------------|
| Next.js Image components load | GitHub Pages | Requests to `/stretch-ceilings-site/images/...` |
| Next.js Image components load | Timeweb | Requests to `/images/...` |
| CSS background images load | GitHub Pages | Requests to `/stretch-ceilings-site/images/...` |
| CSS background images load | Timeweb | Requests to `/images/...` |
| Inline style backgrounds load | GitHub Pages | Requests to `/stretch-ceilings-site/images/...` |
| Inline style backgrounds load | Timeweb | Requests to `/images/...` |
| Font files load | Both | Correct basePath prefix |
| Icon files load | Both | Correct basePath prefix |

### Verification Procedure

**For GitHub Pages Deployment**:
1. Build with `npm run build:gh`
2. Inspect Network tab in browser DevTools
3. Verify all asset requests include `/stretch-ceilings-site` prefix
4. Check Console for 404 errors
5. Validate images render correctly across all pages

**For Timeweb Deployment**:
1. Build with `npm run build:timeweb`
2. Inspect Network tab in browser DevTools
3. Verify all asset requests use root-relative paths (`/images/...`)
4. Confirm no `/stretch-ceilings-site` prefix appears
5. Test all interactive image components (sliders, galleries)

**Cross-Platform Validation**:
- Compare visual consistency between deployments
- Verify mobile responsive images load correctly
- Check lazy-loaded images function properly

## Required Updates

### Component Updates

| Component | File | Required Change | Priority |
|-----------|------|-----------------|----------|
| SectionLayout | `components/SectionLayout/SectionLayout.js` | Apply `assetPath` to `backgroundImage` prop internally | High |

**Implementation Detail**:

Current problematic pattern:
```
const bgStyle = {
  backgroundImage: `url(${backgroundImage})`
};
```

Updated pattern:
```
import { assetPath } from '@/utils/assetPath';

const bgStyle = {
  backgroundImage: `url(${assetPath(backgroundImage)})`
};
```

### Data File Audit

**Action Required**: Verify all data files use absolute paths.

Files to inspect and validate:
1. `data/beforeAfterData.js`
2. `data/ceilingTypes.js`
3. `data/lightTypes.js`
4. `data/materialsData.js`
5. `data/technologyTypes.js`
6. `data/textileFeaturesData.js`
7. `data/wallsPortfolioData.js`

**Validation Criteria**:
- All image paths must start with `/`
- No hardcoded basePath values
- Paths match actual file structure in `public/` directory

### CSS File Audit

**Action Required**: Ensure all CSS modules use absolute paths for background images.

**Current Finding**:
- `pages/reviews.module.css`: ✓ Already uses absolute path
- Other CSS modules: Inspection needed

**Search Pattern**:
Look for `background-image: url(` declarations and verify path format.

**Expected Format**:
```
background-image: url(/images/texture/pattern.jpg);
```

**Incorrect Formats to Fix**:
```
background-image: url(../images/pattern.jpg);  ❌
background-image: url(images/pattern.jpg);      ❌
```

## Deployment Workflow

### GitHub Pages Deployment

``mermaid
flowchart LR
    A[Developer commits] --> B[Run npm run build:gh]
    B --> C[DEPLOY_TARGET=gh set]
    C --> D[Next.js build with basePath]
    D --> E[fix-css-paths.mjs runs]
    E --> F[Copy to /stretch-ceilings-site subdirectory]
    F --> G[Deploy to gh-pages branch]
    G --> H[GitHub Pages serves from /stretch-ceilings-site]
```

**Commands**:
```
npm run build:gh
npm run deploy:gh
```

### Timeweb Deployment

``mermaid
flowchart LR
    A[Developer commits] --> B[Run npm run build:timeweb]
    B --> C[No basePath set]
    C --> D[Next.js build with empty basePath]
    D --> E[fix-css-paths.mjs skips processing]
    E --> F[Manual upload to Timeweb]
    F --> G[Timeweb serves from root]
```

**Commands**:
```
npm run build:timeweb
# Manual FTP/SFTP upload
```

## Risk Analysis

| Risk | Impact | Mitigation |
|------|--------|------------|
| Missed image reference during audit | High - 404 errors in production | Systematic file-by-file review + automated testing |
| CSS path not starting with `/` | High - Post-build script won't process | CSS module linting + code review |
| Data file contains relative paths | Medium - Runtime path resolution fails | Data validation script |
| SectionLayout receives full URLs | Low - assetPath handles gracefully | Input validation in component |
| Build script not executed | High - Paths incorrect in production | CI/CD pipeline enforcement |

## Success Criteria

**Definition of Done**:

1. **Image Loading**: All images load correctly on both GitHub Pages and Timeweb
2. **Network Requests**: Browser DevTools Network tab shows correct basePath for each environment
3. **No Console Errors**: Zero 404 errors for image assets
4. **Visual Consistency**: Identical visual appearance across deployment environments
5. **Data Integrity**: All data files audited and validated
6. **Component Compliance**: All components using correct path resolution patterns
7. **Build Process**: Automated build scripts handle all path transformations
8. **Documentation**: Clear deployment instructions for both environments

**Validation Metrics**:

- 100% of Next.js Image components using imageLoader correctly
- 100% of inline styles using assetPath helper
- 100% of CSS modules using absolute paths
- 0 failed image loads in production
- 0 manual path adjustments required between deployments
