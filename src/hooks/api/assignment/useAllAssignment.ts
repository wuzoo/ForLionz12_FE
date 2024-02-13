import { getAllAssignment } from "../../../api/assignment";
import { IAssignmentResult } from "../../../types/Assignment";
import useAsyncData from "../../common/useAsyncData";

function useAllAssignment() {
  const [state, fetchData] = useAsyncData<IAssignmentResult>(
    getAllAssignment,
    []
  );

  const { isloading, error, data } = state;

  return { isloading, error, data, fetchData };
}
export default useAllAssignment;
