import type { VPSubmission } from '../../src/types/submissions';

export const submissions: VPSubmission[] = [
  {
    date: '2025-11-12',
    name: 'Submission name',
    link: '#',
    method: 'SQD',
    circuit: 'Some hamiltonian_52_1600',
    runtime: {
      quantum: 7200,
      classic: 0,
    },
    computeResources: {
      quantum: 'ibm_pittsburgh',
      classic: '',
    },
    institution: 'IBM Research, Algorithmiq, Flatiron',
    energyValue: -1123.4,
    errorBound: {
      low: 1,
      high: 1,
    },
  },
];
