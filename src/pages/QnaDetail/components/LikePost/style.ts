import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: absolute;
  left: 14%;
  top: 24vh;
  cursor: pointer;
  border-radius: 30px;
  ${(props) => props.theme.flexColumn("", "center", 10)}
  padding: 18px 10px;

  @media screen and (max-width: 900px) {
    position: static;
  }
`;
