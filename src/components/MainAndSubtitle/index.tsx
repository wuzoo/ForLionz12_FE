import { css } from "@emotion/react";
import Typo from "../Typo/Typo";
import { ITitle } from "./types";
import * as Styled from "./style";

function MainAndSubtitle({ main, sub, fontsizes, colors, gap }: ITitle) {
  const [mainsize, subsize] = fontsizes;
  return (
    <div>
      <Styled.Title
        css={css`
          @media screen and (max-width: 768px) {
            span {
              font-size: ${(+mainsize * 2) / 3}px;
            }
          }
        `}
      >
        <Typo weight="700" color={colors[0]} fontSize={mainsize}>
          {main}
        </Typo>
      </Styled.Title>
      <div
        css={css`
          height: ${gap}px;
          @media screen and (max-width: 768px) {
            height: 0;
          }
        `}
      ></div>
      <Styled.Content
        css={css`
          @media screen and (max-width: 768px) {
            span {
              font-size: ${(+subsize * 2) / 3}px;
            }
          }
        `}
      >
        <Typo color={colors[1]} fontSize={subsize} weight="500">
          {sub}
        </Typo>
      </Styled.Content>
    </div>
  );
}

export default MainAndSubtitle;
