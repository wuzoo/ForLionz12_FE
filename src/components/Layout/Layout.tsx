import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div>I'm Navigation</div>
      <Outlet />
    </>
  );
}
export default Layout;
