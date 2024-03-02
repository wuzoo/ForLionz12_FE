import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { IHeader } from "./types";
import * as Styled from "./style";
import Profile from "../../components/Profile/Profile";
import Typo from "../../components/Typo/Typo";
import { useLoginInfoState } from "../../context/LoginUser/User";
import night from "./assets/night.svg";
import sun from "./assets/sun.svg";
import { css } from "@emotion/react";
import { darkTheme, lightTheme, theme } from "../../styles/theme/theme";
import { useContext } from "react";
import { ThemeContext } from "../../context/IsDark/IsDark";

function Header({ type }: IHeader) {
  const isLoginPage = Boolean(type);
  const navigate = useNavigate();
  const { imageUrl } = useLoginInfoState();

  const { pathname } = useLocation();
  const { id } = useParams();
  const { isDark, toggleColorTheme } = useContext(ThemeContext);

  const 마이페이지가기 = () => {
    navigate("/profile");
  };

  return (
    <Styled.Wrapper
      type={type}
      css={css`
        background-color: ${isDark ? darkTheme.bgColor : lightTheme.bgColor};
      `}
    >
      <Styled.NavCol>
        <Link to="/">
          <Styled.Logo
            css={css`
              color: ${isDark ? theme.mode.dark.main : theme.mode.light.main};
            `}
          >
            LIONZ
          </Styled.Logo>
        </Link>
        {!isLoginPage && (
          <div>
            <Link to="/homework">
              <Typo
                color={
                  pathname === "/homework" ||
                  pathname === `/homework-submit/${id}`
                    ? "darkblue"
                    : undefined
                }
                weight="600"
              >
                Assignment
              </Typo>
            </Link>
            <Link to="/notification">
              <Typo
                color={pathname === "/notification" ? "darkblue" : undefined}
                weight="600"
              >
                Notification
              </Typo>
            </Link>
            <Link to="/qna">
              <Typo
                color={pathname === "/qna" ? "darkblue" : undefined}
                weight="600"
              >
                Q&A
              </Typo>
            </Link>
            <Link to="/contact">
              <Typo
                color={pathname === "/contact" ? "darkblue" : undefined}
                weight="600"
              >
                Contact
              </Typo>
            </Link>
          </div>
        )}
      </Styled.NavCol>

      <div
        css={css`
          ${theme.flexRow("", "center", 30)}
        `}
      >
        <Styled.ThemeWrapper onClick={toggleColorTheme}>
          <img src={isDark ? sun : night} width={30} height={30} />
        </Styled.ThemeWrapper>
        <Styled.Profile
          onClick={마이페이지가기}
          show={!isLoginPage ? true : false}
        >
          <Profile url={imageUrl} size="50" />
        </Styled.Profile>
      </div>
    </Styled.Wrapper>
  );
}

export default Header;
