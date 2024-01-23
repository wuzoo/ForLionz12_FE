import { Link, useLocation, useNavigate } from "react-router-dom";
import { IHeader } from "./types";
import * as Styled from "./style";
import Profile from "../Profile/Profile";
import tmp from "../../assets/imgs/tmpprofile.jpeg";
import Typo from "../Typo/Typo";
import MotionBar from "./component/MotionBar";

function Header({ type }: IHeader) {
  const isLoginPage = Boolean(type);
  const navigate = useNavigate();
  // const isAuthenticated = useAuth();
  const { pathname } = useLocation();

  const 마이페이지가기 = () => {
    navigate("/profile");
  };

  return (
    <Styled.Wrapper type={type}>
      <Styled.navcol>
        <Link to="/">
          <Styled.logo>LIONZ</Styled.logo>
        </Link>
        {!isLoginPage && (
          <>
            <Link to="/notification">
              <Typo weight="600">
                Notification
                {pathname == "/notification" && <MotionBar />}
              </Typo>
            </Link>
            <Link to="/homework-list">
              <Typo weight="600">
                Assignment
                {pathname == "/homework-list" && <MotionBar />}
              </Typo>
            </Link>
            <Link to="/qna">
              <Typo weight="600">
                Q&A
                {pathname == "/qna" && <MotionBar />}
              </Typo>
            </Link>
            <Link to="/contact">
              <Typo weight="600">
                Contact
                {pathname == "/contact" && <MotionBar />}
              </Typo>
            </Link>
          </>
        )}
      </Styled.navcol>
      <Styled.headerprofile
        onClick={마이페이지가기}
        show={!isLoginPage ? true : false}
      >
        <Profile url={tmp} size="50" />
      </Styled.headerprofile>
    </Styled.Wrapper>
  );
}

export default Header;
