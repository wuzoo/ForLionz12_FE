import styled from "@emotion/styled";

export const Container = styled.div`
  ${(props) => props.theme.flexRow("center", "center", 40)}
`;

export const ItemWrapper = styled.div`
  ${(props) => props.theme.flexColumn("", "center", 10)}
`;

export const Item = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.lightgray};
  ${(props) => props.theme.flexRow("center", "center")}
  cursor: pointer;
`;

export const Img = styled.img`
  width: 85%;
`;

export const Text = styled.p``;
