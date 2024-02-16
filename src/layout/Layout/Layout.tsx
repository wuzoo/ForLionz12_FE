import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import { useCallback, useEffect } from "react";
import axios from "axios";
import * as Styled from "./style";
import { useLoginInfoDispatch } from "../../context/LoginUser/User";
import { getCookie } from "../../utils/cookie";

function Layout() {
  const { pathname } = useLocation();
  const isLoginMatch = pathname === "/login";
  const dispatch = useLoginInfoDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = useCallback(async () => {
    const response = await axios({
      method: "post",
      url: `/auth/reissue?refreshToken=${getCookie("myToken")}`,
    });
    const { accessToken } = response.data.data;

    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

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
