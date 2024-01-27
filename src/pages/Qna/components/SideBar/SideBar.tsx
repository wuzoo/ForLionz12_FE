import { css } from "@emotion/react";
import * as Styled from "./style";
import { CATEGORY_TEXT } from "../constants/text";
import { theme } from "../../../../theme/theme";

interface ISideBar {
  setCategory: (e: string) => void;
  currentCategory: string;
}

function SideBar({ setCategory, currentCategory }: ISideBar) {
  return (
    <Styled.Wrapper>
      {Object.entries(CATEGORY_TEXT).map((entry) => (
        <Styled.Item
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
