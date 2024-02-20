import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 20px;
  ${(props) => props.theme.flexRow("space-between", "center")}
  border: 1px solid ${(props) => props.theme.color.lightgray};
  border-radius: 10px;
  cursor: pointer;
`;

export const Title = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  width: 100%;
  line-height: 1.2;
`;

export const Date = styled.p``;

export const Writer = styled.p`
  padding: 3px 0px;
`;
