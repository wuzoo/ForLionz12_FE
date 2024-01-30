import * as Styled from "./style";
import MainAndSubtitle from "../../../../components/MainAndSubtitle";
import { fixedProps } from "../../Hw-submit";
import Button from "../../../../components/Button/Button";
import { css } from "@emotion/react";

interface IStatus {
  isSubmitted: boolean;
  date: string;
}

function AssignStatus({ isSubmitted, date }: IStatus) {
  return (
    <Styled.Container
      css={css`
        display: ${!isSubmitted ? "none" : ""};
      `}
    >
      <Styled.StatusWrapper>
        <MainAndSubtitle
          main="나의 제출 상태"
          sub={`${date}에 제출 완료된 과제입니다.`}
          {...fixedProps}
        />
        <Styled.MyTextArea disabled value="ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ" />
        <Button bgcolor="white" color="darkblue" fontSize="18">
          수정하기
        </Button>
      </Styled.StatusWrapper>
    </Styled.Container>
  );
}

export default AssignStatus;
