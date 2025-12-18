# SocialShareButton

A lightweight social sharing component for web applications. Zero dependencies, framework-agnostic, and fully customizable.

## Features

- Multiple social platforms (WhatsApp, Facebook, X, LinkedIn, Telegram, Reddit, Email)
- Zero dependencies - pure vanilla JavaScript
- Framework agnostic - works with React, Vue, Angular, or plain HTML
- Fully responsive and mobile-ready
- Customizable themes (dark/light)
- Accessible (keyboard navigation, ARIA labels)
- Lightweight (< 10KB gzipped)

## Installation

### Via CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kpj2006/share@v1.0.0/src/social-share-button.css">
<script src="https://cdn.jsdelivr.net/gh/kpj2006/share@v1.0.0/src/social-share-button.js"></script>
```

## Quick Start

### Vanilla JavaScript

**Step 1:** Add the container div in your HTML:
```html
<div id="share-button"></div>
```

**Step 2:** Include the CSS and JS files:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kpj2006/share@v1.0.0/src/social-share-button.css">
<script src="https://cdn.jsdelivr.net/gh/kpj2006/share@v1.0.0/src/social-share-button.js"></script>
```

**Step 3:** Initialize the component:
```html
<script>
  // Ensure DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    new SocialShareButton({
      container: '#share-button',
      url: 'https://your-website.com',
      title: 'Check this out!'
    });
  });
</script>
```

**Complete Example:**
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kpj2006/share@v1.0.0/src/social-share-button.css">
</head>
<body>
  <div id="share-button"></div>

  <script src="https://cdn.jsdelivr.net/gh/kpj2006/share@v1.0.0/src/social-share-button.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      new SocialShareButton({
        container: '#share-button',
        url: 'https://your-website.com',
        title: 'Check this out!'
      });
    });
  </script>
</body>
</html>
```

**Note:** Always wrap initialization in `DOMContentLoaded` to ensure the container element exists.

### React

```jsx
import { SocialShareButton } from './src/social-share-button-react';

function App() {
  return (
    <SocialShareButton
      url="https://your-website.com"
      title="Check this out!"
      onShare={(platform) => console.log('Shared on:', platform)}
    />
  );
}
```

**Auto URL Detection:** If you omit `url` and `title` props, the component automatically uses `window.location.href` and `document.title`, and updates when they change (perfect for SPAs with routing).
```

## Configuration

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `url` | string | `window.location.href` | URL to share |
| `title` | string | `document.title` | Title of content |
| `description` | string | `''` | Description text |
| `platforms` | array | `['whatsapp', 'facebook', 'twitter', 'linkedin', 'telegram', 'reddit']` | Platforms to show |
| `theme` | string | `'dark'` | Theme (`'dark'` or `'light'`) |
| `buttonText` | string | `'Share'` | Button text |
| `buttonStyle` | string | `'default'` | Style variant |

## Customization

### Button Styles

```javascript
// Primary style
new SocialShareButton({
  container: '#share',
  buttonStyle: 'primary'
});

// Icon only
new SocialShareButton({
  container: '#share',
  buttonStyle: 'icon-only'
});
```

### Platform Selection

```javascript
new SocialShareButton({
  container: '#share',
  platforms: ['twitter', 'linkedin', 'facebook']
});
```

### Callbacks

```javascript
new SocialShareButton({
  container: '#share',
  onShare: (platform, url) => {
    console.log(`Shared on ${platform}`);
  },
  onCopy: (url) => {
    console.log('Link copied');
  }
});
```

## Demo

Open `index.html` in your browser to see the component in action.

## Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

© 2025 The Stable Order.
