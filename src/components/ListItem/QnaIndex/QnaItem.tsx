import User from "../../Profile/Profile";
import * as Styled from "./style";
import Typo from "../../Typo/Typo";
import { css } from "@emotion/react";
import getFormedDate from "../../../utils/getFormedDate";

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
          display: flex;
          align-items: center;
          gap: 30px;
        `}
      >
        <User url={url} size="45" />
        <div css={css``}>
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
