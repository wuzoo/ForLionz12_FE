import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.color.lightgray};
  border-radius: 10px;
  height: 160px;
  max-width: 400px;
  margin: 0px 8px;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;

export const Img = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 40%;
  height: 95%;
  border-radius: 15px;
`;

export const Name = styled.p``;

export const Text = styled.p``;
