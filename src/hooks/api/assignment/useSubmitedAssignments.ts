import { getSubmittedAssignment } from "../../../api/assignment";
import { ISubmitted } from "../../../types/Assignment";
import useAsyncData from "../../common/useAsyncData";

function useSubmittedAssignments(id: number) {
  const [state, reFetch] = useAsyncData<ISubmitted[]>(
    () => getSubmittedAssignment(id),
    [id]
  );

  const { isloading, error, data } = state;

  return { isloading, error, data, reFetch };
}

export default useSubmittedAssignments;
