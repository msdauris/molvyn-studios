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
    background: rgba(0, 102, 255, 0.03);
    border-radius: 0;
    z-index: -1;
}
```

### Architectural Elements
```css
/* Geometric shapes and floating elements */
.geometric-accent {
    position: absolute;
    width: 200px;
    height: 200px;
    background: linear-gradient(45deg, #0066ff08, transparent);
    transform: rotate(45deg);
    z-index: -1;
}

.text-underline-accent {
    position: relative;
}

.text-underline-accent::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 60%;
    height: 3px;
    background: linear-gradient(90deg, #0066ff, #ff6b00);
    opacity: 0.7;
}
```

## Page-Specific Transformations

### Homepage Hero
**Current:** Basic centered text with buttons
**Transform to:** Dramatic asymmetrical layout with floating elements

```jsx
// New Hero Structure
<section className="hero-section relative overflow-hidden">
  {/* Floating geometric elements */}
  <div className="geometric-accent top-20 right-20"></div>
  <div className="geometric-accent bottom-40 left-10 opacity-50"></div>
  
  <div className="content-grid">
    <div className="space-y-8">
      <h1 className="hero-title text-underline-accent">
        molvyn<br/>studios
      </h1>
      <p className="large-text">
        digital tools built<br/>with intention
      </p>
      <div className="flex flex-col gap-4 max-w-xs">
        <button className="btn-architectural-primary">view recent work</button>
        <button className="btn-architectural-secondary">start a project</button>
      </div>
    </div>
    
    <div className="relative">
      {/* Visual element - could be abstract shapes or project preview */}
      <div className="floating-preview-grid">
        {/* Mini project previews or abstract elements */}
      </div>
    </div>
  </div>
</section>
```

### Projects Section
**Current:** Standard grid layout
**Transform to:** Asymmetrical masonry with dramatic typography

```jsx
// New Projects Structure
<section className="py-32 relative">
  <div className="max-w-7xl mx-auto px-8">
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-4">
        <h2 className="section-title sticky top-32">
          recent<br/>work
        </h2>
      </div>
      
      <div className="col-span-8 space-y-16">
        {projects.map((project, index) => (
          <div className={`project-card ${index % 2 === 0 ? 'ml-16' : 'mr-16'}`}>
            <div className="aspect-video bg-cool-gray mb-6 relative overflow-hidden">
              {/* Project preview with subtle hover animation */}
            </div>
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="body-text mb-4">{project.description}</p>
            <div className="flex items-center gap-4">
              <span className="mono-text text-sm text-medium-gray">{project.status}</span>
              <div className="flex-1 h-px bg-gray-200"></div>
              <button className="text-electric-blue hover:text-true-black transition-colors">
                explore →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
```

### About Section
**Current:** Standard centered content
**Transform to:** Split layout with visual hierarchy

```jsx
// New About Structure
<section className="py-32 bg-cool-gray relative">
  <div className="content-grid">
    <div>
      <h2 className="section-title mb-8">
        about<br/>molvyn studios
      </h2>
      <div className="space-y-6 body-text">
        <p>currently building tools that bridge the technical and mystical</p>
        <p>crafted independently with ai partnership</p>
        <p>available for select projects</p>
      </div>
    </div>
    
    <div className="space-y-12">
      <div>
        <h3 className="text-xl font-semibold mb-4">approach</h3>
        <p className="body-text">confident minimalist, architectural precision</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">ethos</h3>
        <p className="body-text">digital soul, human intention, ai partnership</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">availability</h3>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-electric-blue rounded-full"></div>
          <span className="body-text">accepting new projects</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Enhanced CSS System

### New Button Styles
```css
.btn-architectural-primary {
    background: #000000;
    color: #ffffff;
    padding: 16px 32px;
    border: none;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: lowercase;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.btn-architectural-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
}

.btn-architectural-primary:hover::before {
    left: 100%;
}

.btn-architectural-secondary {
    background: transparent;
    color: #000000;
    border: 2px solid #000000;
    padding: 14px 30px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: lowercase;
    transition: all 0.3s ease;
}

.btn-architectural-secondary:hover {
    background: #000000;
    color: #ffffff;
    transform: translateY(-2px);
}
```

### Enhanced Micro-interactions
```css
.project-card {
    transition: all 0.4s ease;
    cursor: pointer;
}

.project-card:hover {
    transform: translateY(-8px);
}

.project-card:hover .aspect-video {
    transform: scale(1.02);
}

.nav-link {
    position: relative;
    transition: all 0.3s ease;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: #0066ff;
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}
```

## Implementation Priority

### Phase 1: Typography & Layout Foundation
1. Update CSS with new typography scales
2. Implement hero section transformation
3. Add geometric accent elements

### Phase 2: Enhanced Interactions
1. Implement new button styles with animations
2. Add project card hover effects
3. Enhanced navigation micro-interactions

### Phase 3: Visual Polish
1. Add floating elements and geometric shapes
2. Implement asymmetrical layouts
3. Fine-tune spacing and visual hierarchy

### Phase 4: Performance & Polish
1. Optimize animations for performance
2. Ensure mobile responsiveness
3. Test and refine micro-interactions

## Success Metrics
- **Visual Impact:** Site should feel dramatically different from current state
- **Brand Consistency:** Maintain molvyn studios voice and messaging
- **Functionality:** All existing features continue to work perfectly
- **Performance:** No degradation in load times or responsiveness
- **Mobile Experience:** Enhanced mobile design that feels intentional

## References for Inspiration
- **Tore Bentsen:** Bold typography, generous whitespace
- **Mammut Local Adventure:** Strategic color usage, clean navigation
- **Nakashima Woodworkers:** Craft-focused messaging, timeless aesthetic

The goal is to transform the site from "clean but forgettable" to "architecturally striking while maintaining usability." Every element should feel intentionally placed and contribute to the overall visual narrative of confident, minimal craftsmanship.