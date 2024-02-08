import { useState } from "react";
import MainAndSubtitle from "../../../components/MainAndSubtitle";
import * as Styled from "./style";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Toggle from "../components/Toggle/Toggle";

const defaultProps = {
  fontsizes: ["30", "14"],
  colors: ["black", "darkgray"],
  gap: "5",
};

function UploadNotice() {
  const [title, setTitle] = useState("");
  const [part, setPart] = useState("all");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios
      .post(
        "/notification",
        {
          title,
          content,
          part: part.toUpperCase(),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .catch((err) => {
        console.log(err);
        throw new Error("notice upload error");
      });

    navigate("/notification");
  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <div>
        <MainAndSubtitle
          main="Title"
          sub="제목을 입력해주세요."
          {...defaultProps}
        />
        <Styled.TitleInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <Styled.PartContainer>
        <MainAndSubtitle main="Part" sub="ALL/FE/BE" {...defaultProps} />
        <Styled.HorizontalAlignWrapper>
          <Toggle text="all" part={part} setPart={setPart} />
          <Toggle text="fe" part={part} setPart={setPart} />
          <Toggle text="be" part={part} setPart={setPart} />
        </Styled.HorizontalAlignWrapper>
      </Styled.PartContainer>

      <div>
        <MainAndSubtitle
          main="Content"
          sub="과제 내용을 작성해주세요."
          {...defaultProps}
        />
        <Styled.ContentInput
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <Styled.BtnWrapper>
        <Button
          type="reset"
          onClick={() => navigate(-1)}
          width="130px"
          height="36px"
          bgcolor="black"
          color="white"
        >
          작성 취소
        </Button>
        <Button type="submit" width="130px" height="36px" color="white">
          업로드하기
        </Button>
      </Styled.BtnWrapper>
    </Styled.Form>
  );
}

export default UploadNotice;
