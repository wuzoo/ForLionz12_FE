import Typo from "../../../components/Typo/Typo";
import { Link, useNavigate } from "react-router-dom";
import * as Styled from "./style";
import React, { useEffect } from "react";
import { css } from "@emotion/react";
import { PART_COLOR } from "../../../constants/partcolor";
import Button from "../../../components/Button/Button";
import { useGetAssignmentById } from "../../../hooks";
import getFormedDate from "../../../utils/getFormedDate";
import Deadline from "./components/Deadline";
import { theme } from "../../../styles/theme/theme.ts";
import AdminModifyBtn from "../../../components/Button/AdminModifyBtn.tsx";
import { ERROR } from "../../../constants/message.ts";

interface IHwDetail {
  clickedId: number;
  setClickedId: React.Dispatch<React.SetStateAction<number>>;
}

function Hwdetail({ clickedId, setClickedId }: IHwDetail) {
  useEffect(() => {
    document.body.style.maxWidth = `${document.body.clientWidth}px`;
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.maxWidth = "100vw";
      document.body.style.overflowY = "";
    };
  }, [clickedId]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const handleKeyPress = (e: KeyboardEvent) => {
    const { key } = e;

    if (key === "Escape") {
      setClickedId(0);
    }
  };

  const { data, error } = useGetAssignmentById(clickedId);
  const uid = localStorage.getItem("id");
  const navigate = useNavigate();

  if (error === "rejected") throw new Error(ERROR.ID_ASSIGNMENT);
  if (!data) return;

  const { content, title, createdAt, expireAt, tags, part, id } = data;

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
      <Styled.Modal
        transition={{
          duration: 0.3,
        }}
        layoutId={clickedId + ""}
      >
        <div
          css={css`
            ${theme.flexRow("space-between", "", 16)}
          `}
        >
          <Styled.MainWrapper>
            <Styled.TitleAndModifyBtnWrapper>
              <Styled.Title>
                <Typo fontSize="44" weight="600">
                  {title}
                </Typo>
              </Styled.Title>
              <AdminModifyBtn
                type="assignment"
                uid={uid + ""}
                id={clickedId + ""}
              />
            </Styled.TitleAndModifyBtnWrapper>
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
            <Styled.TagWrapper>
              {tags.map((item) => (
                <Styled.Tag key={item}>{item}</Styled.Tag>
              ))}
            </Styled.TagWrapper>
          </Styled.MainWrapper>

          <Deadline expireAt={expireAt} />
        </div>
        <Styled.ContentWrapper>
          <Styled.Content>{content}</Styled.Content>
        </Styled.ContentWrapper>
        <div
          css={css`
            place-self: center;
            position: relative;
            top: 40px;
          `}
        >
          <Button
            onClick={() => navigate(`/homework-submit/${id}`)}
            bgcolor="darkblue"
            color="white"
            padding="5px 15px"
          >
            제출하러 가기
          </Button>
        </div>
      </Styled.Modal>
    </>
  );
}

export default Hwdetail;
