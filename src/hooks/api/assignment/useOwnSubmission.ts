import { getMySubmission } from "../../../api/assignment";
import { ISubmitted } from "../../../types";
import useAsyncData from "../../common/useAsyncData";

export function useOwnSubmission(id: number) {
  const [state, reFetch] = useAsyncData<ISubmitted>(
    () => getMySubmission(id),
    [id]
  );

  console.log(state);

  const { isloading, error, data } = state;

  if (data === null) {
    return {
      isloading,
      error,
      data: {
        assignmentId: 0,
        assignmentLink: "",
        createdAt: new Date().toISOString(),
        description: "",
        id: 0,
        memberId: 0,
        memberName: "",
      },
      reFetch,
    };
  }
  return { isloading, error, data, reFetch };
}
