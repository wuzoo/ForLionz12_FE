import { css } from "@emotion/react";
import * as Styled from "./style";
import { CATEGORY_TEXT } from "../constants/text";
import { theme } from "../../../../theme/theme";
import useResponsivebar from "../hooks/useResponsivebar";

interface ISideBar {
  setCategory: (e: string) => void;
  currentCategory: string;
}

function SideBar({ setCategory, currentCategory }: ISideBar) {
  const ref = useResponsivebar();

  return (
    <Styled.Wrapper ref={ref}>
      {Object.entries(CATEGORY_TEXT).map((entry) => (
        <Styled.Item
          key={entry[0]}
          css={css`
            background-color: ${currentCategory == entry[0] &&
            theme.color.pink};
          `}
          onClick={() => setCategory(entry[0])}
        >
          {entry[1]}
        </Styled.Item>
      ))}
    </Styled.Wrapper>
  );
}

export default SideBar;
