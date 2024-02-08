import styled from "@emotion/styled";
import { ILogo } from "./types";

export const Img = styled.img<ILogo>`
  position: ${(props) => props.pos || "absolute"};
  z-index: ${(props) => props.zindex || "-1000"};
  width: ${(props) => props.width || "300"}px;
  height: ${(props) => props.height || "300"}px;
  object-fit: contain;

  left: ${(props) => props.left || null};
  top: ${(props) => props.top || null};
  right: ${(props) => props.right || null};
  bottom: ${(props) => props.bottom || null};

  padding-bottom: ${(props) => props.padbottom || "0"}px;
  padding-left: ${(props) => props.padleft || "0"}px;
  padding-top: ${(props) => props.padtop || "0"}px;
  padding-right: ${(props) => props.padright || "0"}px;
`;
