export type CircuitModels = {
  [key: string]: {
    instances: {
      id: string;
      path: string;
      qubits: number;
      gates: number;
    }[];
  };
};
