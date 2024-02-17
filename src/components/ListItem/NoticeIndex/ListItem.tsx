import { css } from "@emotion/react";
import * as Styled from "./style";
import { PART_COLOR } from "../../../constants/partcolor";
import Typo from "../../Typo/Typo";
import { IItem } from "./types";
import { variants } from "./variants";
import { theme } from "../../../styles/theme/theme";

function ListItem({ part, title, date, onClick }: IItem) {
  return (
    <Styled.Wrapper onClick={onClick} variants={variants} whileHover="hover">
      <Styled.Badge
        css={css`
          background-color: ${theme.color[PART_COLOR[part]]};
        `}
      >
        <Typo color="white">{part.toUpperCase()}</Typo>
      </Styled.Badge>
      <Styled.Notice>
        <Typo weight="600" fontSize="16">
          {title}
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
