import * as Styled from "./style";
import Typo from "../../components/Typo/Typo";
import login from "../../assets/3dicons/login/people.webp";
import Button from "../../components/Button/Button";
import { TEXT } from "../../constants/text";
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
      <Styled.page>
        <Styled.loginbox>
          <Styled.Img src={login} />
          <Styled.welcometext>{TEXT.LOGIN}</Styled.welcometext>
          <Styled.Form onSubmit={(e) => handleLogin(e)}>
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
