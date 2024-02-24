import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme/theme";
import Layout from "./layout/Layout/Layout";
const Home = React.lazy(() => import("./pages/Home/Home"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const HwList = React.lazy(() => import("./pages/Hw-list/Hw-list"));
const HwSubmit = React.lazy(() => import("./pages/Hw-submit/Hw-submit"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const Notification = React.lazy(
  () => import("./pages/Notification/Notification")
);
const Profile = React.lazy(() => import("./pages/Profile/Profile"));
const Qna = React.lazy(() => import("./pages/Qna/Qna"));
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
import Detail from "./pages/Hw-list/Hw-detail/detail";
import React, { Suspense } from "react";
import Lottie from "lottie-react";
import loadAni from "./assets/lottie/load.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={<Lottie animationData={loadAni} width={30} height={30} />}
      >
        <Layout />
      </Suspense>
    ),
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
      {
        path: "homework/detail/:id",
        element: <Detail />,
      },
      {
        path: "homework/:id",
        element: <HwList />,
      },

      {
        path: "homework/upload",
        element: <UploadHW />,
        loader: () => {
          const part = localStorage.getItem("part");

          return part === "STAFF" ? "ALLOWED" : "LIMIT";
        },
      },
      { path: "homework-submit/:id", element: <HwSubmit /> },

      { path: "contact", element: <Contact /> },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "notification/upload",
        element: <UploadNotice />,
        loader: () => {
          const part = localStorage.getItem("part");

          return part === "STAFF" ? "ALLOWED" : "LIMIT";
        },
      },

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
