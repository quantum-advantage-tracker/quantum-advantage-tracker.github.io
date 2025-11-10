type BaseSubmission = {
  createdAt: string;
  name: string;
  link: string;
  method: string;
  circuit: string;
  runtimeQuantum?: number;
  runtimeClassic?: number;
  computeResourcesQuantum?: string;
  computeResourcesClassic?: string;
  institution: string;
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
  observableValue: number;
};
