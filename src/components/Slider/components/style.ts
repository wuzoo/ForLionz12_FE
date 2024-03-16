import styled from "@emotion/styled";

export const Arrow = styled.div`
  width: 60px;
  height: 60px;
  cursor: pointer;
  position: absolute;
  top: calc(50% - 26px);
  z-index: 9;
  opacity: 0.6;
`;

export const Left = styled(Arrow)`
  left: 1.5rem;
`;

export const Right = styled(Arrow)`
  right: 1.5rem;
`;
