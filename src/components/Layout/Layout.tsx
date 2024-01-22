import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { css } from "@emotion/react";

function Layout() {
  return (
    <div
      css={css`
        margin: 80px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        min-height: 100vh;
        position: relative;
      `}
    >
      <Header />
      <Outlet />
    </div>
  );
}
export default Layout;
