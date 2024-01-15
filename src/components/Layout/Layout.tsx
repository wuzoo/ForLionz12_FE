import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <h1>navigation</h1>
      <Outlet />
    </>
  );
}
export default Layout;
