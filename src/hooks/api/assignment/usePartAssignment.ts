import { getPartAssignment } from "../../../api/assignment";
import { IAssignmentResult } from "../../../types";
import useAsyncData from "../../common/useAsyncData";

export function usePartAssignment(part: string) {
  const [state, reFetch] = useAsyncData<IAssignmentResult>(
    () => getPartAssignment(part),
    [part]
  );

  const { isloading, error, data } = state;

  return { isloading, error, data, reFetch };
}
