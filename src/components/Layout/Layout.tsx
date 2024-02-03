import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { useEffect } from "react";
import axios from "axios";
import * as Styled from "./style";
import { useLoginInfoState } from "../../context/LoginUser/User";

function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isLoginMatch = pathname === "/login";
  const state = useLoginInfoState();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(state);
  }, [pathname]);

  useEffect(() => {
    checkTmp();
  }, []);

  const checkTmp = async () => {
    console.log("reloaded");

    const token = localStorage.getItem("accessToken");
    console.log(token);
    if (!token) {
      navigate("/login");
    }
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  return (
    <Styled.Layout>
      <Header type={isLoginMatch ? "login" : ""} />
      <Outlet />
    </Styled.Layout>
  );
}
export default Layout;
