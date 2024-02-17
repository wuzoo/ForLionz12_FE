import { getIdAssignment } from "../../../api/assignment";
import { IAssignment } from "../../../types";
import useAsyncData from "../../common/useAsyncData";

export function useGetAssignmentById(AssignmentId: number) {
  const [state, reFetch] = useAsyncData<IAssignment>(
    () => getIdAssignment(AssignmentId),
    [AssignmentId]
  );

  console.log(state);
  const { isloading, error, data } = state;

  return {
    isloading,
    error,
    data,
    reFetch,
  };
}
