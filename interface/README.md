# PimBo - Professional Project Management Interface

Enterprise-grade mobile-first interface for generating PMBOK 8 project documentation prompts.

## 🎨 Professional Design System

### Apple-Inspired Interface

The interface follows Apple's design principles:
- **Minimalist**: Clean, uncluttered design with generous white space
- **Typography**: San Francisco system fonts with careful letter-spacing
- **Colors**: Professional palette using Apple Blue (#007AFF) and Purple (#5856D6)
- **Shadows**: Subtle, layered shadows for depth without heaviness
- **Interactions**: Smooth transitions and hover states

### Professional Color Palette

- **Primary**: Apple Blue (#007AFF) - Trust and professionalism
- **Secondary**: Apple Purple (#5856D6) - Innovation
- **Accent**: Orange (#FF9500) for warnings and actions
- **Neutrals**: Carefully selected gray scale for hierarchy
- **Success**: Green (#34C759) for confirmations

### No Bootstrap - Custom Design

This is NOT a Bootstrap template. Every component is custom-designed for:
- Better performance (no unused CSS)
- Unique visual identity
- Professional project management context
- Consistent with macOS/iOS design language

## 📱 Mobile-First Architecture

### 5-Step Wizard Flow

1. **AI Provider Selection** - Choose between Claude AI and Google Gemini
2. **Project Information** - Essential project details with quick templates
3. **Project Configuration** - Lifecycle phase and management approach
4. **Artifact Selection** - Professional document selection
5. **Summary & Generation** - Review and generate prompt

### Header Design

- **Compact**: Standard height header with logo integration
- **Professional**: Clean typography without emojis
- **Sticky**: Remains visible while scrolling
- **Translucent**: Backdrop blur for modern feel

Features the PimBo logo (pimbo_profile_350.png) alongside the title.

## 💼 Target Audience

Designed specifically for **Professional Project Managers**:
- Enterprise PMO teams
- Certified PMP professionals
- Program managers
- Portfolio managers
- Senior project coordinators

**NOT** designed for:
- Hobbyists or casual users
- Children or students (removed playful emojis)
- Generic productivity apps

## 🎯 Key Features

### Professional Language

- All interface text in English
- Industry-standard terminology
- Clear, concise instructions
- No informal language or emojis (except minimal icons)

### Data Persistence

- Auto-save to localStorage
- Resume where you left off
- No data loss on browser close
- Saved state includes current step

### Validation

- Step-by-step validation
- Clear error messages
- Prevents incomplete submissions
- Smart field requirements

### Responsive Design

- Mobile-first (320px and up)
- Tablet optimized (768px)
- Desktop enhanced (1024px+)
- Touch-friendly interactions

## 📂 Project Structure

```
interface/
├── index.html          # Main HTML with 5-step wizard
├── images/
│   └── pimbo_profile_350.png  # Logo
├── css/
│   └── style.css      # Professional design system
├── js/
│   └── script.js      # Multi-step logic + localStorage
└── README.md          # This file
```

## 🎨 Design Specifications

### Typography

- **Headings**: -apple-system, 600-700 weight, tight letter-spacing
- **Body**: SF Pro Display style, 400-500 weight
- **Code**: SF Mono for prompts

### Spacing System

Uses consistent 4px base unit:
- 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px

### Border Radius

- Cards: 12-16px (large radius for modern look)
- Buttons: 12px
- Inputs: 12px
- Badges: 8px

### Shadows

Subtle, Apple-style shadows:
- sm: Light touch for hover states
- md: Cards and elevated elements
- lg: Primary buttons
- xl: Modals and overlays

## 🚀 Usage

1. Open `index.html` in a modern browser
2. Navigate through 5 professional steps
3. Data saves automatically
4. Generate and copy your prompt
5. Paste into Claude AI or Google Gemini

## 💻 Browser Compatibility

- ✅ Safari 14+ (optimized for macOS/iOS)
- ✅ Chrome 90+
- ✅ Edge 90+
- ✅ Firefox 88+

## 🎯 UX Principles

### Clarity Over Cleverness

- Direct, professional language
- No hidden features or easter eggs
- Clear visual hierarchy
- Obvious next actions

### Consistency

- Uniform spacing throughout
- Consistent interaction patterns
- Predictable navigation
- Standard iconography

### Efficiency

- Minimal steps to complete
- Smart defaults where possible
- Quick templates for common scenarios
- Keyboard-friendly navigation

## 📐 Design Patterns

### Cards

- 1.5px borders (subtle but visible)
- 12-16px border radius
- Hover: subtle lift with shadow
- Selected: blue border + light background

### Buttons

- Primary: Blue gradient with shadow
- Secondary: Gray with border
- Padding: 16px horizontal, 12px vertical
- Active state: slight scale down

### Form Fields

- 1.5px borders
- Focus: blue border + glow
- Hover: darker border
- 16px padding

## 🔧 Customization

All design tokens are CSS variables in `:root`:

```css
:root {
    --primary-blue: #007AFF;
    --gray-900: #111827;
    --spacing-4: 1rem;
    --radius-lg: 0.75rem;
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.08);
    /* ...more variables */
}
```

## 📊 Performance

- No external dependencies
- Minimal CSS (< 15KB)
- Optimized JavaScript
- Fast initial load
- Smooth 60fps animations

## 🔐 Privacy

- 100% client-side
- No analytics tracking
- No external API calls
- Data stored locally only
- No user accounts needed

## 📝 Localization

Currently English-only. Interface is internationalization-ready:
- Semantic HTML structure
- Separated content from presentation
- Easy to add language files

## 🎓 Best Practices

The interface demonstrates:
- Mobile-first responsive design
- Progressive enhancement
- Accessible form design
- Performance optimization
- Clean, maintainable code

---

**Design Philosophy**: Professional tools for professional work.
**Version**: 2.0 Professional Edition
**Last Updated**: 2026-01-28
**Design System**: Apple-Inspired Professional UI
