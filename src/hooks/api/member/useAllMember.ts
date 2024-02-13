import { getAllMember } from "../../../api/member";
import { IMembers } from "../../../types/User";
import useAsyncData from "../../common/useAsyncData";

function useAllMember() {
  const [state, reFetch] = useAsyncData<IMembers>(getAllMember, []);

  const { isloading, data, error } = state;

  return { isloading, data, error, reFetch };
}

export default useAllMember;
