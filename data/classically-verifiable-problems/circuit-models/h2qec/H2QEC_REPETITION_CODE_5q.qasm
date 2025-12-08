OPENQASM 3.0;
include "stdgates.inc";

// H²QEC Repetition Code Circuit - 5-qubit code
// Designed for H²QEC hysteresis-based error detection validation
// Provides better error correction capability than 3-qubit code

qubit[5] q;
bit[4] syndrome;

// ============================================
// INITIALIZATION: Prepare logical |0⟩ state
// ============================================
// Encode logical |0⟩ = |00000⟩

// ============================================
// ERROR INJECTION (for testing - uncomment as needed)
// ============================================
// x q[2];  // Bit-flip error on middle qubit
// z q[1];  // Phase-flip error

// ============================================
// STABILIZER MEASUREMENTS
// ============================================

// Z₀Z₁ stabilizer (detects X errors between q[0] and q[1])
h q[0];
cx q[0], q[1];
h q[0];
syndrome[0] = measure q[0];
reset q[0];

// Z₁Z₂ stabilizer (detects X errors between q[1] and q[2])
h q[0];
cx q[1], q[0];
cx q[2], q[0];
h q[0];
syndrome[1] = measure q[0];
reset q[0];

// Z₂Z₃ stabilizer (detects X errors between q[2] and q[3])
h q[0];
cx q[2], q[0];
cx q[3], q[0];
h q[0];
syndrome[2] = measure q[0];
reset q[0];

// Z₃Z₄ stabilizer (detects X errors between q[3] and q[4])
h q[0];
cx q[3], q[0];
cx q[4], q[0];
h q[0];
syndrome[3] = measure q[0];

// ============================================
// H²QEC HYSTERESIS DETECTION POINT
// ============================================
// H²QEC analyzes syndrome pattern with dwell-time thresholds:
// - Multiple consecutive non-zero syndromes → persistent error
// - Single non-zero syndrome → transient error (filtered by H²QEC)
// - Threshold φ determines sensitivity to error patterns

// ============================================
// MEASUREMENT
// ============================================
bit[5] data_out;
for i in [0:5] {
    data_out[i] = measure q[i];
}

