import * as Styled from "./style";
import Typo from "../../Typo/Typo";
import { IItem } from "./types";
import { PROFILE_TEXT } from "../../../pages/Profile/constants/text";
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import Button from "../../Button/Button";
import { theme } from "../../../styles/theme/theme";
import { useUserUpdater } from "../../../hooks";
import getImgForCategory from "../../../utils/getImgForCategory";
import {
  useLoginInfoDispatch,
  useLoginInfoState,
} from "../../../context/LoginUser/User";
import { error, success } from "../../../utils/toast";
import { GUIDE_MESSAGE } from "../../../constants/message";

export default function ProfileItem({ type, onSubmit }: IItem) {
  const [edit, setEdit] = useState(false);
  const { updateUserInfo } = useUserUpdater();

  const user = useLoginInfoState();
  const dispatch = useLoginInfoDispatch();
  const [info, setInfo] = useState("");

  useEffect(() => {
    let initialValue = "";
    initialValue = type === "github" ? user.githubAddress : user.instagramId;

    setInfo(initialValue || "");
  }, [user]);

  const handleInfoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (type === "github") {
      const regexp = /^(https:\/\/)/g;

      console.log(info.match(regexp));

      if (!regexp.test(info)) {
        error("주소는 https:// 로 시작해야 합니다.");
        return;
      }
    }

    updateUserInfo(type, info);

    if (type === "github") {
      dispatch({
        type: "LOGIN",
        data: {
          ...user,
          githubAddress: info,
        },
      });
    } else if (type === "instagram") {
      dispatch({
        type: "LOGIN",
        data: {
          ...user,
          instagramId: info,
        },
      });
    }

    success(GUIDE_MESSAGE[type.toUpperCase()]);

    setEdit(false);
    onSubmit();
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
            <Styled.Input
              type={type === "password" ? "password" : undefined}
              disabled
              value={type === "password" ? new Array(5).join() : info.concat()}
            />
            <Styled.Edit onClick={() => setEdit(true)}>
              <Typo color="darkblue">수정</Typo>
            </Styled.Edit>
          </>
        )}
      </Styled.Form>
    </Styled.Container>
  );
}
