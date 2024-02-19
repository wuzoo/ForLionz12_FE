import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 50%;
  gap: 30px;
  margin-top: 60px;
  place-self: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
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
