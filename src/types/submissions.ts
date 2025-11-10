type BaseSubmission = {
  createdAt: string;
  url: string;
  name: string;
  circuit: string;
  method: string;
  runtimeQuantum?: number;
  runtimeClassical?: number;
  computeResourcesQuantum?: string;
  computeResourcesClassical?: string;
  institutions: string;
};

export type OESubmission = BaseSubmission & {
  observableValue: number;
  errorBoundLow: number;
  errorBoundHigh: number;
};

export type VPSubmission = BaseSubmission & {
  energyValue: number;
  errorBoundLow: number;
  errorBoundHigh: number;
};

export type CVPSubmission = BaseSubmission & {
  value: number;
};
