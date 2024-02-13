import { getCommentsById } from "../../../api/comment";
import { IComment } from "../../../types/Comment";
import useAsyncData from "../../common/useAsyncData";

function useCommentsById(id: number) {
  const [state, reFetch] = useAsyncData<IComment[]>(
    () => getCommentsById(id),
    [id]
  );

  const { isloading, data, error } = state;

  return { isloading, data, error, reFetch };
}

export default useCommentsById;
