import MainAndSubtitle from "../../components/MainAndSubtitle";
import { TEXT } from "../../constants/text";
import * as Styled from "./style";
import User from "../../components/Profile/Profile";
import tmp from "../../assets/imgs/tmpprofile.jpeg";
import Typo from "../../components/Typo/Typo";
import { css } from "@emotion/react";
import { theme } from "../../theme/theme";
import ListItem from "../../components/ListItem/ProfileIndex/index";
import { useEffect, useState } from "react";
import {
  useLoginInfoDispatch,
  useLoginInfoState,
} from "../../context/LoginUser/User";
import axios from "axios";
import useUserUpdater from "../../hooks/api/member/useUserUpdater";

function Profile() {
  const user = useLoginInfoState();
  const dispatch = useLoginInfoDispatch();
  const { updateUserInfo } = useUserUpdater();

  const [intro, setIntro] = useState(user.introduction);
  const [pwd, setPwd] = useState("1234");
  const [gitbub, setGithub] = useState(user.githubAddress);
  const [insta, setInsta] = useState(user.instagramId);
  const [edit, setEdit] = useState(false);

  const [isSubmited, setIsSubmited] = useState(false);

  const updateCommet = async () => {
    updateUserInfo("comment", intro);
  };

  const handleIntroSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateCommet();

    setIsSubmited(true);
    setEdit(false);
  };

  return (
    <Styled.Wrapper>
      <MainAndSubtitle
        main="Your Profile"
        sub={TEXT.profile}
        fontsizes={["40", "18"]}
        colors={["black", "darkgray"]}
        gap="5"
      />
      <Styled.InformBox>
        <Styled.ProfilePartWrapper>
          <User size="220" url={tmp} />
          <Styled.UploadBtn
            css={css`
              margin-top: 14px;
            `}
            htmlFor="upload"
          >
            <Typo color="white" fontSize="18">
              이미지 업로드
            </Typo>
          </Styled.UploadBtn>
          <Styled.FileInput type="file" id="upload" />
          <Styled.UploadBtn
            css={css`
              background-color: ${theme.color.superlightgray};
            `}
          >
            <Typo weight="600" fontSize="18">
              이미지 제거
            </Typo>
          </Styled.UploadBtn>
        </Styled.ProfilePartWrapper>
        <Styled.IntroWrapper>
          <Styled.AlignWrapper>
            <Styled.Name>
              <Typo fontSize="40" weight="600">
                {user.name}
              </Typo>
            </Styled.Name>
            {!edit ? (
              <>
                <Styled.Introduce>
                  <Typo color="darkgray">{user.introduction}</Typo>
                </Styled.Introduce>
                <Styled.EditText onClick={() => setEdit(true)}>
                  <Typo color="darkblue">수정</Typo>
                </Styled.EditText>
              </>
            ) : (
              <Styled.Form onSubmit={handleIntroSubmit}>
                <Styled.EditingIntro
                  onChange={(e) => setIntro(e.target.value)}
                  value={intro}
                />
                <Styled.Btn type="submit">
                  <p>
                    <Typo color="darkblue">변경</Typo>
                  </p>
                </Styled.Btn>
              </Styled.Form>
            )}
          </Styled.AlignWrapper>
        </Styled.IntroWrapper>
      </Styled.InformBox>

      <Styled.ListItems>
        <ListItem
          setSubmited={setIsSubmited}
          info={pwd}
          setInfo={setPwd}
          type="password"
        />
        <ListItem
          setSubmited={setIsSubmited}
          info={gitbub}
          setInfo={setGithub}
          type="github"
        />
        <ListItem
          setSubmited={setIsSubmited}
          info={insta}
          setInfo={setInsta}
          type="instagram"
        />
      </Styled.ListItems>
    </Styled.Wrapper>
  );
}

export default Profile;
