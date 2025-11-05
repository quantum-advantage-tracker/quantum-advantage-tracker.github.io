type BaseSubmission = {
  date: string;
  name: string;
  link: string;
  method: string;
  circuit: string;
  runtime: {
    quantum: number;
    classic: number;
  };
  computeResources: {
    quantum: string;
    classic: string;
  };
  institution: string;
};

export type OESubmission = BaseSubmission & {
  observableValue: number;
  errorBound: {
    low: number;
    high: number;
  };
};

export type VPSubmission = BaseSubmission & {
  energyValue: number;
  errorBound: {
    low: number;
    high: number;
  };
};

export type CVPSubmission = BaseSubmission & {
  value: number;
  observableValue: number;
};
