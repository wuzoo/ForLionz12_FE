import { IProfile } from "./types";
import styled from "@emotion/styled";

export const User = styled.div<IProfile>`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center center;
  width: ${(props) => props.size || "50"}px;
  height: ${(props) => props.size || "50"}px;
  border-radius: ${(props) => props.radius || "50%"};
`;
