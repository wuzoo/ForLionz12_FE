import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode, useContext } from "react";
import { theme } from "../../styles/theme/theme";
import { ThemeContext } from "../../context/IsDark/IsDark";
import Typo from "../Typo/Typo";

export const Wrapper = styled.p`
  padding: 8px 15px;
  border-radius: 20px;
`;

interface ITag {
  children: ReactNode;
}

export default function Tag({ children }: ITag) {
  const { isDark } = useContext(ThemeContext);

  return (
    <Wrapper
      css={css`
        background-color: ${isDark
          ? theme.mode.dark.bgColor
          : theme.color.superlightgray};
        border: ${isDark
          ? `1px solid ${theme.color.darkgray}`
          : `1px solid ${theme.color.superlightgray}`};
      `}
    >
      <Typo fontSize="16" weight="400">
        {children}
      </Typo>
    </Wrapper>
  );
}
