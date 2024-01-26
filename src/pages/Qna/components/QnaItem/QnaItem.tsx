import { User } from "../../../../components/Profile/style";
import * as Styled from "./style";
import tmp from "../../../../assets/imgs/tmpprofile.jpeg";
import Typo from "../../../../components/Typo/Typo";
import { css } from "@emotion/react";

interface IItem {
  title: string;
  date: string;
}

function QnaItem({ title, date }: IItem) {
  return (
    <Styled.Container>
      <div
        css={css`
          display: flex;
          align-items: center;
          gap: 20px;
        `}
      >
        <User url={tmp} size="30" />
        <Styled.Title>
          <Typo>{title}</Typo>
        </Styled.Title>
      </div>
      <Styled.Date>
        <Typo color="darkgray" fontSize="16">
          작성일: {date}
        </Typo>
      </Styled.Date>
    </Styled.Container>
  );
}

export default QnaItem;
