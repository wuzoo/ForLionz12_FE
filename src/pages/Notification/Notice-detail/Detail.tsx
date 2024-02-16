import Typo from "../../../components/Typo/Typo.tsx";
import * as Styled from "./style.ts";
import React, { useEffect } from "react";
import { css } from "@emotion/react";
import { PART_COLOR } from "../../../constants/partcolor.ts";
import getFormedDate from "../../../utils/getFormedDate.ts";
import { useNoticeById } from "../../../hooks/index.ts";
import { theme } from "../../../theme/theme.ts";
import AdminModifyBtn from "../../../components/Button/AdminModifyBtn.tsx/index.tsx";

interface INoticeModal {
  clickedId: number;
  setClickedId: React.Dispatch<React.SetStateAction<number>>;
}

function NoticeDetail({ clickedId, setClickedId }: INoticeModal) {
  useEffect(() => {
    document.body.style.maxWidth = `${document.body.clientWidth}px`;
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.maxWidth = "100vw";
      document.body.style.overflowY = "";
    };
  }, [clickedId]);

  const { isloading, data, error } = useNoticeById(clickedId);
  const uid = localStorage.getItem("id");

  if (error === "rejected") {
    throw new Error("axios error");
  }
  if (isloading || !data) {
    return;
  }

  const { content, title, createdAt, part } = data;

  const handleExit = (e: React.MouseEvent<HTMLDivElement>) => {
    const { target, currentTarget } = e;
    if (target == currentTarget) {
      setClickedId(0);
    }
  };

  return (
    <>
      <Styled.Overlay
        onClick={(e) => handleExit(e)}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ></Styled.Overlay>
      <Styled.Modal>
        <Styled.MainWrapper>
          <div
            css={css`
              display: flex;
              align-items: end;
              gap: 20px;
            `}
          >
            <Typo fontSize="44" weight="600">
              {title}
            </Typo>
            <AdminModifyBtn
              type="notification"
              id={clickedId + ""}
              uid={uid + ""}
            />
          </div>
          <Styled.Wrapper>
            <Styled.Badge
              css={css`
                background-color: ${theme.color[
                  PART_COLOR[part.toLowerCase()]
                ]};
              `}
            >
              {part.toUpperCase()}
            </Styled.Badge>
            <Styled.Date>
              <Typo fontSize="14" color="darkgray">
                작성일: {getFormedDate(createdAt)}
              </Typo>
            </Styled.Date>
          </Styled.Wrapper>
        </Styled.MainWrapper>

        <Styled.ContentWrapper>
          <Styled.Content>{content}</Styled.Content>
        </Styled.ContentWrapper>
      </Styled.Modal>
    </>
  );
}

export default NoticeDetail;
