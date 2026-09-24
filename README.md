# Sri Yuktha — Personal Portfolio Website

A modern, responsive, and technical personal portfolio website for **Chebiyyam Sri Yuktha**, built with React, Vite, Tailwind CSS, and Lucide Icons.

---

## 🌟 Overview & Aesthetic

- **Theme**: Deep dark black base (`#06080e`), rich navy surfaces (`#111b30`), subtle blue accents (`#3b82f6` / `#60a5fa`), and soft baby-pink accents (`#f472b6`).
- **Typography**: Inter for modern, clean body text and JetBrains Mono for technical badges, statistics, and terminal motifs.
- **Responsiveness**: Fully optimized for mobile, tablet, laptop, and desktop viewport sizes.
- **Accessibility**: Semantic HTML5 tags, keyboard navigation, high color contrast, and reduced-motion media query support.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn / pnpm

### Installation & Development

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

The site runs by default on `http://localhost:5173`.

---

## 📂 Project Structure

```
Yuktha_portfolio/
├── index.html                  # SEO, OpenGraph metadata, and custom SVG favicon
├── package.json                # Project scripts and dependencies
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Custom color palette, fonts, and box shadows
├── vite.config.js              # Vite server & build configuration
├── src/
│   ├── main.jsx                # Application root entry point
│   ├── App.jsx                 # Core layout orchestration
│   ├── index.css               # Global styles, scrollbar, and tech grid patterns
│   ├── data/
│   │   └── portfolioData.js    # Central data file for all projects, skills, and info
│   └── components/
│       ├── BackgroundElements.jsx # Subtle ambient glow and background grid
│       ├── Navbar.jsx          # Sticky responsive header with mobile drawer
│       ├── Hero.jsx            # Hero section with headline and terminal widget
│       ├── About.jsx           # About statement and academic snapshot
│       ├── Skills.jsx          # Categorized technical toolkit
│       ├── FeaturedProjects.jsx # Main project cards with filters and actions
│       ├── MoreProjects.jsx    # Secondary project showcase
│       ├── Hackathons.jsx      # Hackathon achievements & timeline
│       ├── Certifications.jsx  # Coursework and certificates
│       ├── Education.jsx       # Academic timeline (B.Tech, NxtWave, etc.)
│       ├── LanguagesInterests.jsx # Communication and personal pursuits
│       ├── Contact.jsx         # Email with copy-to-clipboard, LinkedIn & GitHub
│       └── Footer.jsx          # Footer with back-to-top button
```

---

## 🛠️ How to Edit Content

All personal details, skills, project items, hackathons, and certifications are organized in a single configuration file:
👉 `src/data/portfolioData.js`

To update projects, add new certifications, or change contact links, edit the corresponding export in `src/data/portfolioData.js`. The UI will update automatically.

---

## 📄 License
Created for Chebiyyam Sri Yuktha. All rights reserved.
