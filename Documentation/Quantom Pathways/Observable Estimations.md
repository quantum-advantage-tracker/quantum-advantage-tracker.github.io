## Overview

The **Observable Estimations** pathway is designed for experiments that report the expectation values of quantum observables. This track prioritizes trust through rigorous error control, requiring submissions to include not just a result, but mathematically grounded error bars that validate the accuracy of the quantum computation.

This pathway is ideal for researchers demonstrating performance on noisy intermediate-scale quantum (NISQ) devices where error mitigation and precise characterization are critical for claims of quantum advantage.

## Validation Criteria

To maintain scientific rigor, every submission in this tracker must meet the following requirements:

*   **Expectation Values**: Reports must provide the calculated expectation value $\langle O \rangle$ for a given observable.
*   **Provable Confidence Intervals**: Submissions must include error bars derived from mathematically sound methods.
*   **Validation Method**: The reported values are benchmarked against known or verifiable bounds to ensure the quantum device is performing within an acceptable range of accuracy.

## Accessing Circuit Instances

Before submitting a result, contributors must select a circuit model and specific instance to run. These are hosted in the project repository and defined by their complexity (qubit count and gate depth).

You can browse the available instances in the data directory:
`data/observable-estimations/circuit-models/`

### Circuit Instance Schema
Each circuit instance is defined by the following properties:

| Property | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | A unique identifier for the specific instance. |
| `path` | `string` | The file path to the circuit description (e.g., OpenQASM). |
| `qubits` | `number` | The number of qubits required for the circuit. |
| `gates` | `number` | The total gate count (depth/complexity) of the circuit. |

## How to Participate

Contributing to the Observable Estimations tracker follows a standardized workflow to ensure data consistency.

### 1. Select your Target
Choose an existing circuit instance from the [Circuit Models repository](https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/tree/main/data/observable-estimations/circuit-models). If you wish to propose a new circuit model, refer to the [data contribution documentation](https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/tree/main/data/README.md).

### 2. Run the Experiment
Execute the circuit on your quantum hardware or high-performance simulator. Ensure you collect sufficient data to generate the required confidence intervals and error estimations.

### 3. Submit Your Results
Submissions are handled via GitHub Issues using a structured template. This allows the community to review and validate the findings.

*   **Template**: [Observable Estimations Submission Ticket](https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/issues/new?template=01-submission-path-observable-estimations.yml)

## Data Reference

Submissions are stored as JSON objects. When viewing the tracker, the system processes these entries to display performance across various hardware providers and institutions.

```json
// Example of a submission structure
{
  "id": "example-submission-id",
  "instanceId": "circuit-qubits-50-depth-100",
  "expectationValue": 0.1234,
  "errorBar": 0.005,
  "hardware": "Processor-Name",
  "institutions": "University A, Lab B",
  "createdAt": "2025-05-20"
}
```

The tracker automatically sorts these submissions by date, ensuring the most recent experimental breakthroughs are highlighted first.