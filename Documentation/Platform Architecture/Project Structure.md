## Directory Overview

The Quantum Advantage Tracker is built using Next.js with the **App Router** architecture. It is configured for a static export, meaning the entire site is generated as a set of static HTML/CSS/JS files from structured JSON data.

```text
.
├── data/               # Project "Database" (JSON files & circuit models)
├── src/
│   ├── app/            # Application routes, layouts, and pages
│   ├── components/     # Reusable UI components
│   ├── icons/          # Custom SVG icons
│   ├── lib/            # Utility functions (Tailwind merging, etc.)
│   ├── types/          # TypeScript definitions
│   └── utils.ts        # Helper functions for data processing
├── public/             # Static assets (images, etc.)
└── next.config.ts      # Build configuration (Static HTML export)
```

## Routing and Page Hierarchy

The application follows the Next.js App Router conventions. Key routes are organized as follows:

| Route | File Path | Description |
| :--- | :--- | :--- |
| `/` | `src/app/(home)/page.tsx` | The landing page featuring an overview of the three pathways. |
| `/participate` | `src/app/participate/page.tsx` | Documentation on how to contribute new results and circuit models. |
| `/trackers` | `src/app/trackers/page.tsx` | Redirects to the default tracker (Observable Estimations). |
| `/trackers/[pathway]` | `src/app/trackers/[pathway]/page.tsx` | Specific dashboard for one of the three advantage pathways. |

### Tracker Pathways
The project is divided into three primary pathways, each located within `src/app/trackers/`:
*   **Observable Estimations:** Tracks expectation values and error bars.
*   **Variational Problems:** Focuses on ground-state energy bounds.
*   **Classically Verifiable Problems:** Focuses on problems with checkable witnesses.

## Data-to-UI Mapping

The UI is dynamically populated by JSON files located in the root `data/` directory. This allows the community to submit results via Pull Requests without modifying application code.

### Submission Data
Each tracker pathway imports data from two primary JSON files:
1.  **`submissions.json`**: Contains the experimental results, contributor information, and links to external papers.
2.  **`circuit-models.json`** or **`hamiltonians.json`**: Contains the definitions of the problem instances being tracked.

### Utility Functions
The application uses several utilities in `src/utils.ts` to map this data to the frontend:

*   **`formatDate`**: Standardizes submission dates to `YYYY-MM-DD`.
*   **`sortSubmissions`**: Ensures the latest quantum advantage claims appear at the top of the tables.
*   **`getCircuitInstanceUrl`**: Generates direct links to the GitHub-hosted circuit files for researchers to download and verify.

```typescript
// Example: Generating a link to a circuit model
const url = getCircuitInstanceUrl('observable-estimations', {
  type: 'random-circuits',
  path: 'n50_d20.qasm'
});
```

## UI Component Architecture

The project utilizes a modular component system built on [Tailwind CSS](https://tailwindcss.com).

*   **`NavMenu.tsx`**: The global navigation bar. It includes logic to highlight the active route using the `usePathname` hook.
*   **`TrackerTabs.tsx`**: A specialized sub-navigation component used within the `/trackers` route to switch between different advantage categories.
*   **`SubmissionsTable.tsx`**: A pathway-specific component that renders the JSON data into a searchable and sortable grid.
*   **`Contributors.tsx`**: An animated marquee on the home page that dynamically parses the `submissions.json` files to display participating organizations.

## Configuration for Deployment

The site is configured for **GitHub Pages** deployment via `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',               // Enables static HTML export
  basePath: process.env.PAGES_BASE_PATH, // Handles sub-directory hosting
  images: { unoptimized: true },  // Required for static export compatibility
};
```

This configuration ensures that the project remains platform-agnostic and can be hosted entirely from the repository's `/docs` or `gh-pages` branch.