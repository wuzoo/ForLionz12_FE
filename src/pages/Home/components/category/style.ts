import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Item = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.lightgray};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 85%;
`;

export const Text = styled.p``;
