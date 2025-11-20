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

export function flattenInstances<T>(
  data: Record<string, { instances: T[] }>,
): (T & { type: string })[] {
  return Object.entries(data).flatMap(([type, model]) =>
    model.instances.map((instance) => ({
      ...instance,
      type,
    })),
  );
}

export function getCircuitInstanceUrl(
  path: string,
  circuitInstance: { type: string; path: string },
) {
  return `https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/tree/main/data/${path}/circuit-models/${circuitInstance.type}/${circuitInstance.path}`;
}

export function getHamiltonianUrl(hamiltonian: { type: string; path: string }) {
  return `https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/tree/main/data/variational-problems/hamiltonians/${hamiltonian.type}/${hamiltonian.path}`;
}
