## Overview

Classically verifiable problems represent a pathway to quantum advantage where the output of a quantum computer can be validated efficiently using classical resources. Unlike other pathways that may rely on statistical error bounds or variational limits, this category focuses on problems where a "ground truth" is either known in advance or can be verified via a classical "witness."

Submissions in this category must demonstrate quantum advantage by scoring results against these known answers or by providing solutions to problems (such as those in NP) that are hard to solve but easy to check.

## Circuit Instances

The tracker provides a set of standardized circuit models and instances to ensure benchmarking consistency. Before submitting a result, practitioners should use the provided circuit specifications.

### Accessing Instances
All circuit models are stored as JSON files within the project repository. Each instance includes:
*   **ID**: A unique identifier for the specific problem instance.
*   **Path**: The relative path to the circuit file (e.g., OpenQASM).
*   **Qubits**: The number of qubits required for the circuit.
*   **Gates**: The total gate count of the instance.

You can browse the available instances directly on GitHub:
[View Classically Verifiable Circuit Models](https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/tree/main/data/classically-verifiable-problems/circuit-models)

## Participation and Submissions

To contribute to the Classically Verifiable Problems tracker, you must execute the provided circuit instances on quantum hardware or simulators and submit your results for community review.

### Submission Process

1.  **Select an Instance**: Choose a circuit from the [Circuit Models data directory](https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/tree/main/data/classically-verifiable-problems/circuit-models).
2.  **Run Experiment**: Execute the circuit and collect the output data.
3.  **Open a Submission Ticket**: Use the specific GitHub Issue template to provide your data. This ensures all metadata—such as device used, error mitigation techniques, and institutional contributors—is captured.

[Open a Submission Ticket](https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/issues/new?template=03-submission-path-classically-verifiable-problems.yml)

### Data Schema
Submissions are stored and displayed using a structured JSON format. If you are contributing new circuit models or bulk results, follow the `CircuitModels` type definition:

```typescript
export type CircuitModels = {
  [modelName: string]: {
    instances: {
      id: string;
      path: string;
      qubits: number;
      gates: number;
    }[];
  };
};
```

## Validation Mechanisms

The Classically Verifiable pathway utilizes two primary validation methods:

### 1. Known Answers
For specific problem sizes or structured circuits (such as those with hidden symmetries or specific benchmarks like Random Circuit Sampling in certain regimes), the exact output distribution or a specific property may be pre-calculated classically. Quantum outputs are then scored against these known values.

### 2. Efficiently Checkable Witnesses
For optimization or search problems, the quantum computer may provide a solution (a "witness"). While finding this solution classically might be computationally intensive, a classical algorithm can verify the solution's validity in polynomial time.

## Viewing Results

The [Classically Verifiable Problems Tracker](https://quantum-advantage-tracker.github.io/trackers/classically-verifiable-problems) displays a live table of all validated submissions. This table allows the community to compare:
*   **Hardware Platforms**: See how different QPUs perform on the same instances.
*   **Scalability**: Track how qubit counts and gate depths progress over time.
*   **Fidelity**: Monitor the accuracy of quantum outputs compared to the verifiable classical baseline.