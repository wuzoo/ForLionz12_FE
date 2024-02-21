import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { IHeader } from "./types";
import * as Styled from "./style";
import Profile from "../../components/Profile/Profile";
import Typo from "../../components/Typo/Typo";
import { useLoginInfoState } from "../../context/LoginUser/User";

function Header({ type }: IHeader) {
  const isLoginPage = Boolean(type);
  const navigate = useNavigate();
  const { imageUrl } = useLoginInfoState();

  const { pathname } = useLocation();
  const { id } = useParams();

  const 마이페이지가기 = () => {
    navigate("/profile");
  };

  return (
    <Styled.Wrapper type={type}>
      <Styled.NavCol>
        <Link to="/">
          <Styled.Logo>LIONZ</Styled.Logo>
        </Link>
        {!isLoginPage && (
          <div>
            <Link to="/homework">
              <Typo
                color={
                  pathname === "/homework" ||
                  pathname === `/homework-submit/${id}`
                    ? "darkblue"
                    : "black"
                }
                weight="600"
              >
                Assignment
              </Typo>
            </Link>
            <Link to="/notification">
              <Typo
                color={pathname === "/notification" ? "darkblue" : "black"}
                weight="600"
              >
                Notification
              </Typo>
            </Link>
            <Link to="/qna">
              <Typo
                color={pathname === "/qna" ? "darkblue" : "black"}
                weight="600"
              >
                Q&A
              </Typo>
            </Link>
            <Link to="/contact">
              <Typo
                color={pathname === "/contact" ? "darkblue" : "black"}
                weight="600"
              >
                Contact
              </Typo>
            </Link>
          </div>
        )}
      </Styled.NavCol>
      <Styled.Profile
        onClick={마이페이지가기}
        show={!isLoginPage ? true : false}
      >
        <Profile url={imageUrl} size="50" />
      </Styled.Profile>
    </Styled.Wrapper>
  );
}

export default Header;
