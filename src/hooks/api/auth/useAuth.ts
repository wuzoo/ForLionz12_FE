import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginInfoDispatch } from "../../../context/LoginUser/User";

function useAuth() {
  const navigate = useNavigate();
  const dispatch = useLoginInfoDispatch();

  const check = useCallback(
    async (email: string, password: string) => {
      const data = {
        email,
        password,
      };
      await axios
        .post("/auth/login", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);

          const { accessToken } = res.data.data;

          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${accessToken}`;

          localStorage.setItem("accessToken", accessToken);
          console.log(accessToken);
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
        .get("/member/me")
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
      console.log(response.data);
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

export default useAuth;
