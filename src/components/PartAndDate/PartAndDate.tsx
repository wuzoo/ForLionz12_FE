import { css } from "@emotion/react";
import { IPart, IDate } from "./types";
import * as Styled from "./style";
import { PART_COLOR } from "../../constants/constant";
import { theme } from "../../theme/theme";

export function PartAdaptor({ part, showbadge, fontSize }: IPart) {
  return (
    <div
      css={css`
        display: ${showbadge ? "flex" : "inline-block"};
        justify-content: center;
        align-items: center;
        width: ${showbadge && "60px"};
        height: ${showbadge && "30px"};
        border-radius: 15px;
        background-color: ${showbadge && PART_COLOR[part.toLowerCase()]};
      `}
    >
      <span
        css={css`
          font-size: ${fontSize || "20px"};
          font-weight: 600;
          color: ${showbadge ? "white" : theme.color.darkgray};
        `}
      >
        {part}
      </span>
    </div>
  );
}

export function DateAdaptor({ date, showtext, showdelim, fontSize }: IDate) {
  return (
    <>
      <Styled.Delim
        css={css`
          font-size: ${fontSize || "20px"};
          display: ${!showdelim && "none"};
        `}
      >
        &nbsp;⎸&nbsp;
      </Styled.Delim>
      <Styled.Text
        css={css`
          font-size: ${fontSize || "18px"};
          display: ${!showtext && "none"};
        `}
      >
        작성일:&nbsp;
      </Styled.Text>
      <Styled.Date
        css={css`
          font-size: ${fontSize || "18px"};
        `}
      >
        {date}
      </Styled.Date>
    </>
  );
}
