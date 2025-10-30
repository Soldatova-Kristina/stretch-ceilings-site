# Image Display Issue Fix - Design Document

## Overview

The stretch ceilings website experiences 404 errors for images when deployed to GitHub Pages at https://soldatova-kristina.github.io/stretch-ceilings-site/. The root cause is that `assetPath()` utility relies on `process.env.NEXT_PUBLIC_BASE_PATH`, which is unavailable in the browser (only exists during SSR/build). CSS background images rendered client-side fail to resolve correct paths with `/stretch-ceilings-site` prefix.

The solution must support both GitHub Pages deployment (base path `/stretch-ceilings-site`) and future TimeWeb static hosting (root path `/`).

## Problem Statement

Images fail to load due to:
1. `assetPath()` reads `process.env.NEXT_PUBLIC_BASE_PATH` at runtime — unavailable in browser
2. CSS background images in inline styles execute client-side without environment variables
3. Base path not embedded into bundled code, causing wrong URLs (`/images/...` instead of `/stretch-ceilings-site/images/...`)

## Root Cause Analysis

**Current Behavior**:
- Build sets `NEXT_PUBLIC_BASE_PATH` environment variable during SSR/SSG phase
- `assetPath()` function reads `process.env.NEXT_PUBLIC_BASE_PATH`
- Server-side rendering has access to this variable → paths are correct in initial HTML
- Client-side JavaScript has NO access to `process.env` → returns `/images/...` instead of `/stretch-ceilings-site/images/...`
- Result: CSS background images in inline styles fail with 404 errors

**Why This Happens**:
Environment variables prefixed with `NEXT_PUBLIC_*` are embedded at build time only in specific locations. Utility functions imported and executed client-side cannot access `process.env` in the browser runtime.

## Solution Design

### Strategy

Replace runtime `process.env` lookup with a **build-time constant** exported from `next.config.mjs` and imported by utility functions. Next.js bundler will inline this constant during build, making it available in both server and client bundles.

### Implementation Approach

| Component | Current Behavior | Target Behavior |
|-----------|-----------------|------------------|
| `next.config.mjs` | Sets `env.NEXT_PUBLIC_BASE_PATH` | **Exports named constant `BASE_PATH`** + sets env variable |
| `utils/assetPath.js` | Reads `process.env.NEXT_PUBLIC_BASE_PATH` at runtime | **Imports `BASE_PATH` from config** |
| `utils/imageLoader.js` | Hardcoded check for `/stretch-ceilings-site/` | **Imports `BASE_PATH` from config** |

### Modified Asset Path Logic

**File**: `utils/assetPath.js`

**New Logic**:
1. Import `BASE_PATH` constant from `next.config.mjs`
2. Remove leading slash from input path if present
3. Return `BASE_PATH + '/' + cleanPath` if base path exists, otherwise `'/' + cleanPath`

**Example**:
```
Input: '/images/hero.png'
BASE_PATH: '/stretch-ceilings-site'
Output: '/stretch-ceilings-site/images/hero.png'
```

### Modified Image Loader Logic

**File**: `utils/imageLoader.js`

**New Logic**:
1. Import `BASE_PATH` constant from `next.config.mjs`
2. If `src` already starts with `BASE_PATH` → return as-is
3. If `src` is absolute URL (http/https) → return as-is
4. If `src` starts with `/` → return `BASE_PATH + src`
5. Otherwise → return `src`

### Configuration Export Pattern

**File**: `next.config.mjs`

Calculate base path based on environment variables:
- If `DEPLOY_TARGET === 'gh'` → `'/stretch-ceilings-site'`
- Else if `BASE_PATH` env var exists → use its value
- Else → `''` (empty string for root deployment)

Export as named constant **before** default config export.

## Files to Modify

| File Path | Modification Type | Purpose |
|-----------|------------------|---------|
| `next.config.mjs` | Add named export | Export `BASE_PATH` constant before default export |
| `utils/assetPath.js` | Change import | Import `BASE_PATH` from config instead of reading `process.env` |
| `utils/imageLoader.js` | Change import | Import `BASE_PATH` from config instead of hardcoded check |

**No other files require changes** — all components already use these utility functions.

## Testing Strategy

1. **Build without environment variables**:
   ```bash
   npm run build
   ```
   Verify paths in `out/index.html` are `/images/...` (root paths)

2. **Build with GitHub Pages target**:
   ```bash
   DEPLOY_TARGET=gh npm run build
   ```
   Verify paths in `out/index.html` are `/stretch-ceilings-site/images/...`

3. **Browser verification**:
   - Deploy to GitHub Pages
   - Open DevTools → Network tab
   - Confirm zero 404 errors for images
   - Check all hero sections, backgrounds, and portfolio images load

## Success Criteria

1. Zero 404 errors in browser console for image resources
2. All images display correctly on GitHub Pages deployment
3. Build completes without warnings
4. Solution works for both GitHub Pages (`/stretch-ceilings-site`) and TimeWeb (root `/`) deployments
