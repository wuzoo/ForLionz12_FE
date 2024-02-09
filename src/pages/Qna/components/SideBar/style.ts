import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: absolute;
  left: 3%;
  width: 15%;
  max-width: 180px;
`;

export const Item = styled.p`
  padding: 15px;
  margin: 10px;
  text-align: center;

  font-weight: ${(props) => props.theme.weight.semibold};
  border-radius: 10px;
  /* border-bottom: 1px solid ${(props) => props.theme.color.lightgray}; */

  &:hover {
    background-color: ${(props) => props.theme.color.lightgray};
  }
`;
