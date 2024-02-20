import User from "../../Profile/Profile";
import * as Styled from "./style";
import Typo from "../../Typo/Typo";
import { css } from "@emotion/react";
import getFormedDate from "../../../utils/getFormedDate";
import { theme } from "../../../styles/theme/theme";

interface IItem {
  title: string;
  date: string;
  url: string;
  name: string;
  onClick: () => void;
}

function QnaItem({ onClick, title, date, url, name }: IItem) {
  return (
    <Styled.Container onClick={onClick}>
      <div
        css={css`
          ${theme.flexRow("", "center", 30)}
          width: 70%;
        `}
      >
        <User url={url} size="45" />
        <div
          css={css`
            width: 80%;
          `}
        >
          <Styled.Title>
            <Typo>{title}</Typo>
          </Styled.Title>
          <Styled.Writer>
            <Typo color="darkgray" fontSize="14">
              {name}
            </Typo>
          </Styled.Writer>
        </div>
      </div>
      <Styled.Date>
        <Typo color="darkgray" fontSize="14">
          작성일: {getFormedDate(date)}
        </Typo>
      </Styled.Date>
    </Styled.Container>
  );
}

export default QnaItem;
