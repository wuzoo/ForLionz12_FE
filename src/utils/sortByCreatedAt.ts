type param = {
  createdAt: string;
};

export function compare(a: param, b: param) {
  const firstDate = new Date(a.createdAt).getTime();
  const secondDate = new Date(b.createdAt).getTime();

  return secondDate - firstDate;
}
