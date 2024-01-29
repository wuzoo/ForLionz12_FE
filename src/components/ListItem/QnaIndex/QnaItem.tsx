import { User } from "../../Profile/style";
import * as Styled from "./style";
import tmp from "../../../assets/imgs/tmpprofile.jpeg";
import Typo from "../../Typo/Typo";
import { css } from "@emotion/react";

interface IItem {
  title: string;
  date: string;
  name: string;
}

function QnaItem({ title, date, name }: IItem) {
  return (
    <Styled.Container>
      <div
        css={css`
          display: flex;
          align-items: center;
          gap: 30px;
        `}
      >
        <User url={tmp} size="45" />
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
          작성일: {date}
        </Typo>
      </Styled.Date>
    </Styled.Container>
  );
}

export default QnaItem;
