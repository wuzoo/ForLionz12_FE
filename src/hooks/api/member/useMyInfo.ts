import { getMyInfo } from "../../../api/member";
import { IUserInfo } from "../../../types/User";
import useAsyncData from "../../common/useAsyncData";

function useMyInfo() {
  const [state, reFetch] = useAsyncData<IUserInfo>(getMyInfo, []);

  const { isloading, data, error } = state;
  console.log(state);

  return { isloading, data, error, reFetch };
}

export default useMyInfo;