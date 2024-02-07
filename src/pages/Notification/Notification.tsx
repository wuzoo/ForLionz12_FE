import Banner from "../../components/Banner/Banner";
import PartToggle from "../../components/PartToggle/PartToggle";
import ListItem from "../../components/ListItem/NoticeIndex/ListItem";
import * as Styled from "./style";
import { useState } from "react";
import useAllNotification from "../../hooks/api/notification/useAllNotification";
import getFormedDate from "../../utils/getFormedDate";
import NoticeDetail from "./components/Notice-detail";

function Notification() {
  const [selectedPart, setSelectedPart] = useState("all");
  const [clickedId, setClickedId] = useState(0);

  const { error, data } = useAllNotification();

  if (error === "rejected") {
    throw new Error("모든 공지사항 조회 에러");
  }

  const filteredData = data?.filter(
    (item) => item.part === selectedPart.toUpperCase()
  );

  console.log(data);

  return (
    <Styled.Wrapper>
      <Banner type="notification" logowidth="500" logoheight="500" />
      <Styled.Toggle>
        <PartToggle part={selectedPart} setPart={setSelectedPart} />
      </Styled.Toggle>
      <Styled.Items>
        {filteredData?.map((item) => (
          <ListItem
            key={item.id}
            onClick={() => setClickedId(item.id)}
            part={item.part.toLowerCase()}
            title={item.title}
            date={getFormedDate(item.createdAt)}
          />
        ))}
      </Styled.Items>
      {clickedId !== 0 && (
        <NoticeDetail clickedId={clickedId} setClickedId={setClickedId} />
      )}
    </Styled.Wrapper>
  );
}

export default Notification;
