# Facebook Marketplace Design Guidelines

## Design Approach: Reference-Based (Facebook Marketplace)

Drawing inspiration from Facebook Marketplace's proven interface, this design prioritizes clean product discovery, image-first presentation, and familiar social commerce patterns that users trust.

**Core Principles:**
- Visual clarity over decoration
- Product images as primary content
- Minimal friction for browsing and posting
- Trust through familiarity

---

## Color Palette

**Light Mode (Primary):**
- Primary Blue: 216 80% 50% (Facebook brand blue for CTAs, links)
- Background: 0 0% 98% (light neutral gray)
- Surface: 0 0% 100% (pure white for cards)
- Text Primary: 0 0% 13% (near-black)
- Text Secondary: 0 0% 45% (medium gray)
- Border: 0 0% 88% (subtle dividers)
- Success Green: 152 69% 31% (sold/available status)

**Dark Mode:**
- Primary Blue: 216 80% 60% (adjusted for dark backgrounds)
- Background: 0 0% 11% (dark charcoal)
- Surface: 0 0% 15% (elevated dark gray)
- Text Primary: 0 0% 95% (near-white)
- Text Secondary: 0 0% 65% (muted gray)
- Border: 0 0% 25% (subtle dark dividers)

---

## Typography

**Font Families:**
- Primary: 'Inter', system-ui, sans-serif (clean, modern readability)
- Fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI'

**Hierarchy:**
- Product Titles: text-lg font-semibold (18px, 600 weight)
- Prices: text-2xl font-bold (24px, 700 weight) - always prominent
- Body Text: text-base font-normal (16px, 400 weight)
- Labels/Meta: text-sm font-medium (14px, 500 weight)
- Category Tags: text-xs font-medium uppercase (12px, 500 weight, tracking-wider)

---

## Layout System

**Spacing Units:** Use Tailwind units of 2, 4, 6, and 8 for consistency
- Tight spacing: p-2, gap-2 (8px)
- Standard spacing: p-4, gap-4 (16px)
- Generous spacing: p-6, gap-6 (24px)
- Section spacing: p-8, py-16 (32px, 64px)

**Grid Structure:**
- Desktop: 4-column product grid (grid-cols-4)
- Tablet: 3-column grid (md:grid-cols-3)
- Mobile: 2-column grid (grid-cols-2)
- Container: max-w-7xl mx-auto px-4

---

## Component Library

### Navigation
- Fixed top navbar with logo, search bar, and "Sell Item" CTA
- Categories: Horizontal scrollable chips below nav
- Search: Prominent center-positioned with filter icon
- Height: h-16 with shadow-sm

### Product Cards
- Aspect ratio: Square images (aspect-square)
- Card structure: Image → Price → Title → Location → Date
- Hover state: Subtle lift (hover:shadow-lg transition-shadow)
- Border radius: rounded-lg (8px)
- Background: Surface white/dark with border

### Listing Form
- Multi-step feel with clear sections
- Image upload: Large dropzone with preview grid
- Price input: Prominent with currency symbol
- Category: Dropdown with icons
- Description: Textarea with character count
- Location: Auto-suggest input field

### Product Detail Page
- Hero: Image carousel with thumbnails
- Right sidebar: Price, title, seller info, contact button
- Description: Full-width below images
- Related items: Grid below description

### Filters & Search
- Sidebar filters (desktop): Category tree, price range slider, condition checkboxes
- Mobile: Bottom sheet drawer for filters
- Active filters: Dismissible chips above results
- Sort dropdown: Price, date, distance

---

## Images Strategy

**Hero Section:**
- Full-width hero banner (h-96) showcasing marketplace activity
- Image: Collage of popular listed items or people buying/selling
- Overlay: Gradient (from black/30% to transparent) for text readability
- CTA: "Start Selling" button with blurred background (backdrop-blur-sm bg-white/20)

**Product Images:**
- All listings require at least one image
- Placeholder: Use subtle pattern or icon for missing images
- Lazy loading: Implement for performance
- Image optimization: Modern formats with fallbacks

**Additional Images:**
- Empty states: Friendly illustrations for no results
- Category icons: Simple line icons in category chips
- Seller avatars: Circular with fallback initials

---

## Key Interactions

**Minimal Animations:**
- Card hover: Subtle scale (hover:scale-[1.02]) and shadow
- Button states: Color transitions only (transition-colors duration-200)
- Page transitions: None - instant navigation
- Loading states: Simple spinner, no skeleton screens

**Focus States:**
- Blue ring (ring-2 ring-primary) for keyboard navigation
- High contrast for accessibility compliance

---

## Page-Specific Layouts

**Homepage/Browse:**
- Hero banner (if implemented)
- Category quick-access row
- Product grid with infinite scroll or pagination
- Filters sidebar (desktop) or drawer (mobile)

**Product Detail:**
- 60/40 split: Image gallery (60%) / Details sidebar (40%)
- Mobile: Stacked layout with sticky CTA bar

**Create Listing:**
- Centered form (max-w-3xl)
- Progressive disclosure: Show relevant fields based on category
- Image upload first for visual emphasis
- Fixed bottom bar with "Post" CTA on mobile

**User Listings:**
- Tabs: Active, Sold, Saved
- Same card grid as browse
- Quick actions: Edit, Mark as sold, Delete

This design delivers a familiar, trustworthy marketplace experience focused on product discovery and frictionless transactions.