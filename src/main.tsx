import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import axios from "axios";
import {} from "react-cookie";
import { CookiesProvider } from "react-cookie";
import { ThemeContextProvider } from "./context/IsDark/IsDark";

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CookiesProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </CookiesProvider>
  </React.StrictMode>
);
