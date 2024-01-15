import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter([
  { path: "/", element: <Layout />, children: [{ index: true }] },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
