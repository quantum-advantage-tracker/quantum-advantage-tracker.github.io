## Static Site Generation (SSG)

The Quantum Advantage Tracker is built as a fully static website using Next.js. By utilizing the `output: 'export'` configuration, the entire application is pre-rendered into static HTML, CSS, and JavaScript files. This architecture enables the site to be hosted on serverless platforms like GitHub Pages while maintaining high performance and SEO optimization.

### Data-Driven Architecture

Instead of a traditional database, the platform uses structured JSON files located in the `/data` directory as its data source. During the build process, Next.js crawls the application routes and injects the content of these JSON files directly into the generated pages.

To update the content on the site, users modify the corresponding JSON files. The site is then rebuilt to reflect these changes.

#### Data Integration Example
Components and pages import data directly using standard ESM imports. For example, the `TrackersOE` page consumes observable estimation data as follows:

```typescript
import circuitModels from '../../../../data/observable-estimations/circuit-models.json' assert { type: 'json' };
import submissions from '../../../../data/observable-estimations/submissions.json' assert { type: 'json' };

// The data is then passed to client or server components for rendering
export default async function TrackersOE() {
  return (
    <SubmissionsTable 
      submissions={submissions} 
      circuitModels={circuitModels} 
    />
  );
}
```

### Build Process

To generate the static distribution, execute the production build script. This compiles the TypeScript code and performs the static export.

```bash
npm run build
```

The resulting output is located in the `out/` directory (or the default Next.js export directory). This folder contains the complete, standalone website ready for deployment to any static web server.

### Configuration for Static Hosting

The platform is optimized for static environments through specific configurations in `next.config.ts`:

*   **Static Export**: `output: 'export'` ensures that no Node.js server is required at runtime.
*   **Image Optimization**: Since standard Next.js image optimization requires a running server, images are configured with `unoptimized: true` to work in a purely static context.
*   **Base Path**: To support hosting on GitHub Pages (which often uses subdirectories like `username.github.io/repo-name/`), the `basePath` is dynamically set via the `PAGES_BASE_PATH` environment variable.

### Routing and Links

The application uses Next.js `typedRoutes` to ensure internal links are valid at build time. Because the site is static, all routes (such as `/trackers/variational-problems`) are generated as physical HTML files or handled via client-side routing, ensuring a seamless experience without page reloads.

| Feature | Implementation |
| :--- | :--- |
| **Data Source** | JSON files in `/data` |
| **Rendering Strategy** | Static Site Generation (SSG) |
| **Deployment Target** | GitHub Pages |
| **Asset Handling** | Unoptimized (Static) |