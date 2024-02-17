import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import { useCallback, useEffect } from "react";
import axios from "axios";
import * as Styled from "./style";
import { useLoginInfoDispatch } from "../../context/LoginUser/User";
import { getCookie } from "../../utils/cookie";
import { error } from "../../utils/toast";

function Layout() {
  const { pathname } = useLocation();
  const isLoginMatch = pathname === "/login";
  const dispatch = useLoginInfoDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = useCallback(async () => {
    console.log(getCookie("myToken"));

    await axios({
      method: "post",
      url: `/auth/reissue?refreshToken=${getCookie("myToken")}`,
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
