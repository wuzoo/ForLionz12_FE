import * as Styled from "./style";
import Header from "../../components/Header/Header";
import Typo from "../../components/Typo/Typo";
import PageLogo from "../../components/PageLogo/PageLogo";

function Login() {
  return (
    <>
      <PageLogo type="login" left="20%" top="15%" />
      <Header type="login" />
      <div css={Styled.page}>
        <div css={Styled.loginbox}>
          <h1 css={Styled.welcometext}>
            LIKELION <br />
            INHA UNIV 12기와 <br />
            함께하기
          </h1>
          <Styled.Input placeholder="아이디를 입력하세요" />
          <Styled.Input placeholder="비밀번호를 입력하세요" />
          <Styled.loginbtn>
            <Typo fontSize="20" weight="600" color="white">
              로그인
            </Typo>
          </Styled.loginbtn>
        </div>
      </div>
    </>
  );
}
export default Login;
