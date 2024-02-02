import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function useAuth() {
  const navigate = useNavigate();

  const check = useCallback(
    async (email: string, password: string) => {
      const data = {
        email,
        password,
      };
      await axios
        .post("/auth/login", data)
        .then((res) => {
          const { accessToken } = res.data;
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
    },
    [navigate]
  );

  return { check };
}

export default useAuth;
