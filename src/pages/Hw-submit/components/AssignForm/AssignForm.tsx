import * as Styled from "./style";
import MainAndSubtitle from "../../../../components/MainAndSubtitle";
import { SUB_TEXT } from "../../../../constants/text";
import Button from "../../../../components/Button/Button";
import { fixedProps } from "../../Hw-submit";
import { css } from "@emotion/react";
import { useState } from "react";
import axios from "axios";
import { IForm } from "../../types";

function AssignForm({
  isSubmitted,
  id,
  onSubmit,
  description,
  assignmentLink,
}: IForm) {
  const [explain, setExplain] = useState(description);
  const [link, setLink] = useState(assignmentLink);

  return (
    <Styled.AssignForm
      onSubmit={() => {}}
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
        <Styled.ExplainArea
          value={explain}
          onChange={(e) => setExplain(e.target.value)}
        />
        <MainAndSubtitle
          main="과제 링크"
          sub={SUB_TEXT.hwlink}
          {...fixedProps}
        />
        <Styled.LinkInput
          as="input"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <Button type="submit" bgcolor="white" fontSize="18" color="darkblue">
          제출하기
        </Button>
      </Styled.SubmitWrapper>
    </Styled.AssignForm>
  );
}

export default AssignForm;
