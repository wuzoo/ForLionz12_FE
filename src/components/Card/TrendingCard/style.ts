import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  padding: 10px;
  width: 200px;
  overflow-wrap: break-word;
`;

export const IconAndCount = styled.p`
  ${(props) => props.theme.flexRow("", "center", 8)}
`;
