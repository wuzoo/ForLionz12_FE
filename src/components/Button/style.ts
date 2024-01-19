import styled from "@emotion/styled";
import { IBtnStyle } from "./types";

export const Btn = styled.button<IBtnStyle>`
  width: ${(props) => props.width};
  border: none;
  background-color: ${(props) =>
    props.color ? props.theme.color[props.color] : props.theme.color.darkblue};
  height: ${(props) => props.height || "30"}px;
  border-radius: ${(props) => props.radius || "10"}px;
`;
