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

**Option 1: Simple CDN Approach (No File Copying)**

**Step 1:** Add CDN links to `public/index.html` (just the CDN links, nothing else):

```html
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kpj2006/share@v1.0.0/src/social-share-button.css">
</head>
<body>
  <div id="root"></div>
  <script src="https://cdn.jsdelivr.net/gh/kpj2006/share@v1.0.0/src/social-share-button.js"></script>
</body>
```

**Step 2:** In your React component (e.g., `MainLayout.jsx`, `Header.jsx`, or wherever you want the button):

```jsx
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    new window.SocialShareButton({
      container: '#share-button'
    });
  }, []);

  return <div id="share-button"></div>;
}
```

**Important:** The `<div id="share-button"></div>` and initialization code go in your **React component JSX**, NOT in index.html. The index.html only needs the CDN links.
```

**Option 2: React Component Wrapper (Optional)**

For cleaner React integration, copy `src/social-share-button-react.jsx` to your project and use it as a React component:

```jsx
import { SocialShareButton } from './components/atoms/SocialShareButton/SocialShareButton';

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

## Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

© 2025 The Stable Order.
