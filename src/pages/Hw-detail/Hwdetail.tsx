import Typo from "../../components/Typo/Typo";
import { useNavigate } from "react-router-dom";
import * as Styled from "./style";
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { PART_COLOR } from "../../constants/partcolor";
import Button from "../../components/Button/Button";

interface IHwDetail {
  clickedId: number | undefined;
  setClickedId: React.Dispatch<React.SetStateAction<number>>;
}

function Hwdetail({ clickedId, setClickedId }: IHwDetail) {
  const navigate = useNavigate();

  const handleExit = (e: React.MouseEvent<HTMLDivElement>) => {
    const { target, currentTarget } = e;
    if (target == currentTarget) {
      setClickedId(0);
    }
  };

  const [data, setData] = useState({
    title: "백엔드 추가과제 안내",
    deadline: "2024-03-03 18:00:00",
    date: "2024-02-26 16:10:24",
    tags: ["해커톤", "공지", "아기사자들의 반란"],
    part: "be",
    content:
      "👑 종강총회 안내 👑안녕하세요, 여러분!약 6개월간의 인하대학교 멋쟁이사자처럼 11기 활동을 정리하는 종강총회를 진행하였습니다.\n\n한 학기동안 진행한 활동은 다음과 같습니다.- OT- 인하대학교 아이디어톤- 공통 세션- 파트별 심화 세션- 중앙 아이디어톤이후 방학동안 진행될 행사는 다음과 같습니다.\n\n- 인하대학교 MT- 중앙 해커톤- 인하대학교 해커톤자세한 안내사항은 하단 노션 pdf를 참고해주시기 바랍니다.https://www.notion.so/6e051081401c48b3b0ea0881a47f17d6?pvs=4🌊 인하대학교 해커톤 - 썸머톤 🌊해커톤과 관련된 안내사항은 하단 링크를 참고해주시기 바랍니다.https://github.com/Likelion-Inha-11/summerthon-readme위 내용과 관련된 문의사항은 운영진 분들에게 연락 바랍니다.👑 종강총회 안내 👑안녕하세요, 여러분!약 6개월간의 인하대학교 멋쟁이사자처럼 11기 활동을 정리하는 종강총회를 진행하였습니다.\n\n한 학기동안 진행한 활동은 다음과 같습니다.- OT- 인하대학교 아이디어톤- 공통 세션- 파트별 심화 세션- 중앙 아이디어톤이후 방학동안 진행될 행사는 다음과 같습니다.\n\n- 인하대학교 MT- 중앙 해커톤- 인하대학교 해커톤자세한 안내사항은 하단 노션 pdf를 참고해주시기 바랍니다.https://www.notion.so/6e051081401c48b3b0ea0881a47f17d6?pvs=4🌊 인하대학교 해커톤 - 썸머톤 🌊해커톤과 관련된 안내사항은 하단 링크를 참고해주시기 바랍니다.https://github.com/Likelion-Inha-11/summerthon-readme위 내용과 관련된 문의사항은 운영진 분들에게 연락 바랍니다.👑 종강총회 안내 👑안녕하세요, 여러분!약 6개월간의 인하대학교 멋쟁이사자처럼 11기 활동을 정리하는 종강총회를 진행하였습니다.\n\n한 학기동안 진행한 활동은 다음과 같습니다.- OT- 인하대학교 아이디어톤- 공통 세션- 파트별 심화 세션- 중앙 아이디어톤이후 방학동안 진행될 행사는 다음과 같습니다.\n\n- 인하대학교 MT- 중앙 해커톤- 인하대학교 해커톤자세한 안내사항은 하단 노션 pdf를 참고해주시기 바랍니다.https://www.notion.so/6e051081401c48b3b0ea0881a47f17d6?pvs=4🌊 인하대학교 해커톤 - 썸머톤 🌊해커톤과 관련된 안내사항은 하단 링크를 참고해주시기 바랍니다.https://github.com/Likelion-Inha-11/summerthon-readme위 내용과 관련된 문의사항은 운영진 분들에게 연락 바랍니다.",
  });
  const { title, deadline, date, part, tags, content } = data;

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
        <Styled.MainWrapper>
          <Typo fontSize="44" weight="600">
            {title}
          </Typo>
          <Styled.Wrapper>
            <Styled.Badge
              css={css`
                background-color: ${PART_COLOR[part]};
              `}
            >
              {part.toUpperCase()}
            </Styled.Badge>
            <Styled.Date>
              <Typo fontSize="14" color="darkgray">
                작성일: {date}
              </Typo>
            </Styled.Date>
          </Styled.Wrapper>
          <Styled.Wrapper>
            {tags.map((item) => (
              <Styled.Tag>{item}</Styled.Tag>
            ))}
          </Styled.Wrapper>
        </Styled.MainWrapper>
        <Styled.ContentWrapper>
          <Styled.Content>{content}</Styled.Content>
        </Styled.ContentWrapper>
        <div
          css={css`
            place-self: center;
          `}
        >
          <Button
            onClick={() => navigate("/homework-submit")}
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
