import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { useEffect } from "react";
import {
  useLoginInfoDispatch,
  useLoginInfoState,
} from "../../context/LoginUser/User";
import axios from "axios";
import * as Styled from "./style";

function Layout() {
  const { pathname } = useLocation();
  const dispatch = useLoginInfoDispatch();
  const ct = useLoginInfoState();
  const navigate = useNavigate();
  const isLoginMatch = pathname === "/login";

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(ct);
    onStoreUser();
  }, [pathname]);

  const onStoreUser = async () => {
    await axios
      .get("/member/me")
      .then((res) => {
        if (res.status === 500) {
          throw new Error("no token");
        }
        const data = res.data;
        dispatch({
          type: "LOGIN",
          data: {
            ...data,
          },
        });
      })
      .catch((err) => {
        navigate("/login");
        console.log(err);
      });
  };

  return (
    <Styled.Layout>
      <Header type={isLoginMatch ? "login" : ""} />
      <Outlet />
    </Styled.Layout>
  );
}
export default Layout;
