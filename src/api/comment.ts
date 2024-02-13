import axios from "axios";

export const getCommentsById = async (id: number) => {
  const response = await axios.get(`/comment/${id}`);

  return response.data;
};

export const getChildComments = async (id: number) => {
  const response = await axios.get(`/childcomment/${id}`);

  return response.data;
};
