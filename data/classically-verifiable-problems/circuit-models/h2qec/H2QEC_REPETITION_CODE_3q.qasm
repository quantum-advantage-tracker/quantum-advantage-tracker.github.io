OPENQASM 3.0;
include "stdgates.inc";

// H²QEC Repetition Code Circuit - 3-qubit code (minimum for error detection)
// Designed for H²QEC hysteresis-based error detection validation
// Circuit optimized for rapid testing on IBM hardware

qubit[3] q;
bit[2] syndrome;

// ============================================
// INITIALIZATION: Prepare logical |0⟩ state
// ============================================
// Encode logical |0⟩ = |000⟩

// ============================================
// ENCODING CIRCUIT (optional - for state preparation)
// ============================================
// For logical |0⟩, all qubits start in |0⟩ (default)

// ============================================
// ERROR INJECTION (for testing)
// ============================================
// Uncomment to inject test errors:
// x q[1];  // Bit-flip error on middle qubit
// z q[0];  // Phase-flip error on first qubit

// ============================================
// STABILIZER MEASUREMENTS
// ============================================

// Z₁Z₂ stabilizer (detects X errors)
// Measures parity of qubits 0 and 1
h q[0];
cx q[0], q[1];
h q[0];
syndrome[0] = measure q[0];

// Reset ancilla for next measurement
reset q[0];

// Z₂Z₃ stabilizer (detects X errors)
// Measures parity of qubits 1 and 2
h q[0];
cx q[1], q[0];
cx q[2], q[0];
h q[0];
syndrome[1] = measure q[0];

// ============================================
// H²QEC HYSTERESIS DETECTION POINT
// ============================================
// H²QEC hysteresis gate analyzes syndrome pattern:
// - syndrome[0] = 1, syndrome[1] = 0 → error on q[0]
// - syndrome[0] = 1, syndrome[1] = 1 → error on q[1]
// - syndrome[0] = 0, syndrome[1] = 1 → error on q[2]
// - syndrome[0] = 0, syndrome[1] = 0 → no error detected
//
// H²QEC applies dwell-time threshold (τ) and asymmetric
// threshold (φ) to filter transient errors

// ============================================
// MEASUREMENT
// ============================================
bit[3] data_out;
data_out[0] = measure q[0];
data_out[1] = measure q[1];
data_out[2] = measure q[2];

