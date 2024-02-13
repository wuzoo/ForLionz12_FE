import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Typo from "../../Typo/Typo";
import { css } from "@emotion/react";

interface IBtn {
  type: string;
  id: string;
}

export default function AdminUploadBtn({ type, id }: IBtn) {
  const navigate = useNavigate();

  const isAdmin = +id === 2;

  let destination = "";
  const getText = () => {
    if (type === "notification") {
      destination = "/notification/upload";
      return "공지사항 업로드";
    } else if (type === "assignment") {
      destination = "/homework/upload";
      return "과제 업로드";
    }
  };

  return (
    <div
      css={css`
        display: ${isAdmin ? "" : "none"};
      `}
    >
      <Button
        width="120px"
        bordercolor="lightgray"
        borderwidth="2px"
        bgcolor="white"
        onClick={() => navigate(destination)}
      >
        <Typo fontSize="16" color="black">
          {getText()}
        </Typo>
      </Button>
    </div>
  );
}
