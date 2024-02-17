import Banner from "../../components/Banner/Banner";
import PartToggle from "../../components/PartToggle/PartToggle";
import ListItem from "../../components/ListItem/NoticeIndex/ListItem";
import * as Styled from "./style";
import { useState } from "react";
import { useAllNotification } from "../../hooks";
import getFormedDate from "../../utils/getFormedDate";
import NoticeDetail from "./Notice-detail/Detail.tsx";
import AdminUploadBtn from "../../components/Button/AdminUploadBtn.tsx/index.tsx";
import { css } from "@emotion/react";
import { ERROR } from "../../constants/message.ts";

function Notification() {
  const [selectedPart, setSelectedPart] = useState("all");
  const [clickedId, setClickedId] = useState(0);

  const { error, data } = useAllNotification();

  const id = localStorage.getItem("id");

  if (!id) throw new Error(ERROR.NO_ID);
  if (error === "rejected") throw new Error(ERROR.ALL_NOTICE);

  const filteredData = data?.filter(
    (item) => item.part === selectedPart.toUpperCase()
  );

  return (
    <Styled.Wrapper>
      <Banner type="NOTIFICATION" logowidth="400" logoheight="400" />

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
