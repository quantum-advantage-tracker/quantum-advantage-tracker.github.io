# h2qec

H²Q (Hysteretic Quantum Error Correction) implements thermodynamic error mitigation for quantum computing, treating syndrome measurement errors as thermal fluctuations that can be filtered using hysteresis-based controls with dwell-time thresholds (φ = 2.67).

This approach achieves 79.7% false positive reduction in Surface Codes and Repetition Codes.

**Patent Reference**: US Provisional Application 63/927,371 (Filed Nov 29, 2025)

Construction details and implementation: [https://github.com/bengoechea/H2Q-Thermodynamic-Error-Mitigation](https://github.com/bengoechea/H2Q-Thermodynamic-Error-Mitigation)

Patent documentation: [https://kenmendoza.com/patents](https://kenmendoza.com/patents)

## Institutions

Independent Research, Kenneth A Mendoza

## Action Items: Validation on IBM Quantum

After the PR is merged, follow these steps to validate H²QEC and submit results:

### 1. Run Validation on IBM Quantum (when you get access)

**Start with 3-qubit Repetition Code:**
- Use 1024 shots (estimated runtime: 1-2 minutes)
- Measure error suppression with vs without H²QEC

### 2. Calculate Your "Value" Metric

The value metric represents the improvement in error reduction:

```
value = (errors_without_H2QEC - errors_with_H2QEC) / errors_without_H2QEC * 100%
```

**Target**: 79.7% false positive reduction

### 3. Time Your Runs

Record both execution times:
- **Quantum runtime** = IBM execution time (seconds)
- **Classical runtime** = Your hysteresis post-processing time (seconds)

### 4. Submit Results via GitHub Issue

Once you have validation results:
1. Go to the repository and create a new issue
2. Use the "🗝️ Path 3 - Classically verifiable problems submission" template
3. Select the appropriate H²QEC circuit instance:
   - `h2qec_repetition_code_3q` (recommended for initial validation)
   - `h2qec_repetition_code_5q`
   - `h2qec_surface_code_5x5`
4. Fill in all required fields:
   - **Name**: e.g., "H²QEC 3-qubit Repetition Code Validation"
   - **Value**: Your calculated improvement percentage
   - **Method**: "H²Q Thermodynamic Error Mitigation"
   - **Method proof**: Link to [https://github.com/bengoechea/H2Q-Thermodynamic-Error-Mitigation](https://github.com/bengoechea/H2Q-Thermodynamic-Error-Mitigation)
   - **Authors**: Kenneth A Mendoza
   - **Institutions**: Independent Research
   - **Quantum runtime**: Your IBM execution time
   - **Classical runtime**: Your post-processing time
   - **Compute resources (quantum)**: e.g., "IBM ibm_fez" or "IBM ibm_torino"

### Notes

- The H²QEC approach brings a novel error mitigation strategy to the tracker, which complements existing circuit-solving approaches
- Ensure all measurements are reproducible and well-documented
- Include links to code, data, and any relevant publications
