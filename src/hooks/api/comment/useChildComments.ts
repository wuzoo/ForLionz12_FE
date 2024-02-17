import { getChildComments } from "../../../api/comment";
import { IComment } from "../../../types";
import useAsyncData from "../../common/useAsyncData";

export function useChildComments(id: number) {
  const [state, reFetch] = useAsyncData<IComment[]>(
    () => getChildComments(id),
    [id]
  );

  const { isloading, data, error } = state;

  return { isloading, data, error, reFetch };
}
