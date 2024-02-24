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
  tags: string[];
}

function QnaItem({ onClick, title, date, url, name, tags }: IItem) {
  return (
    <Styled.Container onClick={onClick}>
      <div
        css={css`
          ${theme.flexRow("", "center", 24)}
          width: 70%;
        `}
      >
        <User url={url} size="60" />
        <div
          css={css`
            width: 80%;
            ${theme.flexColumn("", "", 3)}
          `}
        >
          <Styled.Title>
            <Typo weight="600">{title}</Typo>
          </Styled.Title>
          <Styled.Writer>
            <Typo color="darkgray" fontSize="16">
              {name}
            </Typo>
          </Styled.Writer>
        </div>
      </div>
      <Styled.BottomRow>
        <Styled.TagWrapper>
          {tags.map((item) => (
            <Styled.Tag key={item}>
              <Typo fontSize="16" weight="400">
                {item}
              </Typo>
            </Styled.Tag>
          ))}
        </Styled.TagWrapper>
        <Styled.Date>
          <Typo color="darkgray" fontSize="14">
            작성일: {getFormedDate(date)}
          </Typo>
        </Styled.Date>
      </Styled.BottomRow>
    </Styled.Container>
  );
}

export default QnaItem;
