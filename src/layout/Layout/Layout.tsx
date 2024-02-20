import { Outlet, useNavigate, useLocation, useParams } from "react-router-dom";
import Header from "../Header/Header";
import { useCallback, useEffect } from "react";
import axios from "axios";
import * as Styled from "./style";
import { useLoginInfoDispatch } from "../../context/LoginUser/User";
import { getCookie } from "../../utils/cookie";
import { error } from "../../utils/toast";

function Layout() {
  const { pathname, state } = useLocation();
  const isLoginMatch = pathname === "/login";
  const dispatch = useLoginInfoDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (pathname === `/homework/${id}`) {
      document.body.style.maxWidth = `${document.body.clientWidth}px`;
      document.body.style.overflowY = "hidden";
      return;
    }
    if (state?.history === "detail") {
      if (pathname === "/homework") {
        document.body.style.maxWidth = "100vw";
        document.body.style.overflowY = "scroll";
        return;
      } else if (pathname !== "/homework") {
        document.body.style.maxWidth = "100vw";
        document.body.style.overflowY = "scroll";
      }
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = useCallback(async () => {
    console.log(getCookie("myToken"));

    await axios({
      method: "post",
      url: `${import.meta.env.VITE_AUTH_REISSUE}=${getCookie("myToken")}`,
    })
      .then((res) => {
        const { accessToken } = res.data.data;

        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
      })
      .catch((err) => {
        if (err.response?.status === 500) {
          error("유저 정보에 문제가 있어요.");
          navigate("/login");
        }
      });

    updateUser();
  }, []);

  const updateUser = useCallback(async () => {
    const response = await axios.get(import.meta.env.VITE_MY_INFO);

    const data = response.data.data;

    dispatch({
      type: "LOGIN",
      data: {
        ...data,
      },
    });
  }, []);

  return (
    <Styled.Layout>
      <Header type={isLoginMatch ? "login" : ""} />
      <Outlet />
    </Styled.Layout>
  );
}
export default Layout;
