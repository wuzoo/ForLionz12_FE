import Banner from "../../components/Banner/Banner";
import PartToggle from "../../components/PartToggle/PartToggle";
import ListItem from "../../components/ListItem/NoticeIndex/ListItem";
import * as Styled from "./style";
import { useState } from "react";
import useAllNotification from "../../hooks/api/notification/useAllNotification";
import getFormedDate from "../../utils/getFormedDate";
import NoticeDetail from "./Notice-detail/detail.tsx";
import AdminUploadBtn from "../../components/Button/AdminUploadBtn.tsx/index.tsx";
import { css } from "@emotion/react";

function Notification() {
  const [selectedPart, setSelectedPart] = useState("all");
  const [clickedId, setClickedId] = useState(0);

  const { error, data } = useAllNotification();

  const id = localStorage.getItem("id");

  if (!id) throw new Error("has no id");

  if (error === "rejected") {
    throw new Error("모든 공지사항 조회 에러");
  }

  const filteredData = data?.filter(
    (item) => item.part === selectedPart.toUpperCase()
  );

  console.log(data);

  return (
    <Styled.Wrapper>
      <Banner type="notification" logowidth="400" logoheight="400" />

      <div
        css={css`
          width: 95%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <AdminUploadBtn type="notification" id={id} />
        <Styled.Toggle>
          <PartToggle part={selectedPart} setPart={setSelectedPart} />
        </Styled.Toggle>
      </div>
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
