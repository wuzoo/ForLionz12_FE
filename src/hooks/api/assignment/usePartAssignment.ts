import { getPartAssignment } from "../../../api/assignment";
import { IAssignmentResult } from "../../../types/Assignment";
import useAsyncData from "../../common/useAsyncData";

function usePartAssignment(part: string) {
  const [state, reFetch] = useAsyncData<IAssignmentResult>(
    () => getPartAssignment(part),
    [part]
  );

  const { isloading, error, data } = state;

  return { isloading, error, data, reFetch };
}

export default usePartAssignment;
