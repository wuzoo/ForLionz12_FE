import { getMemberById } from "../../../api/member";
import { IUserInfo } from "../../../types/User";
import useAsyncData from "../../common/useAsyncData";

export function useMemberId(id: number) {
  const [state, reFetch] = useAsyncData<IUserInfo>(
    () => getMemberById(id),
    [id]
  );

  const { isloading, data, error } = state;
  console.log(state);

  return { isloading, data, error, reFetch };
}
