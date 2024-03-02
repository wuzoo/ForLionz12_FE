import styled from "@emotion/styled";
import { ITypo } from "./types";
import { useContext } from "react";
import { ThemeContext } from "../../context/IsDark/IsDark";
import { css } from "@emotion/react";
import { theme } from "../../styles/theme/theme";

const StyledTypo = styled.span<ITypo>`
  font-weight: ${(props) => props.weight || "500"};
  font-size: ${(props) => props.fontSize || "18"}px;

  transition: all 0.2s ease-in-out;
`;

export default function Typo(props: ITypo) {
  const { isDark } = useContext(ThemeContext);
  return (
    <StyledTypo
      {...props}
      css={css`
        color: ${props.color
          ? theme.color[props.color]
          : isDark
          ? theme.mode.dark.main
          : theme.mode.light.main};
      `}
    >
      {props.children}
    </StyledTypo>
  );
}
