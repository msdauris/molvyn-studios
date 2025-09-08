# Molvyn Studios Portfolio

A creative portfolio website showcasing digital tools, voice work, and visual storytelling. Built with React and designed around Swiss/International typography principles with a minimal architectural design system.

## 🎨 Design Philosophy

**"Content is King"** - A minimal architectural design system prioritizing typography and intentional whitespace. Everything serves the typography and message.

**Design Principles:**
- Swiss/International typography methodology
- Modern architectural web design
- Intentional whitespace and hierarchy
- Typography-first content presentation
- Clean, functional layouts
- Purposeful interactions over flashy effects

**Aesthetic Values:**
- Content over decoration
- Function over form
- Clarity over complexity
- Intention over trends

## 🌟 Featured Work

### Interactive Applications
- **Threshold Oracle** - Digital divination tool with auto-shuffling deck and functional sharing
- **Digital Chatterbox** - Interactive origami fortune teller with authentic paper folding
- **Relationship Deepener** - Astrological compatibility questions (development preview)

### Voice & Sound
- Professional voiceover samples across commercial, documentary, and media formats
- Clean audio integration with functional playback controls
- Portfolio showcasing range from luxury automotive to podcast hosting

### Video Projects
- **Vendemmia** - Documentary-style video capturing local harvest traditions (editing)
- **Aerial Perspectives** - Cinematic drone footage exploring landscapes (coming soon)

## 🛠 Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: TailwindCSS + Custom CSS
- **Animations**: Framer Motion (minimal, purposeful)
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Audio**: HTML5 Audio API + React hooks
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer - minimal navigation
│   ├── portfolio/       # Hero, Projects, About, Contact, VoiceoverSamples
│   ├── oracle/          # Card, Deck, DrawingArea
│   ├── chatterbox/      # OrigamiFortuneTeller (Canvas-based)
│   └── relationship/    # QuestionCard, CategoryPicker, PricingOverlay
├── pages/               # Route components
├── data/               # Oracle cards, preview data
├── hooks/              # Audio, animation, card logic
└── assets/             # Audio files (.wav format)
```

## 🚀 Getting Started

```bash
# Install dependencies
cd portfolio-site
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## ✅ Current Status (Ready for Launch)

### Portfolio Foundation ✅
- Minimal architectural design system implemented
- Typography-first content hierarchy
- Clean navigation and responsive layout
- Professional contact integration

### Oracle Application ✅
- Auto-shuffling deck (no manual shuffle needed)
- Functional copy/share reading features
- "Buy physical deck" placeholder for future shop integration
- Clean, accessible card interactions

### Voice & Sound Section ✅
- 5 professional voiceover samples (WAV format)
- Functional audio players with progress bars
- Samples ordered by strength (podcast → luxury car → artisanal → documentary → tech)
- Integrated styling matching site aesthetic

### Video Projects ✅
- Vendemmia and aerial drone work showcased
- Status indicators (editing, coming soon)
- Smart link handling for incomplete projects

## 🔧 Immediate Fixes Needed

### Critical (Pre-Launch)
- [ ] **Audio File Optimization**: Convert WAV to optimized MP3 for faster loading
- [ ] **Dev Server Issue**: Fix npm run dev command (currently requires `cd portfolio-site`)
- [ ] **Performance Testing**: Test audio loading on mobile/slow connections
- [ ] **SEO Meta Tags**: Add proper meta descriptions and social sharing tags

### Important (Week 1)
- [ ] **Physical Deck Integration**: Connect "buy deck" button to actual shop/Amazon link
- [ ] **Contact Form**: Add functional contact form (currently display only)
- [ ] **Video Previews**: Add thumbnail images for video projects
- [ ] **Analytics**: Implement basic tracking (Google Analytics or Plausible)

## 🎯 Improvements Planned

### Design System Enhancements
- [ ] **Typography Scale Refinement**: Fine-tune heading hierarchies
- [ ] **Whitespace Optimization**: Audit spacing for perfect architectural balance
- [ ] **Accessibility Audit**: Ensure AAA compliance across all interactions
- [ ] **Performance Audit**: Optimize for Core Web Vitals

### Oracle Application Evolution
- [ ] **Reading Persistence**: Save readings to localStorage with timestamps
- [ ] **Keyboard Navigation**: Full keyboard support for accessibility
- [ ] **Print Functionality**: Generate PDF readings for offline use
- [ ] **Card Images**: Add visual card designs with flip animations

### Voice & Sound Expansion
- [ ] **Sample Categories**: Group by commercial/narration/character work
- [ ] **Download Options**: Offer sample downloads for client review
- [ ] **Testimonials**: Add client feedback and project context
- [ ] **Service Packages**: Clearly defined voiceover service offerings

### Video Integration
- [ ] **Vendemmia Preview**: Add trailer/preview when editing complete
- [ ] **Drone Reel**: Showcase aerial footage compilation
- [ ] **Client Work**: Add branded video projects
- [ ] **Behind the Scenes**: Process documentation for transparency

## 🚀 Coming Soon

### Short Term (Next 30 Days)
- [ ] **Blog System**: Simple content management for creative process documentation
- [ ] **Portfolio Expansion**: Additional client work showcases
- [ ] **Contact System**: Functional inquiry form with email integration

### Medium Term (Next 90 Days)
- [ ] **Advanced Oracle Features**: Reading history, intention setting, custom spreads
- [ ] **Voiceover Booking**: Calendar integration for voice work consultations
- [ ] **Video Portfolio**: Complete Vendemmia launch
- [ ] **Client Dashboard**: Private area for ongoing project collaboration

### Long Term (Future Vision)
- [ ] **Mobile Apps**: Native versions of interactive tools
- [ ] **API Development**: Third-party integrations for oracle/voice services
- [ ] **White Label Solutions**: Licensing model for other creative professionals
- [ ] **Educational Content**: Workshops on digital creativity and intentional design
- [ ] **Shop Integration**: Physical oracle deck sales via Etsy/Amazon
- [ ] **Video Portfolio**: Drone work showcase

## 🎨 Design Notes

### Typography System
- **Headings**: Clean sans-serif hierarchy
- **Body**: Optimized for readability across devices
- **Monospace**: Used sparingly for technical/meta information
- **Line Height**: Calculated for optimal reading rhythm

### Color Strategy
- **Primary Orange (#ff6b35)**: Used for CTAs and active states only
- **Neutral Grays**: Full spectrum for content hierarchy
- **High Contrast**: Ensures accessibility across all text sizes
- **Intentional Limitation**: Minimal palette supports content focus

### Interaction Design
- **Subtle Animations**: Support content, never distract from it
- **Hover States**: Clear feedback without being flashy
- **Loading States**: Transparent and informative
- **Error Handling**: Graceful degradation with clear messaging

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🤝 Contact

For inquiries about the project or collaboration opportunities:
- Email: soyred@protonmail.com
- Portfolio: [Live Site URL]

---

*Crafted with intention. Content is king.*