import axios from "axios";

function useUserUpdater() {
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
      .put(`/member/${type}`, data, {
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

export default useUserUpdater;
