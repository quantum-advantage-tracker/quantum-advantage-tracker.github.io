export function RuntimeSeconds(props: { value: number | undefined }) {
  const { value } = props;

  if (value === undefined) return '-';

  if (Math.abs(value) >= 1e7) {
    return value.toExponential();
  }

  return value;
}
