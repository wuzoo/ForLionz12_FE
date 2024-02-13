import * as Styled from "./style";
import MainAndSubtitle from "../../../../components/MainAndSubtitle";
import { fixedProps } from "../../Hw-submit";
import Button from "../../../../components/Button/Button";
import { css } from "@emotion/react";
import getFormedDate from "../../../../utils/getFormedDate";
import git from "../../../../assets/icons/github/img.svg";
import { Link } from "react-router-dom";
import Typo from "../../../../components/Typo/Typo";
import { IStatus } from "../../types";

function AssignStatus({
  isSubmitted,
  onModify,
  createdAt,
  description,
  link,
}: IStatus) {
  return (
    <Styled.Container
      css={css`
        display: ${!isSubmitted ? "none" : ""};
      `}
    >
      <Styled.StatusWrapper>
        <MainAndSubtitle
          main="나의 제출 상태"
          sub={`${getFormedDate(createdAt)}에 제출 완료된 과제입니다.`}
          {...fixedProps}
        />
        <Styled.MyTextArea disabled value={description} />
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <Styled.LinkWrapper>
            <img src={git} />
            <Link to={link}>
              <Typo color="darkblue">{link}</Typo>
            </Link>
          </Styled.LinkWrapper>
          <Button
            onClick={() => onModify((prev) => !prev)}
            bgcolor="white"
            color="darkblue"
            fontSize="18"
          >
            수정하기
          </Button>
        </div>
      </Styled.StatusWrapper>
    </Styled.Container>
  );
}

export default AssignStatus;
