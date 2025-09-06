# Cursor Prompt: Transform Molvyn Studios to Indie Architectural Aesthetic

You are an expert web designer specializing in creating memorable, architectural websites that make visitors say "woah." Transform the current clean but forgettable molvyn studios site into something with serious indie architectural presence.

## Current State Analysis
The site has good content and clean design, but lacks visual impact. It looks like a basic template rather than a crafted experience. We need to add architectural drama while maintaining functionality.

## Design Philosophy: "Confident Minimalism with Visual Impact"

### Core Principles:
- **Dramatic typography** - use scale as primary visual tool
- **Strategic whitespace** - breathing room as design element  
- **Subtle architectural details** - floating elements, geometric shapes
- **Confident layouts** - asymmetrical, intentional positioning
- **Premium interactions** - micro-animations that feel expensive

## Global Design System Implementation

### Typography Hierarchy
```css
/* Apply this scale across all pages */
.hero-title { 
    font-size: clamp(3rem, 12vw, 12rem); 
    font-weight: 900; 
    letter-spacing: -0.05em; 
    line-height: 0.85; 
    margin-bottom: 2rem;
}

.section-title { 
    font-size: clamp(2rem, 6vw, 4rem); 
    font-weight: 700; 
    letter-spacing: -0.03em; 
    line-height: 0.9; 
}

.large-text { 
    font-size: clamp(1.2rem, 3vw, 2rem); 
    font-weight: 300; 
    line-height: 1.4; 
}

.body-text { 
    font-size: 1.1rem; 
    line-height: 1.7; 
    color: #666666; 
}
```

### Layout Components
```css
/* Consistent architectural spacing */
.hero-section {
    min-height: 80vh;
    display: flex;
    align-items: center;
    position: relative;
    background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
}

.content-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 8rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 2rem;
}

.floating-element {
    position: absolute;
    opacity: 0.08;
    pointer-events: none;
}
```

## Page-Specific Transformations

### 1. Work/Portfolio Page (/work)
**Current:** Basic grid of project cards
**Transform to:**
- **Hero:** Massive "recent work" typography treatment
- **Project showcase:** Asymmetrical grid with dramatic project titles
- **Floating elements:** Geometric shapes that complement project layouts

```html
<!-- Hero Section -->
<section class="hero-section">
    <div class="floating-element floating-line"></div>
    <div class="floating-element floating-circle"></div>
    
    <div class="hero-content">
        <h1 class="hero-title">selected<br>work</h1>
        <p class="large-text">tools that bridge intention and interaction</p>
    </div>
</section>

<!-- Projects Grid -->
<section class="projects-showcase">
    <div class="project-card featured">
        <div class="project-meta">live</div>
        <h2 class="project-title">threshold oracle</h2>
        <p class="project-description">digital divination tool</p>
        <a href="#" class="project-link">explore ↗</a>
    </div>
    <!-- Repeat for other projects -->
</section>
```

### 2. About Page (/about)
**Current:** Good content, basic layout
**Transform to:**
- **Hero:** "about the work" in massive typography
- **Two-column asymmetrical layout** with sticky left column
- **Capabilities grid** with hover effects

```html
<!-- Hero Section -->
<section class="hero-section">
    <div class="floating-element floating-grid"></div>
    
    <div class="hero-content">
        <h1 class="hero-title">about the<br>work</h1>
    </div>
</section>

<!-- Content Grid -->
<section class="content-grid">
    <div class="content-left sticky">
        <h2 class="section-subtitle">approach</h2>
    </div>
    <div class="content-right">
        <p class="body-text">each project starts with understanding the human need behind the technology...</p>
    </div>
</section>

<!-- Capabilities Grid -->
<section class="capabilities-grid">
    <div class="capability-card">
        <h3>web development</h3>
        <p>react, javascript, modern css</p>
    </div>
    <!-- Repeat for other capabilities -->
</section>
```

### 3. Contact Page (/contact)
**Current:** Basic form
**Transform to:**
- **Hero:** "let's build something" with dramatic scale
- **Split layout:** Form on left, process info on right
- **Enhanced form styling** with architectural details

```html
<!-- Hero Section -->
<section class="hero-section">
    <div class="floating-element floating-arrow"></div>
    
    <div class="hero-content">
        <h1 class="hero-title">let's build<br>something</h1>
        <p class="large-text">interested in working together?</p>
    </div>
</section>

<!-- Contact Content -->
<section class="contact-content">
    <div class="contact-form">
        <!-- Enhanced form styling -->
    </div>
    <div class="contact-info">
        <div class="info-section">
            <h3>process</h3>
            <ul>
                <li>initial conversation to understand scope</li>
                <li>proposal with timeline and approach</li>
                <li>iterative development with regular check-ins</li>
                <li>delivery and handoff</li>
            </ul>
        </div>
    </div>
</section>
```

### 4. Individual Project Pages (Oracle, Chatterbox, Relationship)
**Transform to:**
- **Hero:** Project name in massive typography
- **Interactive preview** section
- **Technical details** in monospace sidebar
- **Process documentation** with visual hierarchy

## Interactive Enhancements

### Micro-Animations
```css
/* Button hover effects */
.btn-primary {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.btn-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    transition: left 0.5s ease;
}

.btn-primary:hover::before {
    left: 100%;
}

/* Card hover effects */
.project-card:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}
```

### Floating Architectural Elements
```css
/* Add these to each page for architectural details */
.floating-line {
    width: 200px;
    height: 2px;
    background: #000000;
    transform: rotate(45deg);
    top: 20%;
    left: 10%;
}

.floating-circle {
    width: 100px;
    height: 100px;
    border: 1px solid #000000;
    border-radius: 50%;
    bottom: 30%;
    right: 15%;
}

.floating-grid {
    width: 150px;
    height: 150px;
    background: linear-gradient(90deg, #000000 1px, transparent 1px),
                linear-gradient(180deg, #000000 1px, transparent 1px);
    background-size: 20px 20px;
    top: 40%;
    right: 10%;
}
```

## Implementation Checklist

### Phase 1: Global Updates
✅ **Typography system** - Implement dramatic font scales across all pages  
✅ **Navigation consistency** - Fixed positioning, clean hover states  
✅ **Color system** - Ensure consistent use of black/white/gray palette  
✅ **Base layouts** - Hero sections, content grids, floating elements  

### Phase 2: Page-Specific Heroes
✅ **Work page** - "selected work" massive typography  
✅ **About page** - "about the work" with floating grid  
✅ **Contact page** - "let's build something" with enhanced form  
✅ **Project pages** - Individual project name treatments  

### Phase 3: Interactive Polish
✅ **Button animations** - Hover effects with shimmer/lift  
✅ **Card interactions** - Subtle scale and shadow on hover  
✅ **Scroll indicators** - Bouncing elements where appropriate  
✅ **Loading states** - Smooth transitions between pages  

### Phase 4: Architectural Details
✅ **Floating elements** - Geometric shapes on each page  
✅ **Asymmetrical grids** - Break away from centered layouts  
✅ **Strategic gradients** - Subtle background treatments  
✅ **Monospace metadata** - Technical authenticity in details  

## Quality Standards

### Visual Impact Test:
- **5-second rule:** Visitor should immediately think "this looks crafted"
- **Scroll engagement:** Each section should feel visually distinct and interesting
- **Mobile experience:** Typography should scale beautifully on all devices
- **Performance:** All animations should be smooth, no jank

### Brand Consistency:
- **Voice:** All copy maintains lowercase, confident tone
- **Hierarchy:** Clear information architecture across all pages  
- **Navigation:** Seamless flow between sections
- **Technical quality:** Site demonstrates your development skills through execution

## Final Outcome Goal

Transform the site from "clean but forgettable" to "holy shit, who built this?" The aesthetic should whisper expertise rather than shout for attention. Every page should reinforce that this is someone who builds with both technical skill and design sensibility.

Users should leave thinking: "This person clearly knows what they're doing and has impeccable taste."