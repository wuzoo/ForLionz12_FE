import styled from "@emotion/styled";
import { ILogo } from "./types";

export const Img = styled.img<ILogo>`
  position: ${(props) => props.pos || "absolute"};
  z-index: ${(props) => props.zindex || "-1000"};
  width: ${(props) => props.width || "300"}px;
  height: ${(props) => props.height || "300"}px;

  left: ${(props) => props.left || 0};
  top: ${(props) => props.top || 0};
  right: ${(props) => props.right || 0};
  bottom: ${(props) => props.bottom || 0};

  padding-bottom: ${(props) => props.padbottom || "0"}px;
  padding-left: ${(props) => props.padleft || "0"}px;
  padding-top: ${(props) => props.padtop || "0"}px;
  padding-right: ${(props) => props.padright || "0"}px;
`;
