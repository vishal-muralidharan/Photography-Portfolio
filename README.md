# Photography Portfolio

An interactive photography portfolio showcasing travel, wildlife, and landscape collections with split-panel navigation and magazine-style flipbook browsing.

Live site: https://pixel-photos.netlify.app

![Photography Portfolio Hero](Photos/Andaman/hero-andaman.jpg)

## Features

- 🖼️ **Split-panel navigation** lets you hover to expand album previews and navigate visually.
- 🔄 **Dynamic hero rotator** smoothly crossfades through featured landscape and travel photography.
- 📖 **Magazine-style flipbook** delivers fluid page turns with custom pagination for every album.
- 🔍 **Fullscreen lightbox** enables immersive inspection of high-resolution images with caption details.
- ✨ **Frosted glassmorphism** elevates overlays, badges, and controls with modern blur effects.
- 🎨 **Adaptive album themes** automatically shift color palettes to match the mood of each photo collection.
- 📱 **Responsive layouts** adapt fluidly across phones, tablets, and wide desktop displays.

## Tech Stack

- **Markup:** HTML5 with semantic landmarks and accessible attributes.
- **Styling:** CSS3 custom properties, CSS Grid, Flexbox, and backdrop-filter blur.
- **Scripting:** Vanilla JavaScript (ES6+) for DOM manipulation, rotator transitions, and lazy loading.
- **Typography:** Space Grotesk via Google Fonts.
- **Icons:** Remix Icon v4.3.0.

## Getting Started

### Prerequisites

A modern web browser such as Chrome, Safari, Firefox, or Edge.

### Install

Clone the repository:

```bash
git clone https://github.com/vishal-muralidharan/Photography-Portfolio.git
cd Photography-Portfolio
```

No external package manager or compile step is required.

### Environment Variables

No environment variables are required. All image assets and album configurations run entirely in the browser.

### Run

Start a local static web server from the project root:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` in your browser.

## Scripts

As a pure static site, development uses standard local web tooling:

- `python3 -m http.server 8000`: runs a local development server on port 8000.
- `open index.html`: opens the landing page directly in your default browser.
- Build: assets are production-ready static files; no build step is needed.

## Tests

Testing focuses on cross-browser rendering, responsive viewport verification, and image loading:

1. **Responsive verification:** inspect layouts at mobile (375px), tablet (768px), and desktop (1280px+) viewports.
2. **Feature checks:** verify hero rotator transitions, split-panel expansion, flipbook pagination, and lightbox zooming.
3. **Performance:** verify lazy-loading attributes on album image tags.

## Project Structure

```text
PP/
├── assets/
│   ├── css/            # Global layout, album stylesheets, and theme variables
│   ├── js/             # Rotator, flipbook viewer, and album data structures
│   └── pages/          # Individual album viewing pages
├── Photos/             # Full-resolution images categorized by album
├── index.html          # Main landing page with hero rotator and album grid
└── README.md           # Project documentation
```

## Deployment

The application is deployed to Netlify.

- Continuous deployment triggers automatically on pushes to the `main` branch.
- The publish directory is the repository root `/`.
- Live site URL: https://pixel-photos.netlify.app

## Author and License

Created by Vishal Muralidharan.

Distributed under the MIT License. Copyright (c) 2025 Vishal Muralidharan.
