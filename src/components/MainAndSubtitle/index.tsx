import { css } from "@emotion/react";
import Typo from "../Typo/Typo";
import { ITitle } from "./types";
import * as Styled from "./style";

function MainAndSubtitle({ main, sub, fontsizes, colors, gap }: ITitle) {
  const [mainsize, subsize] = fontsizes;
  return (
    <div>
      <Styled.Title>
        <Typo weight="700" color={colors[0]} fontSize={mainsize}>
          {main}
        </Typo>
      </Styled.Title>
      <div
        css={css`
          height: ${gap}px;
        `}
      ></div>
      <Styled.Content>
        <Typo color={colors[1]} fontSize={subsize} weight="500">
          {sub}
        </Typo>
      </Styled.Content>
    </div>
  );
}

export default MainAndSubtitle;
