import styled from "@emotion/styled";
import { IImg } from "./types";

export const Img = styled.img<IImg>`
  position: absolute;
  z-index: -1000;
  width: ${(props) => props.width || "400"}px;
  left: ${(props) => props.left || 0};
  top: ${(props) => props.top || 0};
  right: ${(props) => props.right || 0};
  bottom: ${(props) => props.bottom || 0};
`;
