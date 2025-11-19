export function formatDate(dateString: string) {
  const date = new Date(dateString);
  // The locale 'en-CA' naturally formats dates as YYYY-MM-DD
  const formattedDate = new Intl.DateTimeFormat('en-CA').format(date);
  return formattedDate;
}

export function sortSubmissions<T extends { createdAt: string }>(
  arr: T[],
): T[] {
  return arr.sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateA - dateB;
  });
}

export function getCircuitInstanceUrl(path: string, circuitInstanceId: string) {
  return `https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/tree/main/data/${path}/circuit-instances/${circuitInstanceId}`;
}
