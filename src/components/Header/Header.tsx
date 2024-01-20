import { Link } from "react-router-dom";
import { IHeader } from "./types";
import * as Styled from "./style";
import Profile from "../Profile/Profile";
import tmp from "../../assets/imgs/tmpprofile.jpeg";
import Typo from "../Typo/Typo";

function Header({ type }: IHeader) {
  const isLoginPage = Boolean(type);
  // const isAuthenticated = useAuth();

  return (
    <Styled.Wrapper type={type}>
      <Styled.navcol>
        <Link to="/">
          <Styled.logo>LIONZ</Styled.logo>
        </Link>
        {!isLoginPage && (
          <>
            <Link to="/notification">
              <Typo weight="600">Notification</Typo>
            </Link>
            <Link to="/homework-list">
              <Typo weight="600">Assignment</Typo>
            </Link>
            <Link to="/qna">
              <Typo weight="600">Q&A</Typo>
            </Link>
            <Link to="/contact">
              <Typo weight="600">Contact</Typo>
            </Link>
          </>
        )}
      </Styled.navcol>
      <Styled.headerprofile show={!isLoginPage ? true : false}>
        <Profile url={tmp} size="50" />
      </Styled.headerprofile>
    </Styled.Wrapper>
  );
}

export default Header;
