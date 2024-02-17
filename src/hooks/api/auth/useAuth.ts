import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginInfoDispatch } from "../../../context/LoginUser/User";
import { getCookie, removeCookie, setCookie } from "../../../utils/cookie";
import { error } from "../../../utils/toast";

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

          console.log(accessToken, refreshToken);

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
        })
        .catch((err) => {
          if (err.response.status === 401) {
            error("올바른 유저 정보가 아니에요.");
          }
        });

      const response = await axios
        .get(import.meta.env.VITE_MY_INFO)
        .then((res) => {
          if (res.status === 200) {
            return res.data;
          }
        })
        .catch((err) => {
          if (err.response.status === 500) {
            error("유저 정보를 불러오는데 문제가 생겼어요.");
          }
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
