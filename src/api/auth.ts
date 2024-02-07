import axios from "axios";

export const getUser = async () => {
  const response = await axios.get(import.meta.env.VITE_MY_INFO);

  return response.data;
};
