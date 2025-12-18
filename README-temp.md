# SocialShareButton

Lightweight social sharing component for web applications. Zero dependencies, framework-agnostic.

[![npm version](https://img.shields.io/npm/v/social-share-button-aossie.svg)](https://www.npmjs.com/package/social-share-button-aossie)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Features

- 🌐 Multiple platforms: WhatsApp, Facebook, X, LinkedIn, Telegram, Reddit, Email
- 🎯 Zero dependencies - pure vanilla JavaScript
- ⚛️ Framework support: React, Next.js, Vue, Angular, or plain HTML
- 🔄 Auto-detects current URL and page title
- 📱 Fully responsive and mobile-ready
- 🎨 Customizable themes (dark/light)
- ⚡ Lightweight (< 10KB gzipped)

---

## Installation

### Via CDN (Recommended)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kpj2006/share@v1.0.0/src/social-share-button.css">
<script src="https://cdn.jsdelivr.net/gh/kpj2006/share@v1.0.0/src/social-share-button.js"></script>
```

---

## Quick Start Guide

> 🚫 **IMPORTANT:** Do NOT create new files like `ShareButton.jsx` or `ShareButton.tsx`!  
> ✅ Add code directly to your **existing** component (Header, Navbar, etc.)

<details>
<summary><b>📦 Create React App</b></summary>

### Step 1: Add CDN to `public/index.html`

```html
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kpj2006/share@v1.0.0/src/social-share-button.css">
</head>
<body>
  <div id="root"></div>
  <script src="https://cdn.jsdelivr.net/gh/kpj2006/share@v1.0.0/src/social-share-button.js"></script>
</body>
```

### Step 2: In your **existing** React component (e.g., `MainLayout.jsx`, `Header.jsx`, or wherever you want the button):

```jsx
import { useEffect, useRef } from 'react';

function YourComponent() {  // Use your actual component name (Header, Navbar, etc.)
  const shareButtonRef = useRef(null);
  const initRef = useRef(false);

  useEffect(() => {
    if (initRef.current || !window.SocialShareButton) return;
    
    shareButtonRef.current = new window.SocialShareButton({
      container: '#share-button'
    });
    initRef.current = true;

    return () => {
      if (shareButtonRef.current?.destroy) {
        shareButtonRef.current.destroy();
      }
      initRef.current = false;
    };
  }, []);

  return (
    <header>
      <div id="share-button"></div>
    </header>
  );
}
```

</details>

<details>
<summary><b>▲ Next.js (App Router)</b></summary>

### Step 1: Add CDN to `app/layout.tsx`

```tsx
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/gh/kpj2006/share@v1.0.0/src/social-share-button.css" 
        />
      </head>
      <body>
        {children}
        <Script 
          src="https://cdn.jsdelivr.net/gh/kpj2006/share@v1.0.0/src/social-share-button.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
```

### Step 2: In your **existing** React component (e.g., `MainLayout.jsx`, `Header.jsx`, or wherever you want the button):

```tsx
'use client';

import { useEffect, useRef } from 'react';

export default function YourComponent() {  // Use your actual component name
  const shareButtonRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const initRef = useRef(false);

  useEffect(() => {
    const initButton = () => {
      if (initRef.current || !window.SocialShareButton || !containerRef.current) return;
      
      shareButtonRef.current = new window.SocialShareButton({
        container: '#share-button'
      });
      initRef.current = true;
    };

    if (window.SocialShareButton) {
      initButton();
    } else {
      const checkInterval = setInterval(() => {
        if (window.SocialShareButton) {
          clearInterval(checkInterval);
          initButton();
        }
      }, 100);

      return () => {
        clearInterval(checkInterval);
        if (shareButtonRef.current?.destroy) {
          shareButtonRef.current.destroy();
        }
        initRef.current = false;
      };
    }

    return () => {
      if (shareButtonRef.current?.destroy) {
        shareButtonRef.current.destroy();
      }
      initRef.current = false;
    };
  }, []);

  return (
    <header>
      <div id="share-button" ref={containerRef}></div>
    </header>
  );
}

declare global {
  interface Window {
    SocialShareButton: any;
  }
}
```

</details>

<details>
<summary><b>📄 Next.js (Pages Router)</b></summary>

### Step 1: Add CDN to `pages/_document.tsx`

```tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/gh/kpj2006/share@v1.0.0/src/social-share-button.css" 
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://cdn.jsdelivr.net/gh/kpj2006/share@v1.0.0/src/social-share-button.js"></script>
      </body>
    </Html>
  );
}
```

### Step 2: Use same component code as App Router above

</details>

<details>
<summary><b>⚡ Vite / Vue / Angular</b></summary>

### Step 1: Add CDN to `index.html`

```html
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kpj2006/share@v1.0.0/src/social-share-button.css">
</head>
<body>
  <div id="app"></div>
  <script src="https://cdn.jsdelivr.net/gh/kpj2006/share@v1.0.0/src/social-share-button.js"></script>
</body>
```

### Step 2: Initialize in component

```javascript
new window.SocialShareButton({
  container: '#share-button'
});
```

</details>

---

## Configuration

### Basic Options

```jsx
new SocialShareButton({
  url: 'https://example.com',       // Optional: defaults to window.location.href
  title: 'Custom Title',             // Optional: defaults to document.title
  buttonStyle: 'primary',            // default | primary | compact | icon-only
  theme: 'dark',                     // dark | light
  platforms: ['twitter', 'linkedin'] // Optional: defaults to all platforms
});
```

### Available Platforms

`whatsapp`, `facebook`, `twitter`, `linkedin`, `telegram`, `reddit`, `email`

### Button Styles

| Style | Description |
|-------|-------------|
| `default` | Standard button with icon and text |
| `primary` | Gradient button (recommended) |
| `compact` | Smaller size for tight spaces |
| `icon-only` | Icon without text |

### Callbacks

```jsx
new SocialShareButton({
  container: '#share-button',
  onShare: (platform, url) => {
    console.log(`Shared on ${platform}: ${url}`);
  },
  onCopy: (url) => {
    console.log('Link copied:', url);
  }
});
```

---

## Advanced Usage

### Using npm Package

```javascript
import SocialShareButton from 'social-share-button-aossie';
import 'social-share-button-aossie/src/social-share-button.css';

new SocialShareButton({
  container: '#share-button'
});
```

### React Wrapper Component (Optional)

If you want a reusable React component, copy `src/social-share-button-react.jsx` to your project:

```jsx
import { SocialShareButton } from './components/SocialShareButton';

function App() {
  return <SocialShareButton platforms={['twitter', 'linkedin']} />;
}
```

### Update URL Dynamically (SPA)

```jsx
const shareButton = useRef(null);

useEffect(() => {
  shareButton.current = new window.SocialShareButton({ 
    container: '#share-button' 
  });
}, []);

useEffect(() => {
  if (shareButton.current) {
    shareButton.current.updateOptions({ 
      url: window.location.href 
    });
  }
}, [pathname]); // Update on route change
```

---

## Troubleshooting

<details>
<summary><b>Multiple buttons appearing</b></summary>

**Cause:** Component re-renders creating duplicate instances

**Solution:** Use `useRef` to track initialization (already in examples above)

</details>

<details>
<summary><b>Button not appearing</b></summary>

**Cause:** Script loads after component renders

**Solution:** Add null check:
```jsx
if (window.SocialShareButton) {
  new window.SocialShareButton({ container: '#share-button' });
}
```

</details>

<details>
<summary><b>Modal not opening</b></summary>

**Cause:** CSS not loaded or ID mismatch

**Solution:** 
- Verify CSS CDN link in `<head>`
- Match container ID: `container: '#share-button'` = `<div id="share-button">`

</details>

<details>
<summary><b>TypeError: SocialShareButton is not a constructor</b></summary>

**Cause:** CDN script not loaded yet

**Solution:** Use interval polling (see Next.js example above)

</details>

<details>
<summary><b>URL not updating on navigation</b></summary>

**Cause:** Component initialized once, doesn't track routes

**Solution:** Use `updateOptions()` method (see Advanced Usage above)

</details>

---

## Examples

### Mobile Menu

```jsx
<nav>
  <div id="share-button"></div>
</nav>
```

### Custom Platforms

```jsx
// Professional networks only
new SocialShareButton({
  container: '#share-button',
  platforms: ['linkedin', 'twitter', 'email']
});

// Messaging apps only
new SocialShareButton({
  container: '#share-button',
  platforms: ['whatsapp', 'telegram']
});
```

### Custom Styling

```jsx
new SocialShareButton({
  container: '#share-button',
  buttonStyle: 'icon-only',
  theme: 'light'
});
```

---

## Demo

Open `index.html` in your browser to see all features.

---

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## License

MIT © 2025 The Stable Order

---

## Links

- **npm:** https://www.npmjs.com/package/social-share-button-aossie
- **GitHub:** https://github.com/AOSSIE-Org/SocialShareButton
- **CDN:** https://cdn.jsdelivr.net/gh/kpj2006/share@v1.0.0/
