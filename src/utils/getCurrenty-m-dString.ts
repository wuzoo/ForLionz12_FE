export const initialDate = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();

  const tmpArr = [year, month, day];

  return tmpArr.join("-");
};
