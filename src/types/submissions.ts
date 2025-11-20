type BaseSubmission = {
  createdAt: string;
  url: string;
  name: string;
  method: string;
  runtimeQuantum?: number;
  runtimeClassical?: number;
  computeResourcesQuantum?: string;
  computeResourcesClassical?: string;
  institutions: string;
};

export type OESubmission = BaseSubmission & {
  circuit: string;
  observableValue: number;
  errorBoundLow?: number;
  errorBoundHigh?: number;
};

export type VPSubmission = BaseSubmission & {
  hamiltonian: string;
  energy: number;
  errorBoundLow?: number;
  errorBoundHigh?: number;
  qubits?: number;
  gates?: number;
};

export type CVPSubmission = BaseSubmission & {
  circuit: string;
  value: string;
};
