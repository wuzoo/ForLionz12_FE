import { getQnaDetailById } from "../../../api/qna";
import { IQna } from "../../../types/Qna";
import useAsyncData from "../../common/useAsyncData";

function useQnaDetail(id: number) {
  const [state, fetchData] = useAsyncData<IQna>(
    () => getQnaDetailById(id),
    [id]
  );

  const { isloading, error, data } = state;

  return { isloading, error, data, fetchData };
}
export default useQnaDetail;
