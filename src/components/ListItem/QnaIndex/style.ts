import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 20px;
  ${(props) => props.theme.flexRow("space-between", "center")}
  border: 1px solid ${(props) => props.theme.color.lightgray};
  border-radius: 10px;
  cursor: pointer;
`;

export const Title = styled.p``;

export const Date = styled.p``;

export const Writer = styled.p`
  padding: 3px 0px;
`;
