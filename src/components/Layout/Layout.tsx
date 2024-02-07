import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { useCallback, useEffect } from "react";
import axios from "axios";
import * as Styled from "./style";
import { useLoginInfoDispatch } from "../../context/LoginUser/User";

function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isLoginMatch = pathname === "/login";
  const dispatch = useLoginInfoDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    checkToken();
    updateUser();
  }, []);

  const checkToken = useCallback(async () => {
    console.log("reloaded");

    const token = localStorage.getItem("accessToken");

    if (!token) {
      navigate("/login");
    }
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }, []);

  const updateUser = useCallback(async () => {
    const response = await axios.get("/member/me");
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
