import { ReactNode } from "react";
import { theme } from "../../../styles/theme/theme";
import * as Styled from "./style";
import { css } from "@emotion/react";

type NameType = {
  isDark: boolean;
  children: ReactNode;
  clicked: boolean;
};

export default function ContactName({ isDark, children, clicked }: NameType) {
  return (
    <Styled.Name
      css={css`
        color: ${isDark ? theme.mode.dark.main : theme.mode.light.main};
        font-size: ${clicked ? "24px" : "18px"};
        font-weight: ${theme.weight.semibold};
      `}
    >
      {children}
    </Styled.Name>
  );
}
