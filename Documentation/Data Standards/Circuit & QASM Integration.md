## Circuit & QASM Integration

The Quantum Advantage Tracker (QAT) maintains a standardized repository of quantum circuits and Hamiltonian specifications. This ensures that every advantage claim is benchmarked against specific, reproducible instances.

### Repository Data Structure

Circuit metadata and source files are organized within the `/data` directory, categorized by their respective advantage pathways. 

*   **Observable Estimations:** Located in `/data/observable-estimations/circuit-models/`
*   **Variational Problems:** Located in `/data/variational-problems/hamiltonians/`
*   **Classically Verifiable Problems:** Located in `/data/classically-verifiable-problems/circuit-models/`

Each directory contains a JSON index (e.g., `circuit-models.json`) that maps human-readable metadata to raw OpenQASM or JSON files stored in the same subtree.

### Circuit Metadata Schema

To ensure consistency across the platform, every circuit instance must conform to a specific metadata structure. This metadata allows the tracker to display complexity metrics like qubit counts and gate depths alongside experimental results.

```typescript
type CircuitInstance = {
  id: string;      // Unique identifier for the instance
  path: string;    // Filename of the .qasm or .json file
  qubits: number;  // Total number of qubits required
  gates: number;   // Total gate count (transpiled or logical)
};

type CircuitModels = {
  [modelType: string]: {
    instances: CircuitInstance[];
  };
};
```

### Accessing Circuit Files

The platform generates direct links to the raw source files hosted on GitHub. This allows researchers to download the exact circuit used in a submission for local verification or hardware execution.

#### Circuit Instances (OpenQASM)
For non-variational pathways, the repository primarily stores **OpenQASM** files. These represent the logical circuit instructions. 

The public URL for any circuit is resolved using the following utility logic:
```typescript
// Example resolution for a Classically Verifiable Problem
const url = getCircuitInstanceUrl('classically-verifiable-problems', {
  type: 'random-circuit-sampling',
  path: 'n53_d20_0.qasm'
});
// Result: https://github.com/.../data/classically-verifiable-problems/circuit-models/random-circuit-sampling/n53_d20_0.qasm
```

#### Hamiltonian Specifications
For **Variational Problems**, the repository stores Hamiltonian specifications (typically in JSON format) rather than gate-level circuits. This allows participants to define their own ansatz while remaining bound to the same problem instance.

```typescript
const hamiltonianUrl = getHamiltonianUrl({
  type: 'hubbard-model',
  path: '1d_8site_u4.json'
});
```

### Contribution Workflow

If you are submitting a new advantage candidate that does not fit an existing instance:

1.  **Prepare the File:** Generate your circuit in OpenQASM format or define your Hamiltonian in JSON.
2.  **Upload to GitHub:** Place the file in the appropriate subdirectory under `/data`.
3.  **Update the Index:** Add a new entry to the corresponding `circuit-models.json` or `hamiltonians.json` file.
4.  **Reference in Submission:** When opening a [Submission Ticket](https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/issues/new/choose), use the `id` defined in your metadata.

By centralizing these assets, the QAT provides a "source of truth" for the quantum community to validate claims of superior performance.