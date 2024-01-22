import styled from "@emotion/styled";
import { ITypo } from "./types";

const StyledTypo = styled.span<ITypo>`
  color: ${(props) => (props.color ? props.theme.color[props.color] : "black")};
  font-weight: ${(props) => props.weight || "500"};
  font-size: ${(props) => props.fontSize || "18"}px;
`;

export default function Typo(props: ITypo) {
  return <StyledTypo {...props}>{props.children}</StyledTypo>;
}
