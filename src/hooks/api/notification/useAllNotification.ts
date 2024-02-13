import { getAllNotification } from "../../../api/notification";
import { INotificationResult } from "../../../types/Notification";
import useAsyncData from "../../common/useAsyncData";

function useAllNotification() {
  const [state, reFetch] = useAsyncData<INotificationResult>(
    getAllNotification,
    []
  );

  const { isloading, data, error } = state;

  return { isloading, data, error, reFetch };
}

export default useAllNotification;
