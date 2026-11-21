# PP

Interactive photography portfolio website featuring split-panel album navigation, flipbook photo spreads, and fullscreen lightbox.

Live site: https://pixel-photos.netlify.app

![Photography Portfolio Hero](Photos/Andaman/hero-andaman.jpg)

## Features

- 🖼️ **Split-panel navigation:** hover to expand album previews and browse collections visually.
- 🔄 **Dynamic hero rotator:** crossfade through featured landscape and travel photography.
- 📖 **Magazine-style flipbook:** turn pages fluidly with custom pagination for every album.
- 🔍 **Fullscreen lightbox:** inspect high-resolution images in detail with captions.
- ✨ **Frosted glassmorphism:** view overlays, badges, and controls with modern blur effects.
- 🎨 **Adaptive album themes:** experience color palettes that shift to match the mood of each collection.
- 📱 **Responsive layout:** browse smoothly across mobile, tablet, and wide desktop displays.

## Tech Stack

- **Markup:** HTML5 with semantic landmarks
- **Styling:** CSS3 custom properties, CSS Grid, Flexbox
- **Scripting:** Vanilla JavaScript (ES6+)
- **Typography:** Space Grotesk via Google Fonts
- **Icons:** Remix Icon v4.3.0
- **Hosting:** Netlify

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Safari, Firefox, or Edge)

### Install

Clone the repository:

```bash
git clone https://github.com/vishal-muralidharan/Photography-Portfolio.git
cd Photography-Portfolio
```

No external package dependencies or build steps are required.

### Environment Variables

No environment variables are required. All image assets and album configurations run directly in the browser.

### Run

Start a local web server from the project root:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` in your browser.

## Scripts

As a static site with no package.json, development uses standard web tooling:

- `python3 -m http.server 8000`: start a local development server on port 8000.

## Tests

Manual verification covers:

- Responsive layouts across mobile (375px), tablet (768px), and desktop (1280px) viewports
- Feature checks for rotator transitions, split-panel expansion, flipbook pagination, and lightbox zooming
- Lazy loading attributes on album image tags

## Project Structure

```text
PP/
├── assets/
│   ├── css/    # Layout, album styles, and theme variables
│   ├── js/     # Rotator, flipbook viewer, and album data
│   └── pages/  # Individual album pages
├── Photos/     # Photo collections categorized by album
├── index.html  # Main landing page with hero rotator
└── README.md   # Project documentation
```

## Deployment

PP deploys to Netlify.

- Continuous deployment triggers automatically on push to `main`.
- Publish directory: repository root `/`.
- Live site: https://pixel-photos.netlify.app

## Author and License

Created by Vishal Muralidharan.
Distributed under the MIT License.
