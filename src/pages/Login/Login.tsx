import * as Styled from "./style";
import Header from "../../components/Header/Header";
import Typo from "../../components/Typo/Typo";
import PageLogo from "../../components/PageLogo/PageLogo";
import Button from "../../components/Button/Button";
import { TEXT } from "../../constants/text";

function Login() {
  return (
    <>
      <PageLogo width="350" height="350" type="login" left="22%" top="23%" />
      <Header type="login" />
      <Styled.page>
        <Styled.loginbox>
          <Styled.welcometext>{TEXT.login}</Styled.welcometext>
          <Styled.Input placeholder="아이디를 입력하세요" />
          <Styled.Input placeholder="비밀번호를 입력하세요" />

          <Button width="60%" height="40" onClick={() => {}}>
            <Typo fontSize="20" weight="600" color="white">
              로그인
            </Typo>
          </Button>
        </Styled.loginbox>
      </Styled.page>
    </>
  );
}
export default Login;
