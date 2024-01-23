import MainAndSubtitle from "../../components/MainAndSubtitle";
import { TEXT } from "../../constants/text";
import * as Styled from "./style";
import User from "../../components/Profile/Profile";
import tmp from "../../assets/imgs/tmpprofile.jpeg";
import Typo from "../../components/Typo/Typo";
import { css } from "@emotion/react";
import { theme } from "../../theme/theme";
import ListItem from "./components/ListItem/ListItem";
import { useState } from "react";

function Profile() {
  const userdata = {
    name: "최주용",
    intro: "안녕하세요 저는 최주용입니다. 열심히 해보겠습니닷 !!",
    // img: ...
    // github: ...
    // insta: ...
  };
  const [edit, setEdit] = useState(false);

  const EditHandler = () => {
    setEdit(true);
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
          <User size="240" url={tmp} />
          <Styled.AlignWrapper
            css={css`
              align-items: center;
            `}
          >
            <Styled.UploadBtn htmlFor="upload">
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
          </Styled.AlignWrapper>
        </Styled.ProfilePartWrapper>
        <Styled.IntroWrapper>
          <Styled.AlignWrapper
            css={css`
              gap: 30px;
            `}
          >
            {!edit ? (
              <>
                <Styled.Name>
                  <Typo fontSize="40" weight="600">
                    최주용
                  </Typo>
                </Styled.Name>
                <Styled.Introduce>
                  <Typo color="darkgray">
                    안녕하세요 저는 누구입니다. 안녕하세요 저는 누구입니다.
                    안녕하세요 저는 누구입니다. 안녕하세요 저는 누구입니다.
                  </Typo>
                </Styled.Introduce>
              </>
            ) : (
              <Styled.Form>
                <Styled.EditingName value="최주용" />
                <Styled.EditingIntro value="안녕하세요 저는 누구입니다.안녕하세요 저는 누구입니다.안녕하세요 저는 누구입니다.안녕하세요 저는 누구입니다.안녕하세요 저는 누구입니다. " />
              </Styled.Form>
            )}
          </Styled.AlignWrapper>
          <Styled.EditText onClick={EditHandler}>
            <Typo color="darkblue">수정</Typo>
          </Styled.EditText>
        </Styled.IntroWrapper>
      </Styled.InformBox>

      <Styled.ListItems>
        <ListItem type="password" />
        <ListItem type="github" />
        <ListItem type="insta" />
      </Styled.ListItems>
    </Styled.Wrapper>
  );
}

export default Profile;
