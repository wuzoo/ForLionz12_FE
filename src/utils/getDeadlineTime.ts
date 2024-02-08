export const getDeadlineTime = (date: string) => {
  const ymd = date.split("-");

  const y = +ymd[0];
  const m = +ymd[1];
  const d = +ymd[2];

  const day =
    new Date(y, m - 1, d).getTime() +
    9 * 1000 * 60 * 60 -
    1000 * 60 +
    new Date().getTimezoneOffset() * 60 * 1000;

  const newday = new Date(day).toISOString();

  return newday;
};
