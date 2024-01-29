import * as Styled from "./style";
import Typo from "../../../../components/Typo/Typo";
import pwd from "../../../../assets/icons/password/pwd.png";
import github from "../../../../assets/icons/github/img.svg";
import insta from "../../../../assets/icons/insta/insta.svg";
import { IItem } from "./types";
import { PROFILE_TEXT } from "../../constants/text";
import { css } from "@emotion/react";

function ListItem({ type }: IItem) {
  const getImgofType = (type: string) => {
    switch (type) {
      case "password": {
        return pwd;
      }
      case "github": {
        return github;
      }
      case "insta": {
        return insta;
      }
    }
  };

  return (
    <Styled.Container>
      <Styled.LeftColumn>
        <Styled.Icon
          css={css`
            background-image: url(${getImgofType(type)});
          `}
        />
        <Styled.TextWrapper>
          <Typo weight="600" fontSize="24">
            {PROFILE_TEXT[type].main}
          </Typo>
          <Typo weight="600" fontSize="12" color="darkpink">
            {PROFILE_TEXT[type].sub}
          </Typo>
        </Styled.TextWrapper>
      </Styled.LeftColumn>
      <Styled.Input />
      <Styled.Edit>
        <Typo color="darkblue">수정</Typo>
      </Styled.Edit>
    </Styled.Container>
  );
}

export default ListItem;
