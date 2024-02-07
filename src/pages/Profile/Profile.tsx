import MainAndSubtitle from "../../components/MainAndSubtitle";
import { TEXT } from "../../constants/text";
import * as Styled from "./style";
import Typo from "../../components/Typo/Typo";
import { css } from "@emotion/react";
import { theme } from "../../theme/theme";
import ListItem from "../../components/ListItem/ProfileIndex/index";
import { useEffect, useLayoutEffect, useState } from "react";
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
  const [file, setFile] = useState<Blob | null>(null);
  const [url, setUrl] = useState(user.imageUrl);

  useLayoutEffect(() => {
    checkAndUpdateState();
  }, [isSubmited]);

  const handleIntroSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateUserInfo("comment", intro);

    setIsSubmited(true);
    setEdit(false);
  };

  const checkAndUpdateState = async () => {
    const response = await axios.get("/member/me");

    const res = response.data.data;

    dispatch({
      type: "LOGIN",
      data: {
        ...res,
      },
    });

    setIsSubmited(false);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files && files.length === 1) {
      setFile(files[0]);
      setUrl(URL.createObjectURL(files[0]));

      const ok = window.confirm("프로필 사진을 바꾸시겠습니까?");

      if (!ok) {
        setFile(null);
        setUrl(user.imageUrl);
        return;
      }
      const formData = new FormData();
      formData.append("file", files[0]);

      await axios.post("/member/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
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
          <Styled.UserProfile src={url} />
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
          <Styled.FileInput
            onChange={handleFileUpload}
            accept="image/*"
            type="file"
            id="upload"
          />
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
              <Styled.Form onSubmit={(e) => handleIntroSubmit(e)}>
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
