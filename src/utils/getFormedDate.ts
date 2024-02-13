export default function getFormedDate(date: string) {
  const d = new Date(date).getTime();
  const krDay = d + 1000 * 3600 * 9;
  const newdate = new Date(krDay).toISOString().slice(0, 19).split("T");

  return newdate[0] + " " + newdate[1];
}
