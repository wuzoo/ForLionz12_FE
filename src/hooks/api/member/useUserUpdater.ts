import axios from "axios";

export function useUserUpdater() {
  const updateUserInfo = async (type: string, value: string) => {
    let data;
    if (type === "password") {
      data = { password: value };
    } else if (type === "github") {
      data = { githubAddress: value };
    } else if (type === "instagram") {
      data = { instagramId: value }; // 에러있는듯.
    } else if (type === "comment") {
      data = { introduction: value };
    }
    await axios
      .put(`${import.meta.env.VITE_MEMBER}/${type}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .catch(() => {
        throw new Error("info update error");
      });
  };

  return { updateUserInfo };
}
