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
import Loader from "./pages/Loader/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "homework",
        element: (
          <Suspense fallback={<Loader />}>
            <HwList />
          </Suspense>
        ),
      },
      {
        path: "homework/detail/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <Detail />
          </Suspense>
        ),
      },
      {
        path: "homework/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <HwList />
          </Suspense>
        ),
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

      {
        path: "contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "notification",
        element: (
          <Suspense fallback={<Loader />}>
            <Notification />
          </Suspense>
        ),
      },
      {
        path: "notification/upload",
        element: <UploadNotice />,
        loader: () => {
          const part = localStorage.getItem("part");

          return part === "STAFF" ? "ALLOWED" : "LIMIT";
        },
      },

      {
        path: "profile",
        element: (
          <Suspense fallback={<Loader />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "qna",
        element: (
          <Suspense fallback={<Loader />}>
            <Qna />
          </Suspense>
        ),
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
