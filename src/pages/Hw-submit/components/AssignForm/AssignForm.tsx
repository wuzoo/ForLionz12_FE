import * as Styled from "./style";
import MainAndSubtitle from "../../../../components/MainAndSubtitle";
import { SUB_TEXT } from "../../../../constants/text";
import Button from "../../../../components/Button/Button";
import { fixedProps } from "../../Hw-submit";
import { css } from "@emotion/react";

interface IForm {
  isSubmitted: boolean;
}

function AssignForm({ isSubmitted }: IForm) {
  return (
    <Styled.AssignForm
      css={css`
        display: ${isSubmitted ? "none" : ""};
      `}
    >
      <Styled.SubmitWrapper>
        <MainAndSubtitle
          main="과제 설명을 작성해주세요."
          sub={SUB_TEXT.hwexplain}
          {...fixedProps}
        />
        <Styled.ExplainArea />
        <MainAndSubtitle
          main="과제 링크"
          sub={SUB_TEXT.hwlink}
          {...fixedProps}
        />
        <Styled.LinkInput as="input" />
        <Button bgcolor="white" fontSize="18" color="darkblue">
          제출하기
        </Button>
      </Styled.SubmitWrapper>
    </Styled.AssignForm>
  );
}

export default AssignForm;
