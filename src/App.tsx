import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme";
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
import UploadHW from "./pages/Admin/UploadAssignment";
import UploadNotice from "./pages/Admin/UploadNotification";
import QuestionUpload from "./pages/QnaUpload";
import QnaDetail from "./pages/QnaDetail/Detail";
import { CookiesProvider } from "react-cookie";

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
        path: "homework",
        element: <HwList />,
      },
      { path: "homework/upload", element: <UploadHW /> },
      { path: "homework-submit/:id", element: <HwSubmit /> },

      { path: "contact", element: <Contact /> },
      {
        path: "notification",
        element: <Notification />,
      },
      { path: "notification/upload", element: <UploadNotice /> },

      { path: "profile", element: <Profile /> },
      {
        path: "qna",
        element: <Qna />,
      },
      {
        path: "qna/:id",
        element: <QnaDetail />,
      },
      {
        path: "qna/upload",
        element: <QuestionUpload />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <CookiesProvider>
        <LoginInfoProvider>
          <ThemeProvider theme={theme}>
            <Global styles={GlobalStyle} />
            <RouterProvider router={router} />
          </ThemeProvider>
        </LoginInfoProvider>
      </CookiesProvider>
    </>
  );
}

export default App;
