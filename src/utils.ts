import type { CircuitModels } from './types/circuitModels';

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  // The locale 'en-CA' naturally formats dates as YYYY-MM-DD
  const formattedDate = new Intl.DateTimeFormat('en-CA').format(date);
  return formattedDate;
}

export function sortSubmissions<T extends { createdAt: string }>(arr: T[]): T[] {
  return arr.sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateA - dateB;
  });
}

type FlattenedCircuitInstance = CircuitModels[keyof CircuitModels]['instances'][number] & {
  model: string;
};

export function flattenCircuitInstances(circuitModels: CircuitModels): FlattenedCircuitInstance[] {
  return Object.entries(circuitModels).flatMap(([modelName, model]) =>
    model.instances.map((instance) => ({
      ...instance,
      model: modelName,
    })),
  );
}

export function getCircuitInstanceUrl(path: string, circuitInstance: FlattenedCircuitInstance) {
  return `https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/tree/main/data/${path}/circuit-models/${circuitInstance.model}/${circuitInstance.path}`;
}
