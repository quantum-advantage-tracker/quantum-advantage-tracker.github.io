## UI Foundation

The Quantum Advantage Tracker (QAT) interface is built using a modern frontend stack designed for performance, accessibility, and consistency. The design system leverages **Tailwind CSS 4.0** for styling, **Radix UI** primitives for accessible interactive components, and **Lucide React** for iconography.

### Styling with Tailwind CSS 4.0

QAT uses the latest iteration of Tailwind CSS, utilizing the CSS-first configuration approach. Styling is handled via utility classes, with theme variables defined in `src/app/globals.css` using OKLCH color spaces for high-perceptual accuracy.

#### Utility: `cn`
The project provides a utility function to conditionally join class names and handle Tailwind CSS class conflicts.

**Usage:**
```tsx
import { cn } from '@/lib/utils';

export function MyComponent({ className, isActive }) {
  return (
    <div className={cn(
      "base-styles",
      isActive && "active-styles",
      className
    )}>
      Content
    </div>
  );
}
```

---

## Core Components

### Button
The `Button` component is the primary interactive element. It is built on Radix UI primitives and supports several variants and sizes. It includes an `asChild` prop to support polymorphic rendering (e.g., rendering as a Next.js `Link` or an `<a>` tag).

**Props:**
| Prop | Type | Description |
| :--- | :--- | :--- |
| `variant` | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | Visual style of the button. |
| `size` | `'default' \| 'sm' \| 'lg' \| 'icon'` | Padding and font size. |
| `asChild` | `boolean` | When true, the button will pass its props to its immediate child. |

**Usage Examples:**

*Standard Button:*
```tsx
import { Button } from '@/components/ui/button';

<Button variant="default" size="lg">
  Click Me
</Button>
```

*Navigational Link:*
```tsx
import { Button } from '@/components/ui/button';
import Link from 'next/link';

<Button asChild variant="secondary">
  <Link href="/trackers">View trackers</Link>
</Button>
```

---

## Iconography

### Lucide Icons
General UI icons are sourced from `lucide-react`. These should be used for common actions like navigation or indicators.

```tsx
import { ChevronRightIcon } from 'lucide-react';

<Button>
  Next <ChevronRightIcon className="ml-2 h-4 w-4" />
</Button>
```

### Specialized Icons
Custom icons for the project (such as platform-specific logos) are located in `src/icons`.

*   `GithubIcon`: Used for links to repositories and submission tickets.

---

## Specialized Navigation Components

### TrackerTabs
Located in `src/app/trackers/TrackerTabs.tsx`, this component provides the primary navigation between the three quantum advantage pathways. It automatically detects the active route to highlight the current tracker.

```tsx
import { TrackerTabs } from './TrackerTabs';

// Usage within a layout or page
<TrackerTabs />
```

### NavMenu
The main header navigation component. It handles active link styling for the top-level sections: "Advantage trackers" and "Participate".

---

## UI Patterns

### Infinite Marquee
Used for the `Contributors` section, this pattern uses a custom Tailwind animation (`animate-marquee`) to scroll a list of institutions horizontally. It is implemented in `src/app/(home)/Contributors.tsx`.

### Data Tables
Submissions are displayed using pathway-specific table components (e.g., `SubmissionsTable`). These are designed to handle:
- Mapping raw JSON data to UI rows.
- Formatting dates using `formatDate`.
- Rendering dynamic GitHub links for circuit instances.

---

## Helper Utilities

The library includes several TypeScript utilities to assist in component rendering:

| Function | Description |
| :--- | :--- |
| `formatDate(dateString: string)` | Converts ISO strings to `YYYY-MM-DD` format. |
| `sortSubmissions(arr: T[])` | Sorts submissions by `createdAt` in descending order. |
| `getCircuitInstanceUrl(path, circuit)` | Generates a direct GitHub URL for a specific circuit model. |
| `getHamiltonianUrl(instance)` | Generates a direct GitHub URL for a specific Hamiltonian. |