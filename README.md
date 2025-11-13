# Photography Portfolio

A modern, interactive photography portfolio website showcasing albums with an elegant split-panel design and flipbook-style image browsing.

## Features

- **Split-Panel Navigation**: Hover-expanding panels for album selection
- **Hero Image Rotator**: Dynamic hero images with crossfade transitions
- **Flipbook Display**: Magazine-style photo spreads with smooth pagination
- **Fullscreen Lightbox**: Click any image for immersive fullscreen preview
- **Responsive Design**: Mobile-friendly layouts adapting to all screen sizes
- **Color Themes**: Each album has its own accent color
- **Glass Morphism**: Frosted glass effects on navigation and overlays

## Structure

```
├── index.html              # Landing page with hero and album panels
├── assets/
│   ├── css/
│   │   ├── styles.css      # Main styles
│   │   ├── album-base.css  # Shared album page styles
│   │   └── theme-*.css     # Album-specific color themes
│   ├── js/
│   │   ├── main.js         # Core functionality
│   │   ├── hero.js         # Hero image rotation
│   │   ├── album.js        # Flipbook renderer
│   │   └── data.js         # Album data structure
│   └── pages/              # Individual album pages
└── Photos/                 # Image directories by album
```

## Albums

- **Andaman** - Tropical island photography (#27e1ff)
- **Birds** - Wildlife bird photography (#7ddc41)
- **Diwali** - Festival of lights (#ff9b00)
- **Kerala** - Southern India travel (3 subalbums) (#34d399)
  - Boats
  - Jeeps
  - People
- **Landscape** - Nature and scenery (#67a9ff)

## Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, flexbox, grid, masonry columns
- **Vanilla JavaScript** - No frameworks, pure DOM manipulation
- **Fonts** - Space Grotesk (Google Fonts)
- **Icons** - Remix Icon v4.3.0

## Image Naming Convention

- `hero-*.jpg` - Images for hero rotation
- `cover-*.jpg` - Album cover images
- `*.jpg` - Regular album photos

## Local Development

1. Use a local server (e.g., Live Server in VS Code)
2. Open `index.html` or navigate to any album page
3. Images load lazily for optimal performance

## Browser Support

Modern browsers with support for:
- CSS Grid & Flexbox
- CSS Custom Properties
- ES6 JavaScript
- Backdrop Filter

---

© 2025 Vishal Muralidharan
