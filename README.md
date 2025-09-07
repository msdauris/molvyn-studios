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

### Relationship 8Ball (Synastry Deepener)
- Interactive relationship type and stage selection
- Preview of personalized astrological questions
- Architectural minimal design aesthetic
- Development preview with pricing overlay
- Foundation for premium analysis platform

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

### Immediate Next Steps - Oracle App
- [ ] **Visual Enhancements**
  - [ ] Add card images with flip animation (front/back toggle)
  - [ ] Implement card twirl animation on reveal
  - [ ] Add subtle sound effects (optional toggle)
  - [ ] Enhance loading states and transitions

- [ ] **Functionality Improvements**
  - [ ] Reading persistence - save readings to localStorage
  - [ ] Reading history - browse past readings with timestamps
  - [ ] Intention setting - prompt for question/focus before drawing
  - [ ] Export/share - make action buttons functional (save/share/print)
  - [ ] Reading journal - add personal notes to readings

- [ ] **Accessibility & UX**
  - [ ] Keyboard navigation (spacebar to draw, arrows to navigate)
  - [ ] Screen reader support for card meanings
  - [ ] Better first-time user guidance
  - [ ] Mobile touch gestures for card interactions

- [ ] **Advanced Oracle Features**
  - [ ] Upright/reversed functionality for cards
  - [ ] Spread position meanings - explain what each card position represents
  - [ ] Custom spreads - let users create their own layouts
  - [ ] Card favorites - bookmark meaningful cards
  - [ ] Reading templates - guided reading types (daily, weekly, etc.)

### Immediate Next Steps - Chatterbox App
- [ ] Complete chatterbox folding animations and interactions
- [ ] Enhanced message system with oracle deck connections
- [ ] Nostalgic paper-folding sound effects

### Immediate Next Steps - General
- [ ] Audio integration for voiceover samples
- [ ] PWA capabilities for offline use
- [ ] Proper SEO meta tags and optimization

### Relationship 8Ball - Premium Platform (Separate Repository)
- [ ] **Backend Infrastructure**: Separate private repository for premium logic
- [ ] **Domain Architecture**: Dedicated domain for premium relationship analysis
- [ ] **Payment Integration**: Stripe/PayPal for subscription tiers
- [ ] **Astrological Engine**: Real birth chart calculations and synastry analysis
- [ ] **Human Design Integration**: Complete compatibility analysis system
- [ ] **User Accounts**: Secure authentication and saved readings
- [ ] **PDF Generation**: Downloadable relationship reports
- [ ] **Audio Interpretations**: Personalized voice analysis recordings
- [ ] **Consultation Booking**: Calendar integration for private sessions
- [ ] **Analytics Dashboard**: User engagement and conversion tracking

### Long-term Vision
- [ ] Mobile app versions of all three applications
- [ ] API for third-party integrations
- [ ] White-label licensing for other practitioners

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🤝 Contact

For inquiries about the project or collaboration opportunities:
- Email: soyred@protonmail.com
- Website: [molvynstudios.com](https://molvynstudios.com)

---

*Crafted with intention at the intersection of technology and mysticism.*