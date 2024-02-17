import styled from "@emotion/styled";

export const Left = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  position: absolute;
  left: 5%;
  top: calc(50% - 26px);
  z-index: 9;
  opacity: 0.3;
`;

export const Right = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: calc(50% - 26px);
  right: 5%;
  cursor: pointer;
  z-index: 9;
  opacity: 0.3;
`;
