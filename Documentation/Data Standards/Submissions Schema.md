## Overview

The Quantum Advantage Tracker (QAT) relies on a structured JSON format to manage submissions and problem instances. All contributions are processed through GitHub Issue templates, which are then validated and merged into the project's data directory. 

Data is categorized by its scientific pathway: **Observable Estimations**, **Variational Problems**, and **Classically Verifiable Problems**.

## Common Submission Schema

While each pathway has unique requirements, all submission entries in the `submissions.json` files share a core set of metadata properties used for rendering the trackers and the contributors list.

```typescript
interface BaseSubmission {
  /** Unique identifier for the submission */
  id: string;
  /** ISO 8601 formatted date (e.g., "2025-01-20") */
  createdAt: string;
  /** Comma-separated list of participating organizations */
  institutions: string;
  /** Reference to the specific circuit model or problem type */
  type: string;
  /** Link to the research paper or technical report */
  sourceUrl: string;
}
```

### Formatting Notes
*   **Dates:** Use the `YYYY-MM-DD` format. The UI uses `Intl.DateTimeFormat` with the `en-CA` locale to process these values.
*   **Institutions:** These are parsed into a global list on the homepage. Ensure names are consistent (e.g., "IBM Quantum" vs "IBM") to avoid duplicate entries.

## Circuit Models and Instances

Problem instances are defined in `circuit-models.json` (or `hamiltonians.json` for variational problems). These files map problem categories to specific technical specifications.

```typescript
type CircuitModels = {
  [modelName: string]: {
    instances: {
      /** Unique ID for the instance */
      id: string;
      /** Path to the raw data file (OpenQASM, JSON, etc.) in the repository */
      path: string;
      /** Number of qubits used in the circuit */
      qubits: number;
      /** Total gate count */
      gates: number;
    }[];
  };
};
```

## Pathway-Specific Data

Depending on the chosen pathway, submissions must include additional fields required for scientific validation.

### Observable Estimations
Submissions in this category focus on the precision of expectation values.

| Field | Type | Description |
| :--- | :--- | :--- |
| `expectationValue` | `number` | The calculated value for the target observable. |
| `errorBar` | `number` | The mathematically grounded error range. |
| `confidenceInterval` | `string` | Proof or description of the error estimation method. |

### Variational Problems
These submissions are centered on the variational principle, specifically bounding ground-state energy.

| Field | Type | Description |
| :--- | :--- | :--- |
| `energy` | `number` | The reported upper bound of the ground-state energy. |
| `ansatz` | `string` | The type of trial wavefunction used. |
| `optimizer` | `string` | The classical optimization algorithm employed. |

### Classically Verifiable Problems
Submissions here are validated against known classical answers or checkable witnesses.

| Field | Type | Description |
| :--- | :--- | :--- |
| `score` | `number` | The accuracy or success rate of the quantum output. |
| `witness` | `string` | Pointer to the verification script or witness data used for validation. |

## Data Directory Structure

When contributing via Pull Request or analyzing the data locally, refer to the following structure within the `data/` folder:

```text
data/
├── observable-estimations/
│   ├── circuit-models.json     # Problem definitions
│   └── submissions.json        # Result data
├── variational-problems/
│   ├── hamiltonians.json       # Problem definitions
│   └── submissions.json        # Result data
└── classically-verifiable-problems/
    ├── circuit-models.json     # Problem definitions
    └── submissions.json        # Result data
```

## Utility Functions for Schema
If you are developing components for the tracker, use the following utilities in `src/utils.ts` to interface with the schema:

*   **`flattenInstances`**: Converts the nested `CircuitModels` object into a flat array for table rendering.
*   **`getCircuitInstanceUrl`**: Generates a direct GitHub link to the circuit file based on the `path` and `type`.
*   **`sortSubmissions`**: Sorts submissions by `createdAt` in descending order.