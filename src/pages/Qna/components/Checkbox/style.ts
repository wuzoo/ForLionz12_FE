import styled from "@emotion/styled";

export const Box = styled.p`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.color.lightgray};
  cursor: pointer;
`;
