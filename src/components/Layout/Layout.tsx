import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import { css } from "@emotion/react";
import { useEffect } from "react";

function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      css={css`
        margin: 80px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 100vw;
        position: relative;
      `}
    >
      <Header />
      <Outlet />
    </div>
  );
}
export default Layout;
