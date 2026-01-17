export type Hamiltonians = {
  [key: string]: {
    instances: {
      id: string;
      path: string;
      hilbert_space_size: number;
    }[];
  };
};
