import * as Styled from "./style";
import Typo from "../../Typo/Typo";
import { IItem } from "./types";
import { PROFILE_TEXT } from "../../../pages/Profile/constants/text";
import { css } from "@emotion/react";
import React, { useState } from "react";
import Button from "../../Button/Button";
import { theme } from "../../../theme/theme";
import useUserUpdater from "../../../hooks/api/member/useUserUpdater";
import getImgForCategory from "../../../utils/getImgForCategory";
import { useLoginInfoState } from "../../../context/LoginUser/User";

export default function GithubIndex({ type, setSubmited }: IItem) {
  const [edit, setEdit] = useState(false);
  const { updateUserInfo } = useUserUpdater();

  const user = useLoginInfoState();

  const [info, setInfo] = useState(user.githubAddress);

  const handleInfoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateUserInfo(type, info);

    setEdit(false);
    setSubmited(true);
  };
  return (
    <Styled.Container>
      <Styled.LeftColumn>
        <Styled.Icon
          css={css`
            background-image: url(${getImgForCategory(type)});
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
      <Styled.Form onSubmit={handleInfoSubmit}>
        {edit ? (
          <>
            <Styled.Input
              css={css`
                background-color: ${theme.color.superlightgray};
              `}
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            />
            <Button width="50px" type="submit" bgcolor="darkblue">
              <Typo color="white">변경</Typo>
            </Button>
          </>
        ) : (
          <>
            <Styled.Input disabled value={info || user.githubAddress} />
            <Styled.Edit onClick={() => setEdit(true)}>
              <Typo color="darkblue">수정</Typo>
            </Styled.Edit>
          </>
        )}
      </Styled.Form>
    </Styled.Container>
  );
}
