import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme/theme";
import Layout from "./layout/Layout/Layout";
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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoExist from "./pages/Error/404";
import ErrorPage from "./pages/Error/error";
import { ErrorProvider } from "./context/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
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
  {
    path: "/*",
    element: <NoExist />,
  },
]);

function App() {
  return (
    <>
      <ErrorProvider>
        <LoginInfoProvider>
          <ThemeProvider theme={theme}>
            <Global styles={GlobalStyle} />
            <RouterProvider router={router} />
            <ToastContainer
              position="bottom-center"
              limit={1}
              autoClose={3000}
              hideProgressBar
            />
          </ThemeProvider>
        </LoginInfoProvider>
      </ErrorProvider>
    </>
  );
}

export default App;
