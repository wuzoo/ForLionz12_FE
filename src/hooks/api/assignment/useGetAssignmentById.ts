import { getIdAssignment } from "../../../api/assignment";
import { IAssignment } from "../../../types/Assignment";
import useAsyncData from "../../common/useAsyncData";

function useGetAssignmentById(AssignmentId: number) {
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

export default useGetAssignmentById;
