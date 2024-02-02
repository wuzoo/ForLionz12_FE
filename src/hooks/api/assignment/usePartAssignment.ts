import { getPartAssignment } from "../../../api/assignment";
import { IAssignmentResult } from "../../../types/Assignment";
import useAsyncData from "../../common/useAsyncData";

function usePartAssignment(part: string) {
  const [state, fetchData] = useAsyncData<IAssignmentResult>(
    () => getPartAssignment(part),
    [part]
  );

  const { isloading, error, data: assignments } = state;

  return {
    isloading,
    error,
    assignments,
    fetchData,
  };
}

export default usePartAssignment;
