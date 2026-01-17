## Getting Started

Follow these steps to set up the Quantum Advantage Tracker on your local machine for development, testing, or data analysis.

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org) (LTS version recommended)
- A package manager (npm is used in these examples)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/8harath/QAT.git
    cd QAT
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running Locally

To launch the development server and view the tracker in your browser:

1.  **Start the server:**
    ```bash
    npm run dev
    ```

2.  **View the application:**
    Open [http://localhost:3000](http://localhost:3000) in your browser. The application supports Hot Module Replacement (HMR), so any changes you make to the source code or data files will reflect instantly.

### Repository Structure

Understanding where data and logic reside will help you navigate the project:

- `/data`: This is the most important directory for users. It contains the JSON files and circuit models that drive the tracker.
    - `/observable-estimations`: Data for rigorous error control experiments.
    - `/variational-problems`: Data for ground-state energy bounds and Hamiltonians.
    - `/classically-verifiable-problems`: Data for solutions scored against known classical witnesses.
- `/src/app`: Contains the Next.js application routes and UI components.
- `/src/components/ui`: Reusable UI primitives (buttons, tables, etc.).

### Common Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the local development server at `localhost:3000`. |
| `npm run build` | Generates a static production build in the `out/` directory. |
| `npm run lint` | Runs ESLint to check for code quality issues. |

### How to Participate

The project is designed to be community-driven. You can contribute in two primary ways without needing to modify the React code:

1.  **Submit Results:** Navigate to the [Participate](http://localhost:3000/participate) page locally or on the live site to find GitHub Issue templates. Submitting a template triggers the workflow to add your experiment to the tracker.
2.  **Explore Data:** If you are a researcher, you can find raw circuit models and Hamiltonians in the `data/` directory to use in your own quantum experiments.

### Building for Production

If you need to generate a static export of the site (e.g., for hosting on GitHub Pages):

```bash
npm run build
```

The output will be located in the `out/` folder, ready for deployment.