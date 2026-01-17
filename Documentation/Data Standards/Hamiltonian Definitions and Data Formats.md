## Hamiltonian Definitions and Data Formats

The Variational Problems pathway relies on standardized Hamiltonian definitions to ensure that submissions are comparable and reproducible. Researchers can either utilize existing problem instances from the QAT library or provide their own.

### Hamiltonian Library Structure

All Hamiltonian data is hosted within the repository's data directory. The project organizes these files by problem type to facilitate easy lookup and benchmarking.

```text
data/variational-problems/hamiltonians/
├── anderson-impurity-model/
│   └── instance-01.json
└── molecular-systems/
    └── h2o_sto3g.fcidump
```

### Supported Data Formats

To accommodate different scientific domains, the tracker supports two primary formats for variational problems:

#### 1. FCIDUMP (Molecular Systems)
For quantum chemistry and electronic structure problems, the **FCIDUMP** format is the standard. This format provides the one-body and two-body integrals required to construct the molecular Hamiltonian.

*   **Usage:** Typically used for Ground State Energy estimations of molecules.
*   **Requirements:** Files should specify the number of orbitals, electrons, and the spin multiplicity.

#### 2. Anderson Impurity Models (AIM)
Submissions involving condensed matter physics or strongly correlated electrons often use the Anderson Impurity Model. These are typically provided as JSON files containing the model parameters:

*   **U:** Coulomb interaction strength.
*   **V:** Hybridization strength.
*   **$\epsilon$:** Orbital energies.

### Indexing Hamiltonians

To make a Hamiltonian available for submission, it must be indexed in the `hamiltonians.json` file. This file acts as the registry for all available instances.

**Schema for `hamiltonians.json`:**

```json
{
  "molecular-systems": {
    "instances": [
      {
        "id": "H2-STO3G",
        "path": "h2_sto3g.fcidump",
        "qubits": 4,
        "description": "Hydrogen molecule in STO-3G basis"
      }
    ]
  },
  "anderson-impurity": {
    "instances": [
      {
        "id": "AIM-01",
        "path": "aim_u4_v0.5.json",
        "qubits": 12,
        "description": "Single-impurity Anderson model with U=4.0"
      }
    ]
  }
}
```

### Accessing Hamiltonian Data via API

If you are building tools to interact with the QAT data, you can resolve the public URL for any Hamiltonian using the utility functions provided in the library.

```typescript
import { getHamiltonianUrl } from '@/utils';

// Example: Resolving a URL for a molecular instance
const instance = { 
  type: 'molecular-systems', 
  path: 'h2_sto3g.fcidump' 
};

const url = getHamiltonianUrl(instance);
// Returns: https://github.com/quantum-advantage-tracker/.../h2_sto3g.fcidump
```

### Contribution Guidelines

When submitting a new Hamiltonian instance:
1.  **Format Validation:** Ensure FCIDUMP files follow the standard standard (MOLPRO style).
2.  **Symmetry:** Clearly state if any symmetries (e.g., $Z_2$, $S_z$) were used to reduce the qubit count.
3.  **Classical Baseline:** When possible, include a known classical ground-state energy in your submission ticket to assist in the verification of the variational bound.