# GC Ingredients Brand Guidelines

## Overview
GC Ingredients is a premium provider of functional food ingredient systems, specializing in bakery, tortilla, dairy, and meat processing solutions. Our brand represents innovation, reliability, and scientific excellence in the food industry.

## Brand Identity

### Mission
To empower food manufacturers worldwide with scientifically advanced, reliable ingredient systems that enhance product quality, consistency, and profitability.

### Vision
To be the trusted global partner for functional food ingredients, recognized for our technical expertise and commitment to food science excellence.

### Values
- **Science-Driven**: Every solution backed by rigorous testing and data
- **Partnership**: Dedicated technical support throughout the product lifecycle
- **Innovation**: Continuous R&D investment in new ingredient technologies
- **Reliability**: Consistent quality and supply chain security
- **Sustainability**: Environmentally responsible sourcing and production

## Color Palette

### Primary Colors
- **GC Green** (#1a5c38): Main brand color, represents trust and nature
- **GC Orange** (#e8650a): Accent color, represents energy and innovation

### Secondary Colors
- **GC Green Light** (#2d7a4f): Hover states and secondary elements
- **GC Green Dark** (#0d3a22): Dark accents and text
- **GC Orange Light** (#f07a2a): Light accent variations

### Neutral Colors
- **GC Cream** (#f8f5ef): Background and light sections
- **GC Cream Dark** (#ede8df): Subtle backgrounds
- **GC Gray** (#6b7280): Secondary text and borders
- **GC Dark** (#111827): Primary text and headings

### Usage Guidelines
- Use GC Green for primary buttons, links, and brand elements
- Use GC Orange for accents, highlights, and call-to-action elements
- Maintain high contrast ratios for accessibility
- Use cream backgrounds for warm, inviting sections
- Reserve dark green for premium, authoritative content

## Typography

### Font Families
- **Primary Font (Body)**: Inter
  - Clean, modern sans-serif
  - Excellent readability across all devices
  - Used for body text, buttons, and UI elements

- **Display Font (Headings)**: Plus Jakarta Sans
  - Bold, distinctive display font
  - Used for all headings (H1-H6)
  - Conveys professionalism and innovation

### Font Sizes & Hierarchy
- **H1**: 2.25rem - 3rem (36px - 48px) - Hero titles
- **H2**: 1.875rem - 2.25rem (30px - 36px) - Section headers
- **H3**: 1.5rem - 1.875rem (24px - 30px) - Subsection headers
- **Body Large**: 1.125rem - 1.25rem (18px - 20px) - Lead paragraphs
- **Body**: 1rem (16px) - Standard body text
- **Small**: 0.875rem (14px) - Captions and metadata

### Font Weights
- **Light**: 300 - Used sparingly for large display text
- **Regular**: 400 - Body text
- **Medium**: 500 - Emphasized body text
- **Semi-Bold**: 600 - Buttons and important links
- **Bold**: 700 - Headings and strong emphasis

## UI/UX Design System

### Spacing Scale
GC Ingredients uses a consistent 4px-based spacing system for all components and layouts.

- **4px**: Micro spacing (icon padding, borders)
- **8px**: Small spacing (component padding, gaps)
- **12px**: Compact spacing (card padding, form elements)
- **16px**: Base spacing (standard padding, margins)
- **20px**: Comfortable spacing (section spacing)
- **24px**: Generous spacing (component separation)
- **32px**: Large spacing (section headers, major breaks)
- **40px**: Extra large spacing (hero elements)
- **48px**: Massive spacing (full section breaks)
- **64px+**: Page-level spacing (hero sections, major dividers)

### Layout Grid System
- **Container Max Width**: 1280px (max-w-7xl in Tailwind)
- **Grid Columns**: 12-column responsive grid
- **Gutter Spacing**: 16px - 32px depending on screen size
- **Breakpoints**:
  - Mobile: < 640px (sm)
  - Tablet: 640px - 1024px (md/lg)
  - Desktop: > 1024px (xl/2xl)

### Component Patterns

#### Buttons
**Primary Button (.btn-primary)**
- Background: GC Green (#1a5c38)
- Text: White
- Padding: 12px 24px (0.75rem 1.5rem)
- Border Radius: 8px (0.5rem)
- Font Weight: 600 (Semi-bold)
- Font Size: 14px (0.9rem)
- Hover: Background to GC Green Light, subtle lift animation

**Secondary Button (.btn-secondary)**
- Background: Transparent
- Border: 2px solid GC Green
- Text: GC Green
- Same padding and typography as primary
- Hover: Background to GC Green, text to white

**Ghost Button**
- Background: Transparent
- Text: GC Green or White (context-dependent)
- No border, underline on hover
- Used for less prominent actions

#### Cards
**Standard Card**
- Background: White or GC Cream
- Border Radius: 8px - 16px
- Shadow: Subtle (0 4px 12px rgba(0,0,0,0.08))
- Padding: 24px - 32px
- Hover Effect: Lift animation (.card-hover class)

**Feature Card**
- Enhanced shadow on hover
- Border accent (optional)
- Icon integration
- Used for industry/service showcases

#### Section Tags (.section-tag)
- Small badge-style elements
- Background: Semi-transparent GC Green (8% opacity)
- Border: Thin GC Green border (15% opacity)
- Text: GC Green, uppercase, small font
- Border Radius: Full (9999px)
- Used to categorize sections and features

### Visual Hierarchy

#### Content Structure
1. **Hero Content**: Large typography, high contrast, minimal text
2. **Section Headers**: Clear hierarchy with H2/H3 tags
3. **Body Content**: Readable paragraphs with proper line height
4. **Supporting Text**: Smaller text for metadata, captions
5. **Interactive Elements**: Clearly differentiated buttons and links

#### Information Architecture
- **Primary Actions**: Green buttons, prominent placement
- **Secondary Actions**: Outlined buttons, less prominent
- **Navigation**: Clear hierarchy with active states
- **Content Flow**: Logical left-to-right, top-to-bottom progression

### Animation & Motion

#### Micro-interactions
- **Button Hover**: Subtle lift (translateY(-1px)) + shadow
- **Card Hover**: Lift effect (translateY(-4px)) + enhanced shadow
- **Form Focus**: Color transition to GC Green
- **Loading States**: Smooth opacity transitions

#### Page Transitions
- **Fade In**: Elements animate in on scroll (opacity 0 → 1)
- **Slide Up**: Content slides up from bottom (translateY + opacity)
- **Stagger Animation**: Sequential element reveals for lists/cards

#### Carousel & Sliders
- **Auto-advance**: 4.5-second intervals
- **Manual Controls**: Smooth transitions with direction awareness
- **Pause on Hover**: User interaction takes precedence

### Interactive States

#### Hover States
- **Links**: Color transition to GC Green Light
- **Buttons**: Background color change + transform
- **Cards**: Shadow enhancement + slight lift
- **Images**: Subtle scale or overlay effects

#### Focus States
- **Keyboard Navigation**: Visible focus rings (GC Green)
- **Form Elements**: Border color change to GC Green
- **Interactive Areas**: Clear visual feedback

#### Loading States
- **Skeleton Screens**: Placeholder layouts during loading
- **Progress Indicators**: Smooth animations for async operations
- **Button States**: Disabled styling with reduced opacity

### Responsive Design Patterns

#### Mobile-First Approach
- **Touch Targets**: Minimum 44px touch areas
- **Readable Text**: Minimum 16px font size
- **Thumb-Friendly**: Important actions in bottom 1/3 of screen
- **Swipe Gestures**: Horizontal scrolling for carousels

#### Breakpoint-Specific Adjustments
- **Mobile (< 640px)**: Single column, stacked layout, larger touch targets
- **Tablet (640px - 1024px)**: 2-column grids, adjusted spacing
- **Desktop (> 1024px)**: Multi-column layouts, optimal spacing

#### Content Reflow
- **Text Scaling**: Responsive typography with clamp() functions
- **Image Optimization**: Different sizes for different breakpoints
- **Layout Shifts**: Minimize CLS with proper aspect ratios

### Accessibility Patterns

#### Color Contrast
- **Text on Background**: Minimum 4.5:1 contrast ratio
- **Interactive Elements**: Clear distinction from static content
- **Focus Indicators**: Visible and high-contrast focus rings

#### Keyboard Navigation
- **Tab Order**: Logical navigation through interactive elements
- **Skip Links**: Quick access to main content areas
- **Keyboard Shortcuts**: Where applicable for power users

#### Screen Reader Support
- **Semantic HTML**: Proper heading hierarchy, landmarks
- **Alt Text**: Descriptive image alternatives
- **ARIA Labels**: Enhanced context for complex interactions

### Iconography & Imagery

#### Icon System
- **Library**: Lucide React icons
- **Size Scale**: 16px, 20px, 24px, 32px, 48px
- **Color**: GC Green for primary, GC Gray for secondary
- **Consistency**: Same icon for same function across the site

#### Image Guidelines
- **Aspect Ratios**: Consistent ratios within sections
- **Optimization**: Next.js Image component with automatic optimization
- **Alt Text**: Descriptive and contextual
- **Loading**: Lazy loading for performance

### Form Design

#### Input Fields
- **Border**: Thin GC Gray border, GC Green on focus
- **Padding**: 12px - 16px internal padding
- **Typography**: 16px font size (prevents zoom on iOS)
- **Validation**: Real-time feedback with color coding

#### Form Layout
- **Label Position**: Above inputs for clarity
- **Field Spacing**: 16px - 24px between fields
- **Group Related Fields**: Visual grouping with spacing
- **Progressive Disclosure**: Show/hide optional fields

### Data Visualization

#### Charts & Graphs
- **Color Palette**: GC Green primary, GC Orange secondary
- **Typography**: Clear labels with sufficient contrast
- **Accessibility**: Alternative text descriptions
- **Animation**: Smooth transitions for data changes

#### Statistics Display
- **Number Animation**: Count-up effect on scroll
- **Context**: Descriptive text accompanying numbers
- **Hierarchy**: Largest numbers for most important metrics
- **Consistency**: Same styling across all stat displays

## Website Sections

### 1. Navigation (Navbar)
**Purpose**: Site navigation and primary CTAs
**Key Elements**:
- Logo placement (left)
- Main navigation links: Solutions, Industries, About, Resources, Contact
- Primary CTA: "Get Started" button
- Mobile-responsive hamburger menu
**Design**: Clean, minimal with green accent on active states
**Height**: 80px (h-20) on desktop, responsive on mobile

### 2. Hero Section
**Purpose**: First impression, showcase core offerings
**Key Elements**:
- Full-screen image carousel (5 slides)
- Auto-rotating every 4.5 seconds
- Product categories: Meat & Poultry, Bakery & Tortilla, Dairy, Hydrocolloids, Custom Innovation
- Primary CTA: "Explore Solutions"
- Secondary CTA: "Contact Us"
**Design**: Dark overlay on images, white text, gradient backgrounds

### 3. Marquee Strip
**Purpose**: Social proof and credibility indicators
**Key Elements**:
- Scrolling text: "Trusted by 100+ manufacturers across 30+ countries"
- Certification badges
- Industry recognition logos
**Design**: Subtle animation, green accent text

### 4. Industries Section
**Purpose**: Showcase industry expertise
**Key Elements**:
- 4 main industries: Bakery, Tortilla, Dairy, Meat
- Each with emoji, color coding, description, and key features
- Interactive hover effects
**Design**: Card-based layout, industry-specific color schemes

### 5. Solutions Tab Section
**Purpose**: Detailed product offerings
**Key Elements**:
- Tabbed interface for different solution categories
- Technical specifications and benefits
- Application examples
**Design**: Clean tabs with green accents

### 6. Featured Products Section
**Purpose**: Highlight key products
**Key Elements**:
- Product cards with images
- Key benefits and applications
- Call-to-action links
**Design**: Grid layout, hover animations

### 7. Why GC Section
**Purpose**: Value proposition and differentiators
**Key Elements**:
- 6 key reasons: Food Science, Partnership, Global Supply, Speed to Market, Quality Assurance, Sustainability
- Icon-based cards with descriptions
**Design**: 3-column grid, color-coded icons

### 8. Research Section
**Purpose**: Showcase R&D capabilities
**Key Elements**:
- Lab images and equipment
- Research statistics (500+ trials annually)
- Innovation highlights
**Design**: Split layout with images and text

### 9. Manufacturing Section
**Purpose**: Demonstrate production capabilities
**Key Elements**:
- Manufacturing facility images
- Quality control processes
- Scale and capacity information
**Design**: Full-width imagery with overlay text

### 10. Stats Section
**Purpose**: Quantify achievements and scale
**Key Elements**:
- Key metrics: Years in business, Countries served, Manufacturers, Products developed
- Animated counters
**Design**: Large numbers with descriptive text

### 11. Testimonials Section
**Purpose**: Social proof through customer feedback
**Key Elements**:
- Customer quotes and logos
- Case studies
- Success stories
**Design**: Carousel or grid of testimonial cards

### 12. Logos Section
**Purpose**: Brand credibility through partnerships
**Key Elements**:
- Client logos
- Industry certifications
- Partnership badges
**Design**: Grid layout, grayscale with hover color

### 13. Blog Preview Section
**Purpose**: Content marketing and thought leadership
**Key Elements**:
- Latest blog posts
- Article previews with images
- Read more links
**Design**: Card-based layout

### 14. CTA Section
**Purpose**: Final conversion opportunity
**Key Elements**:
- Compelling headline
- Contact form or CTA button
- Contact information
**Design**: Prominent placement, contrasting colors

### 15. Footer
**Purpose**: Legal, navigation, and contact information
**Key Elements**:
- Company information
- Quick links
- Social media
- Contact details
- Copyright notice
**Design**: Multi-column layout, subtle styling

## Interactive Elements

### Buttons
- **Primary**: Green background (#1a5c38), white text, rounded corners
- **Secondary**: Transparent with green border, green text
- **Hover States**: Slight elevation, color transitions

### Animations
- **Framer Motion**: Smooth transitions and micro-interactions
- **Carousel**: Auto-advancing with manual controls
- **Scroll Animations**: Elements animate in on scroll
- **Hover Effects**: Subtle transforms and color changes

### Forms
- **Styling**: Clean inputs with green focus states
- **Validation**: Real-time feedback with appropriate colors
- **Accessibility**: Proper labels and ARIA attributes

## Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile Optimizations
- Collapsible navigation
- Stacked layouts
- Touch-friendly buttons
- Optimized typography scaling

## Accessibility

### Standards
- WCAG 2.1 AA compliance
- High contrast ratios
- Keyboard navigation support
- Screen reader compatibility
- Alt text for all images

### Implementation
- Semantic HTML structure
- ARIA labels where needed
- Focus indicators
- Color-independent navigation

## Content Guidelines

### Tone of Voice
- **Professional**: Technical accuracy and expertise
- **Approachable**: Clear, jargon-free explanations
- **Confident**: Backed by science and results
- **Helpful**: Solution-oriented communication

### Key Messaging
- Focus on benefits and results
- Emphasize technical expertise
- Highlight global reach and reliability
- Stress innovation and customization

## Technical Specifications

### Technologies Used
- **Framework**: Next.js 15
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Images**: Next.js Image component
- **Fonts**: Google Fonts (Inter, Plus Jakarta Sans)

### Performance
- Optimized images and assets
- Lazy loading implementation
- Minimal JavaScript bundles
- Fast loading times

## File Organization

### Component Structure
```
src/
  components/
    layout/          # Navbar, Footer
    home/           # Page sections
    ui/             # Reusable UI components
```

### Asset Organization
```
public/
  images/          # Optimized images
  icons/           # Icon assets
```

This comprehensive brand guidelines document ensures consistency across all GC Ingredients marketing materials and digital experiences.