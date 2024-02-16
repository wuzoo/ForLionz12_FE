import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginInfoDispatch } from "../../../context/LoginUser/User";
import { getCookie, removeCookie, setCookie } from "../../../utils/cookie";

export function useAuth() {
  const navigate = useNavigate();
  const dispatch = useLoginInfoDispatch();

  const check = useCallback(
    async (email: string, password: string) => {
      const data = {
        email,
        password,
      };
      await axios
        .post(import.meta.env.VITE_AUTH_API, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          const { accessToken, refreshToken } = res.data.data;

          if (getCookie("myToken")) {
            removeCookie("myToken");
          }

          if (refreshToken) {
            setCookie("myToken", refreshToken, {
              path: "/",
              secure: true,
              sameSite: "none",
            });
          }

          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${accessToken}`;

          if (res.status === 200) {
            navigate("/");
          }
          if (res.status === 401) {
            // showToast()
          }
        })
        .catch((err) => {
          throw new Error(err);
        });

      const response = await axios
        .get(import.meta.env.VITE_MY_INFO)
        .then((res) => {
          if (res.status === 500) {
            throw new Error("token 500 error");
          }
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
      const res = response.data;

      const { id, part } = res;
      localStorage.setItem("id", id);
      localStorage.setItem("part", part);

      dispatch({
        type: "LOGIN",
        data: {
          ...res,
        },
      });
    },
    [navigate]
  );

  return { check };
}
