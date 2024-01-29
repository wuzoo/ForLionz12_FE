import { css } from "@emotion/react";
import * as Styled from "./style";
import { PART_COLOR } from "../../../constants/partcolor";
import Typo from "../../Typo/Typo";
import { IItem } from "./types";

function ListItem({ part, content, date }: IItem) {
  return (
    <Styled.Wrapper>
      <Styled.Badge
        css={css`
          background-color: ${PART_COLOR[part]};
        `}
      >
        <Typo color="white">{part.toUpperCase()}</Typo>
      </Styled.Badge>
      <Styled.Notice>
        <Typo weight="600" fontSize="16">
          {content}
        </Typo>
      </Styled.Notice>
      <Styled.Date>
        <Typo weight="400" fontSize="12" color="darkgray">
          작성일: {date}
        </Typo>
      </Styled.Date>
    </Styled.Wrapper>
  );
}

export default ListItem;
