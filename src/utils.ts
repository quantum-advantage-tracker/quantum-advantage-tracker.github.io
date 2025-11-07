export function formatDate(dateString: string) {
  const date = new Date(dateString);
  // The locale 'en-CA' naturally formats dates as YYYY-MM-DD
  const formattedDate = new Intl.DateTimeFormat('en-CA').format(date);
  return formattedDate;
}
