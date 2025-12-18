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

### Via CDN (Recommended)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/AOSSIE-Org/SocialShareButton@main/src/social-share-button.css">
<script src="https://cdn.jsdelivr.net/gh/AOSSIE-Org/SocialShareButton@main/src/social-share-button.js"></script>
```

### Clone Repository

```bash
git clone https://github.com/AOSSIE-Org/SocialShareButton.git
```

## Quick Start

### Vanilla JavaScript

```html
<div id="share-button"></div>

<script>
  new SocialShareButton({
    container: '#share-button',
    url: 'https://your-website.com',
    title: 'Check this out!'
  });
</script>
```

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
