import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const AlignStyle = css`
  display: flex;
  flex-direction: column;
`;

export const flexColumnContent = css`
  ${AlignStyle};
  width: 90%;
  place-self: center;
`;

export const AssignForm = styled.form`
  ${AlignStyle};
`;

export const SubmitWrapper = styled.div`
  ${flexColumnContent};
  gap: 10px;
  button {
    place-self: end;
    text-align: start;
  }
  textarea {
    margin-bottom: 40px;
  }
`;

export const ExplainArea = styled.textarea`
  min-height: 100px;
  font-size: 16px;
  border: 1.5px solid ${(props) => props.theme.color.lightgray};
  border-radius: 10px;
  padding: 10px;

  &:focus {
    outline: none;
    border: 1.5px solid ${(props) => props.theme.color.darkblue};
  }
`;

export const LinkInput = styled(ExplainArea)`
  min-height: 0;
`;
