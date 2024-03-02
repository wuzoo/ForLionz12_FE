import * as Styled from "./style";
import MainAndSubtitle from "../../../../components/MainAndSubtitle";
import { SUB_TEXT } from "../../../../constants/text";
import Button from "../../../../components/Button/Button";
import { fixedProps } from "../../Hw-submit";
import { css } from "@emotion/react";
import { useState } from "react";
import axios from "axios";
import { IForm } from "../../types";
import { error } from "../../../../utils/toast";
import { ERROR } from "../../../../constants/message";
import { theme } from "../../../../styles/theme/theme";

function AssignForm({
  id,
  onSubmit,
  description,
  assignmentLink,
  refetch,
  isDark,
}: IForm) {
  const [explain, setExplain] = useState(description);
  const [link, setLink] = useState(assignmentLink);

  const part = localStorage.getItem("part");

  const handleAssignmentSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const data = {
      assignmentId: +id,
      description: explain,
      assignmentLink: link,
    };

    if (!link) {
      error(ERROR.NO_LINK_ASSIGNMENT);
      return;
    }

    try {
      if (assignmentLink) {
        await axios.put(`${import.meta.env.VITE_SUBMISSION}/${+id}`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        await axios.post(import.meta.env.VITE_SUBMISSION, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    } catch (err) {
      throw new Error(ERROR.CANT_SUBMIT_ASSIGNMENT);
    }
    refetch();

    onSubmit((prev) => !prev);
  };
  return (
    <Styled.AssignForm
      onSubmit={handleAssignmentSubmit}
      css={css`
        display: ${part === "STAFF" && "none"};
      `}
    >
      <Styled.SubmitWrapper>
        <MainAndSubtitle
          main="과제 설명을 작성해주세요."
          sub={SUB_TEXT.HW_EXPLAIN}
          {...fixedProps}
        />
        <Styled.ExplainArea
          css={css`
            background-color: ${isDark
              ? theme.mode.dark.bgColor
              : theme.mode.light.bgColor};
            color: ${isDark ? theme.mode.dark.main : theme.mode.light.main};
          `}
          value={explain}
          onChange={(e) => setExplain(e.target.value)}
        />
        <MainAndSubtitle
          main="과제 링크"
          sub={SUB_TEXT.HW_LINK}
          {...fixedProps}
        />
        <Styled.LinkInput
          css={css`
            background-color: ${isDark
              ? theme.mode.dark.bgColor
              : theme.mode.light.bgColor};
            color: ${isDark ? theme.mode.dark.main : theme.mode.light.main};
          `}
          as="input"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <Button type="submit" fontSize="18" color="darkblue">
          제출하기
        </Button>
      </Styled.SubmitWrapper>
    </Styled.AssignForm>
  );
}

export default AssignForm;
