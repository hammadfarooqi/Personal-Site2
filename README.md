# The Archivist's Shelf

A tactile, interactive portfolio website inspired by the cozy gaming aesthetic of *A Little To The Left*. Organize your professional experiences, projects, and education by dragging Polaroids into their matching slots.

## Features

- **Drag & Drop Interaction**: Physically move Polaroids from a cluttered pile to their designated slots
- **Snap-to-Place**: Polaroids automatically snap into place when brought close to their matching slot
- **Visual Feedback**: Flash/glow effects and smooth animations provide satisfying tactile feedback
- **Content Reveal**: Detailed information slides in when a Polaroid is successfully placed
- **Tab Navigation**: Switch between Experience, Projects, and Education shelves
- **Progress Tracking**: Visual progress indicator shows completion status
- **Responsive Design**: Fully responsive with mobile-friendly touch interactions

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom warm neutral palette
- **Framer Motion** - Smooth animations and drag interactions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Adding Your Content

Edit `lib/data.ts` to add your own experiences, projects, and education:

```typescript
export const shelfData: Record<string, ShelfItem[]> = {
  experience: [
    {
      id: "exp-1",
      title: "Your Title",
      slotId: "slot-exp-1",
      aspectRatio: "4/3",
      category: "experience",
      details: "Your detailed description...",
    },
    // Add more items...
  ],
  // ...
};
```

### Styling

Customize colors and styling in `tailwind.config.ts`. The warm neutral palette can be adjusted to match your preferences.

## Project Structure

```
app/
  layout.tsx          # Root layout
  page.tsx            # Main page with state management
  globals.css         # Global styles and fonts
components/
  Shelf.tsx           # Main shelf container
  Polaroid.tsx        # Draggable Polaroid component
  Slot.tsx            # Recessed slot cutout
  TabNavigation.tsx   # Shelf category switcher
  ExperienceDetails.tsx # Content reveal component
  ProgressIndicator.tsx # Progress bar
lib/
  data.ts             # Content data structure
  utils.ts            # Utility functions (snap detection, etc.)
```

## Design Philosophy

The design emphasizes:
- **Tactile Interactions**: Physical drag-and-drop feels satisfying
- **Visual Feedback**: Clear animations and effects reward correct actions
- **Cozy Aesthetics**: Warm neutrals and handwritten fonts create a comfortable atmosphere
- **Progressive Disclosure**: Content reveals as users organize items

## License

MIT

