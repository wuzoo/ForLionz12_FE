import { getAllAssignment } from "../../../api/assignment";
import { IAssignmentResult } from "../../../types/Assignment";
import useAsyncData from "../../common/useAsyncData";

function useAllAssignment() {
  const [data, fetchData] = useAsyncData<IAssignmentResult>(
    getAllAssignment,
    []
  );

  const { isloading, error, data: assignments } = data;

  return { isloading, error, assignments, fetchData };
}
export default useAllAssignment;
