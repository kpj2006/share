# SocialShareButton

A lightweight social sharing component for web applications. Zero dependencies, framework-agnostic, and fully customizable.

## Features

- Multiple social platforms (WhatsApp, Facebook, X, LinkedIn, Telegram, Reddit, Email)
- Zero dependencies - pure vanilla JavaScript
- Works with React, Vue, Angular, or plain HTML
- Auto-detects current URL and page title
- Fully responsive and mobile-ready
- Customizable themes (dark/light)
- Lightweight (< 10KB gzipped)

## Installation

### Via CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kpj2006/share@v1.0.0/src/social-share-button.css">
<script src="https://cdn.jsdelivr.net/gh/kpj2006/share@v1.0.0/src/social-share-button.js"></script>
```

## Quick Start

### React Integration

**Option 1: Simple CDN Approach (Recommended - No Files to Create)**

> ⚠️ **Important:** This option requires ZERO file creation. Do NOT create any `.jsx` or `.js` files. Just use existing components.

**Step 1:** Add CDN links to `public/index.html` (just these two lines):

```html
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kpj2006/share@v1.0.0/src/social-share-button.css">
</head>
<body>
  <div id="root"></div>
  <script src="https://cdn.jsdelivr.net/gh/kpj2006/share@v1.0.0/src/social-share-button.js"></script>
</body>
```

**Step 2:** In your **existing**  React component (e.g., `MainLayout.jsx`, `Header.jsx`, or wherever you want the button):

```jsx
import { useEffect, useRef } from 'react';

function MyComponent() {
  const shareButtonInitialized = useRef(false);

  useEffect(() => {
    if (!shareButtonInitialized.current) {
      new window.SocialShareButton({
        container: '#share-button'
      });
      shareButtonInitialized.current = true;
    }
  }, []);

  return (
    <div>
      {/* Your existing header code */}
      <div id="share-button"></div>  {/* Add this single line where you want the button */}
    </div>
  );
}
```

**That's it!** No new files. No copying. Just CDN + one `<div>` tag.

> 💡 **Note:** The `useRef` prevents creating duplicate buttons when the component re-renders (important for Next.js strict mode or hot reloading).

---

**Option 2: React Component Wrapper (Advanced - Optional)**

> 📝 Only use this if you want a dedicated component file for cleaner code organization.

Copy `src/social-share-button-react.jsx` from this repo to your project and use it:

```jsx
import { SocialShareButton } from './components/SocialShareButton';

function App() {
  return <SocialShareButton />;
}
```

**Both options automatically:**
- Use current page URL (`window.location.href`)
- Use current page title (`document.title`)
- Update when navigating between routes

### Via npm

For production apps, install via npm:

```bash
npm install social-share-button-aossie
```

Then import in your project:

```javascript
import SocialShareButton from 'social-share-button-aossie';
import 'social-share-button-aossie/src/social-share-button.css';

new SocialShareButton({
  container: '#share-button'
});
```

## Configuration

### Basic Options

```jsx
<SocialShareButton
  url="https://custom-url.com"           // Optional: defaults to current URL
  title="Custom Title"                    // Optional: defaults to page title
  buttonStyle="primary"                   // default | primary | compact | icon-only
  theme="dark"                            // dark | light
/>
```

### Available Platforms

```jsx
<SocialShareButton
  platforms={['twitter', 'linkedin', 'facebook']}
/>
```

Supported: `whatsapp`, `facebook`, `twitter`, `linkedin`, `telegram`, `reddit`, `email`

### Button Styles

```jsx
// Default style
<SocialShareButton buttonStyle="default" />

// Primary gradient
<SocialShareButton buttonStyle="primary" />

// Compact size
<SocialShareButton buttonStyle="compact" />

// Icon only (no text)
<SocialShareButton buttonStyle="icon-only" />
```

### Callbacks

```jsx
<SocialShareButton
  onShare={(platform, url) => {
    console.log(`Shared on ${platform}: ${url}`);
  }}
  onCopy={(url) => {
    console.log('Link copied:', url);
  }}
/>
```

### Complete Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `url` | string | `window.location.href` | URL to share |
| `title` | string | `document.title` | Title of content |
| `description` | string | `''` | Description text |
| `platforms` | array | All platforms | Platforms to show |
| `theme` | string | `'dark'` | `'dark'` or `'light'` |
| `buttonText` | string | `'Share'` | Button text |
| `buttonStyle` | string | `'default'` | Button style variant |
| `onShare` | function | `null` | Share callback |
| `onCopy` | function | `null` | Copy callback |

## Examples

### Mobile Menu Integration

```jsx
<nav>
  <SocialShareButton buttonStyle="icon-only" />
</nav>
```

### Custom Platform Selection

```jsx
// Professional networks only
<SocialShareButton platforms={['linkedin', 'twitter', 'email']} />

// Messaging apps only  
<SocialShareButton platforms={['whatsapp', 'telegram']} />
```

### Custom URL & Title

```jsx
<SocialShareButton
  url="https://my-article.com/post/123"
  title="Amazing Article Title"
  description="Read this awesome content!"
/>
```

## Demo

Open `index.html` in your browser to see all features in action.

## Troubleshooting

### Multiple Share Buttons Appearing

**Problem:** Share button duplicates on component re-render (Next.js strict mode, hot reload)

**Cause:** `useEffect` runs multiple times creating multiple instances

**Solution:** Use `useRef` to track initialization (already included in Option 1 code above)

### Button Not Appearing

**Problem:** Share button doesn't render

**Cause:** Script loads after React renders the component

**Solution:** Ensure CDN script is in `index.html` **before** `</body>` tag, or add null check:
```jsx
useEffect(() => {
  if (window.SocialShareButton) {
    new window.SocialShareButton({ container: '#share-button' });
  }
}, []);
```

### Modal Not Opening

**Problem:** Clicking button does nothing

**Cause:** CSS file not loaded or container ID mismatch

**Solution:** 
- Verify CSS CDN link is in `<head>`
- Ensure `container: '#share-button'` matches your `<div id="share-button">`

### URL Not Updating on Route Change

**Problem:** Share button shows old URL after navigation (SPA)

**Cause:** Component initialized once, doesn't track route changes

**Solution:** Update URL manually on route change:
```jsx
const shareButton = useRef(null);

useEffect(() => {
  shareButton.current = new window.SocialShareButton({ container: '#share-button' });
}, []);

useEffect(() => {
  if (shareButton.current) {
    shareButton.current.updateOptions({ url: window.location.href });
  }
}, [pathname]); // pathname from router
```

### TypeError: SocialShareButton is not a constructor

**Problem:** `Uncaught TypeError: window.SocialShareButton is not a constructor`

**Cause:** CDN script not loaded yet or blocked by ad blocker

**Solution:** Add fallback check or use `onLoad` event:
```jsx
useEffect(() => {
  const loadButton = () => {
    if (window.SocialShareButton) {
      new window.SocialShareButton({ container: '#share-button' });
    }
  };
  
  if (document.readyState === 'complete') {
    loadButton();
  } else {
    window.addEventListener('load', loadButton);
    return () => window.removeEventListener('load', loadButton);
  }
}, []);
```

## Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

© 2025 The Stable Order.
