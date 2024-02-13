import axios from "axios";

export const getAllQuestion = async () => {
  const response = await axios.get("/question/all");

  return response.data;
};

export const getParentTagData = async (id: number) => {
  const response = await axios.get(`/parentTag?parentTagId=${id}`);

  return response.data;
};

export const getTags = async () => {
  const response = await axios.get("/parentTag/all");

  return response.data;
};

export const getChildTagData = async (query: number[]) => {
  const str: string[] = [];
  query.map((item) => str.push(`childTagIds=${item}`));

  if (query.length === 0) {
    return null;
  }
  const response = await axios.get(`/questionTagMap?${str.join("&")}`);

  return response.data;
};

export const getQnaDetailById = async (id: number) => {
  const response = await axios.get(`/question?id=${id}`);

  return response.data;
};
