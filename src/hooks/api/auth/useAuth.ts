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
        .post("/auth/login", data)
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

      const response = await axios.get("/member/me");

      const res = response.data.data;
      console.log(response.data.data);
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
