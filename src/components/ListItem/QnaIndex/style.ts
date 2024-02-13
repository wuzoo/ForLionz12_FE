import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.color.lightgray};
  border-radius: 10px;
  cursor: pointer;
`;

export const Title = styled.p``;

export const Date = styled.p``;

export const Writer = styled.p`
  padding: 3px 0px;
`;
