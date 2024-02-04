import { getNoticeById } from "../../../api/notification";
import { INotification } from "../../../types/Notification";
import useAsyncData from "../../common/useAsyncData";

function useNoticeById(id: number) {
  const [state, reFetch] = useAsyncData<INotification>(
    () => getNoticeById(id),
    [id]
  );

  const { isloading, data, error } = state;

  return { isloading, data, error };
}

export default useNoticeById;
