OPENQASM 3.0;
include "stdgates.inc";

// H²QEC Surface Code Circuit - 5x5 Lattice (25 data qubits + 24 stabilizer qubits = 49 qubits)
// Designed for H²QEC hysteresis-based error detection validation
// Circuit depth optimized for IBM hardware (ibm_fez, ibm_torino)

qubit[49] q;

// Data qubits: q[0-24] (5x5 lattice)
// Stabilizer qubits: q[25-48] (X and Z stabilizers)

// ============================================
// INITIALIZATION: Prepare logical |0⟩ state
// ============================================

// Initialize all data qubits to |0⟩
// (QASM default is |0⟩, but explicit for clarity)

// ============================================
// SURFACE CODE STABILIZER MEASUREMENTS
// ============================================

// Round 1: X-stabilizer measurements (plaquettes)
// X-stabilizers measure Z errors on data qubits

// Top-left X-stabilizer (q[25])
h q[25];
cx q[25], q[0];
cx q[25], q[1];
cx q[25], q[5];
cx q[25], q[6];
h q[25];

// Top X-stabilizers (q[26-29])
h q[26];
cx q[26], q[1];
cx q[26], q[2];
cx q[26], q[6];
cx q[26], q[7];
h q[26];

h q[27];
cx q[27], q[2];
cx q[27], q[3];
cx q[27], q[7];
cx q[27], q[8];
h q[27];

h q[28];
cx q[28], q[3];
cx q[28], q[4];
cx q[28], q[8];
cx q[28], q[9];
h q[28];

// Middle X-stabilizers (q[29-36])
h q[29];
cx q[29], q[5];
cx q[29], q[6];
cx q[29], q[10];
cx q[29], q[11];
h q[29];

h q[30];
cx q[30], q[6];
cx q[30], q[7];
cx q[30], q[11];
cx q[30], q[12];
h q[30];

h q[31];
cx q[31], q[7];
cx q[31], q[8];
cx q[31], q[12];
cx q[31], q[13];
h q[31];

h q[32];
cx q[32], q[8];
cx q[32], q[9];
cx q[32], q[13];
cx q[32], q[14];
h q[32];

h q[33];
cx q[33], q[10];
cx q[33], q[11];
cx q[33], q[15];
cx q[33], q[16];
h q[33];

h q[34];
cx q[34], q[11];
cx q[34], q[12];
cx q[34], q[16];
cx q[34], q[17];
h q[34];

h q[35];
cx q[35], q[12];
cx q[35], q[13];
cx q[35], q[17];
cx q[35], q[18];
h q[35];

h q[36];
cx q[36], q[13];
cx q[36], q[14];
cx q[36], q[18];
cx q[36], q[19];
h q[36];

// Bottom X-stabilizers (q[37-40])
h q[37];
cx q[37], q[15];
cx q[37], q[16];
cx q[37], q[20];
cx q[37], q[21];
h q[37];

h q[38];
cx q[38], q[16];
cx q[38], q[17];
cx q[38], q[21];
cx q[38], q[22];
h q[38];

h q[39];
cx q[39], q[17];
cx q[39], q[18];
cx q[39], q[22];
cx q[39], q[23];
h q[39];

h q[40];
cx q[40], q[18];
cx q[40], q[19];
cx q[40], q[23];
cx q[40], q[24];
h q[40];

// Round 2: Z-stabilizer measurements (stars)
// Z-stabilizers measure X errors on data qubits

// Top Z-stabilizers (q[41-44])
h q[41];
cz q[41], q[0];
cz q[41], q[1];
cz q[41], q[5];
h q[41];

h q[42];
cz q[42], q[1];
cz q[42], q[2];
cz q[42], q[6];
h q[42];

h q[43];
cz q[43], q[2];
cz q[43], q[3];
cz q[43], q[7];
h q[43];

h q[44];
cz q[44], q[3];
cz q[44], q[4];
cz q[44], q[8];
h q[44];

// Middle Z-stabilizers (q[45-48])
h q[45];
cz q[45], q[5];
cz q[45], q[6];
cz q[45], q[10];
h q[45];

h q[46];
cz q[46], q[6];
cz q[46], q[7];
cz q[46], q[11];
h q[46];

h q[47];
cz q[47], q[7];
cz q[47], q[8];
cz q[47], q[12];
h q[47];

h q[48];
cz q[48], q[8];
cz q[48], q[9];
cz q[48], q[13];
h q[48];

// ============================================
// H²QEC HYSTERESIS DETECTION POINT
// ============================================
// At this point, H²QEC hysteresis gate would analyze
// stabilizer measurement patterns to detect error syndromes
// with dwell-time thresholds (τ) and asymmetric thresholds (φ)

// ============================================
// MEASUREMENT
// ============================================
// Measure stabilizer qubits to read out syndrome
bit[24] syndrome;
syndrome[0] = measure q[25];
syndrome[1] = measure q[26];
syndrome[2] = measure q[27];
syndrome[3] = measure q[28];
syndrome[4] = measure q[29];
syndrome[5] = measure q[30];
syndrome[6] = measure q[31];
syndrome[7] = measure q[32];
syndrome[8] = measure q[33];
syndrome[9] = measure q[34];
syndrome[10] = measure q[35];
syndrome[11] = measure q[36];
syndrome[12] = measure q[37];
syndrome[13] = measure q[38];
syndrome[14] = measure q[39];
syndrome[15] = measure q[40];
syndrome[16] = measure q[41];
syndrome[17] = measure q[42];
syndrome[18] = measure q[43];
syndrome[19] = measure q[44];
syndrome[20] = measure q[45];
syndrome[21] = measure q[46];
syndrome[22] = measure q[47];
syndrome[23] = measure q[48];

// Optional: Measure data qubits for final state
bit[25] data_out;
for i in [0:25] {
    data_out[i] = measure q[i];
}

