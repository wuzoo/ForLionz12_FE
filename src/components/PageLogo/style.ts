import styled from "@emotion/styled";
import { ILogo } from "./types";

export const Img = styled.img<ILogo>`
  position: ${(props) => props.pos || "absolute"};
  z-index: -1000;
  width: ${(props) => props.width || "400"}px;
  height: ${(props) => props.height || "400"}px;

  left: ${(props) => props.left || 0};
  top: ${(props) => props.top || 0};
  right: ${(props) => props.right || 0};
  bottom: ${(props) => props.bottom || 0};
`;
