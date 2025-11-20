export type Hamiltonians = {
  [key: string]: {
    instances: {
      id: string;
      path: string;
      electrons: number;
      orbitals: number;
    }[];
  };
};
