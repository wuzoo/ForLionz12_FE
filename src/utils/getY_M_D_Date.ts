import getFormedDate from "./getFormedDate";

export const initialDate = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();

  const tmpArr = [year, month, day];

  return tmpArr.join("-");
};

export const ISOtoY_M_D_Date = (date: string) => {
  const y_m_d = getFormedDate(date).split(" ")[0];

  return y_m_d;
};
