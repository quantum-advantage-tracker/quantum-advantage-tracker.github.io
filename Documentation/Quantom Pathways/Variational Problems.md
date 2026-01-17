## Overview

The **Variational Problems** pathway focuses on leveraging the variational principle to find approximate solutions to complex quantum systems. This pathway is specifically designed for algorithms—such as the Variational Quantum Eigensolver (VQE)—that aim to determine the ground-state energy of a given Hamiltonian.

Unlike other methods where validation might require an exact classical solution, the variational principle provides a mathematically guaranteed upper bound on the ground-state energy. This allows the community to track progress by comparing the energy levels achieved by quantum hardware against established classical benchmarks.

## The Variational Principle and Verification

A submission in this category is considered valid if it provides a certified upper bound on the energy of a system. The core logic follows the variational theorem:

$$E(\theta) = \frac{\langle \psi(\theta) | \hat{H} | \psi(\theta) \rangle}{\langle \psi(\theta) | \psi(\theta) \rangle} \geq E_{0}$$

Where $E_0$ is the true ground-state energy. Because any valid quantum state results in an energy greater than or equal to the ground state, researchers can demonstrate advantage by producing a lower upper-bound than previously known classical or quantum results.

### Key Requirements for Submissions
To maintain scientific rigor, all entries in the Variational Problems tracker must include:
*   **Hamiltonian Specification**: The exact operator used for the problem instance.
*   **Energy Bounds**: The calculated expectation value (upper bound) and its associated error bars.
*   **Ansatz Transparency**: Documentation of the trial wave function (ansatz) and the optimization protocol used.
*   **Evidence of Respecting the Principle**: Proof that the reported value was obtained via a valid state preparation that does not violate the variational bound.

## Accessing Hamiltonian Data

The project provides standardized Hamiltonian instances to ensure fair benchmarking across different quantum platforms.

### Data Structure
Hamiltonian metadata is stored in `data/variational-problems/hamiltonians.json`. Each entry typically includes:

```typescript
{
  "id": "string",       // Unique identifier for the instance
  "path": "string",     // Relative path to the Hamiltonian file (e.g., OpenFermion format)
  "qubits": "number",   // Number of qubits required
  "type": "string"      // Category (e.g., "Molecular", "Lattice Models")
}
```

You can retrieve the direct GitHub URL for a specific Hamiltonian instance using the project's utility helper:

```typescript
import { getHamiltonianUrl } from '@/utils';

const url = getHamiltonianUrl({ 
  type: "molecular-systems", 
  path: "h2_bond_0.74.jld2" 
});
```

## How to Participate

Contributing to the Variational Problems tracker involves running experiments on existing Hamiltonians or proposing new ones.

### 1. Select a Hamiltonian
Navigate to the [Hamiltonian Repository](https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/tree/main/data/variational-problems/hamiltonians) to find problem instances. These are categorized by complexity and physical system type.

### 2. Run your Experiment
Execute your variational algorithm on your chosen quantum hardware or simulator. Ensure you collect sufficient metadata regarding:
*   Optimization convergence.
*   Error mitigation techniques applied.
*   The final expectation value $\langle \hat{H} \rangle$.

### 3. Submit Results
Submissions are handled via GitHub Issue templates. When opening a **02-submission-path-variational-problems.yml** ticket, you will be asked to provide:
*   **System Details**: Number of qubits and gates used.
*   **Result**: The specific energy value achieved.
*   **Institutions**: The organizations involved in the experiment.
*   **Artifacts**: Links to the raw data or a pre-print (e.g., arXiv) describing the methodology.

## Benchmarking Against Classical Methods
The tracker serves as a leaderboard where quantum results are displayed alongside "Best Known Classical" results. This enables a direct comparison of how close current quantum hardware can get to (or if they can surpass) the limits of classical approximation methods like DMRG, Coupled Cluster, or Quantum Monte Carlo.