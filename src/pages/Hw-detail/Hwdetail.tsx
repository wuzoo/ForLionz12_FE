import Typo from "../../components/Typo/Typo";
import { useNavigate } from "react-router-dom";
import * as Styled from "./style";
import React, { useEffect } from "react";
import { css } from "@emotion/react";
import { PART_COLOR } from "../../constants/partcolor";
import Button from "../../components/Button/Button";
import useGetAssignmentById from "../../hooks/api/assignment/useGetAssignmentById";
import getFormedDate from "../../utils/getFormedDate";
import Deadline from "./components/Deadline";

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

  const { isloading, data, error } = useGetAssignmentById(clickedId);
  const navigate = useNavigate();

  if (error === "rejected") {
    throw new Error("axios error");
  }
  if (isloading || !data) {
    return;
  }

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
            display: flex;
            justify-content: space-between;
          `}
        >
          <Styled.MainWrapper>
            <Typo fontSize="44" weight="600">
              {title}
            </Typo>
            <Styled.Wrapper>
              <Styled.Badge
                css={css`
                  background-color: ${PART_COLOR[part.toLowerCase()]};
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
            <Styled.Wrapper>
              {tags.map((item) => (
                <Styled.Tag>{item}</Styled.Tag>
              ))}
            </Styled.Wrapper>
          </Styled.MainWrapper>
          <Deadline expireAt={expireAt} />
        </div>
        <Styled.ContentWrapper>
          <Styled.Content>{content}</Styled.Content>
        </Styled.ContentWrapper>
        <div
          css={css`
            place-self: center;
          `}
        >
          <Button
            onClick={() => navigate(`/homework-submit/${id}`)}
            bgcolor="darkblue"
            width="200px"
            height="40px"
          >
            <Typo color="white" weight="600">
              제출하러 가기
            </Typo>
          </Button>
        </div>
      </Styled.Modal>
    </>
  );
}

export default Hwdetail;
