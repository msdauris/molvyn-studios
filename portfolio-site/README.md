# Molvyn Studios Portfolio

A creative portfolio website showcasing three interactive web applications that blend mysticism, technology, and human connection. Built with React, Vite, TailwindCSS, and Framer Motion.

## 🌟 Featured Applications

### The Threshold Oracle
- 33-card mystical deck with Doré-style illustrations
- Interactive card drawing with reveal animations
- Cryptic oracle text and symbolic guidance
- Shuffle and multi-card spread functionality

### Digital Chatterbox
- Interactive origami fortune teller
- Smooth folding animations mimicking paper movement
- Messages connected to the oracle deck's symbolic universe
- Nostalgic UX with modern interactions

### Synastry Relationship Deepener
- Astrological compatibility analysis
- Human Design integration
- Personalized question generation based on birth data
- Privacy-first, client-side calculations
- Beautiful card-style interface

## 🎨 Design Philosophy

**"2025 meets 2040 meets 1995"** - A unique aesthetic that combines:
- Cutting-edge technology and interactions
- Timeless human wisdom and mystical elements
- Nostalgic 90s design sensibilities
- Clean, minimal layouts with intentional asymmetry

## 🛠 Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: TailwindCSS with custom retro-future theme
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd portfolio-site

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development
npm run dev          # Start dev server at http://localhost:5173

# Production
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run deploy       # Build and deploy to Vercel

# Code Quality
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Navigation
│   ├── portfolio/       # Hero, Projects, About, Contact, VoiceoverSamples
│   ├── oracle/          # Card, Deck, DrawingArea
│   ├── chatterbox/      # Chatterbox, FoldAnimation
│   └── relationship/    # QuestionCard, CategoryPicker
├── pages/
│   ├── Home.jsx         # Main portfolio page
│   ├── OracleApp.jsx    # Oracle card application
│   ├── ChatterboxApp.jsx # Digital chatterbox
│   └── RelationshipApp.jsx # Synastry relationship tool
├── data/
│   ├── oracleCards.js   # Oracle deck data and utilities
│   ├── chatterboxMessages.js # Fortune teller messages
│   └── synastryPreviewData.js # Relationship analysis data
├── hooks/
│   ├── useCardDraw.js   # Oracle card drawing logic
│   ├── useAnimation.js  # Animation utilities
│   └── useAudio.js      # Audio player functionality
└── assets/              # Images, audio files, etc.
```

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Smooth animations across all devices
- Touch-friendly interactions

### Performance Optimized
- Vite for fast development and building
- Code splitting with React Router
- Optimized animations with Framer Motion

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast color schemes

### Interactive Elements
- Card drawing animations
- Origami folding effects
- Smooth page transitions
- Hover and touch interactions

## 🎨 Custom Theme

The project uses a custom TailwindCSS theme featuring:

### Color Palette
- **Sage**: Muted greens for earth elements
- **Beige**: Warm neutrals for comfort
- **Purple**: Mystical accents and primary actions
- **Pastels**: Soft highlights and backgrounds

### Typography
- **Sans-serif**: Inter for body text and UI
- **Serif**: Crimson Text for headings and emphasis
- **Mono**: JetBrains Mono for code elements

### Animations
- Custom keyframes for card flips, floating elements
- Smooth transitions with easing functions
- Responsive animation performance

## 🚀 Deployment

The site is configured for easy deployment on Vercel:

1. **Automatic Deployment**: Connect your GitHub repository to Vercel
2. **Manual Deployment**: Run `npm run deploy`
3. **Environment Variables**: Configure any needed environment variables in Vercel dashboard

### Vercel Configuration
- SPA routing configured in `vercel.json`
- Security headers included
- Optimized for performance

## 🔮 Future Enhancements

- [ ] Audio integration for voiceover samples
- [ ] Real astrological calculations for synastry
- [ ] User accounts and saved readings
- [ ] Additional oracle card decks
- [ ] Advanced chatterbox animations
- [ ] Mobile app version

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🤝 Contact

For inquiries about the project or collaboration opportunities:
- Email: hello@molvynstudios.com
- Website: [molvynstudios.com](https://molvynstudios.com)

---

*Crafted with intention at the intersection of technology and mysticism.*