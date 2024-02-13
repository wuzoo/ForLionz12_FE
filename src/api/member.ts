import axios from "axios";

export const getAllMember = async () => {
  const response = await axios.get(`${import.meta.env.VITE_MEMBER}/all`);

  return response.data;
};

export const getMemberById = async (id: number) => {
  const response = await axios.get(`${import.meta.env.VITE_MEMBER}?id=${id}`);

  return response.data;
};
