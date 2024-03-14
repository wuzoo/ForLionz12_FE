import { useAllMember } from ".";
import { ERROR } from "../../../constants/message";

export default function useFilteredMember(part: string) {
  const { error, data } = useAllMember();

  if (error === "rejected") {
    throw new Error(ERROR.ALL_MEMBER);
  }
  if (!data) return;

  const filterData = () => {
    if (part === "all") {
      return data?.filter((item) => item.part !== "STAFF");
    }
    return data?.filter((item) => item.part === part.toUpperCase());
  };

  return filterData();
}
