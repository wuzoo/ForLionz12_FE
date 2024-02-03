import * as Styled from "./style";
import Typo from "../../components/Typo/Typo";
import PageLogo from "../../components/PageLogo/PageLogo";
import Button from "../../components/Button/Button";
import { TEXT } from "../../constants/text";
import { css } from "@emotion/react";
import { useState } from "react";
import useAuth from "../../hooks/api/auth/useAuth";

function Login() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const { check } = useAuth();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    check(id, pwd);
  };

  return (
    <>
      <PageLogo width="350" height="350" type="login" left="22%" top="23%" />
      <Styled.page>
        <Styled.loginbox>
          <Styled.welcometext>{TEXT.login}</Styled.welcometext>
          <Styled.Form
            onSubmit={(e) => handleLogin(e)}
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
            `}
          >
            <Styled.Input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="아이디를 입력하세요"
            />
            <Styled.Input
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              placeholder="비밀번호를 입력하세요"
            />

            <Button type="submit" width="60%" height="40px" onClick={() => {}}>
              <Typo fontSize="20" weight="600" color="white">
                로그인
              </Typo>
            </Button>
          </Styled.Form>
        </Styled.loginbox>
      </Styled.page>
    </>
  );
}
export default Login;
