import { useEffect, useState } from "react";
import {
  getAllQuestion,
  getChildTagData,
  getParentTagData,
} from "../../../api/qna";
import { ChildtagType, IQna } from "../../../types/Qna";

export function useSelectedData(id: number) {
  const [data, setData] = useState<IQna[]>();
  const [childTags, setChildTags] = useState<ChildtagType[]>();

  const [query, setQuery] = useState<number[]>([]);

  const get = async () => {
    if (id === 0) {
      const response = await getAllQuestion();

      setChildTags([]);
      setData(response.data);
    } else {
      const response = await getParentTagData(id);
      const { childTags, questionPosts } = response.data;

      setChildTags(childTags);
      setData(questionPosts);
    }
  };

  const getChildData = async () => {
    const response = await getChildTagData(query);

    if (response !== null) {
      setData(response.data);
    }
  };

  useEffect(() => {
    get();
    setQuery([]);
  }, [id]);

  useEffect(() => {
    getChildData();
  }, [query]);

  return { childTags, data, query, setQuery };
}
