import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme";
import { RecoilRoot } from "recoil";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import HwList from "./pages/Hw-list/Hw-list";
import HwSubmit from "./pages/Hw-submit/Hw-submit";
import Contact from "./pages/Contact/Contact";
import Notification from "./pages/Notification/Notification";
import Profile from "./pages/Profile/Profile";
import Qna from "./pages/Qna/Qna";
import { LoginInfoProvider } from "./context/LoginUser/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <p>error</p>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "homework",
        element: <HwList />,
      },

      { path: "homework-submit", element: <HwSubmit /> },
      { path: "contact", element: <Contact /> },
      {
        path: "notification",
        element: <Notification />,
      },
      { path: "profile", element: <Profile /> },
      {
        path: "qna",
        element: <Qna />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RecoilRoot>
        <LoginInfoProvider>
          <ThemeProvider theme={theme}>
            <Global styles={GlobalStyle} />
            <RouterProvider router={router} />
          </ThemeProvider>
        </LoginInfoProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
