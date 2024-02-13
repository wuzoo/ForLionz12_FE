import { useEffect, useState } from "react";
import MainAndSubtitle from "../../../components/MainAndSubtitle";
import * as Styled from "./style";
import Button from "../../../components/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Toggle from "../components/Toggle/Toggle";
import useNoticeById from "../../../hooks/api/notification/useNoticeById";
import { useForm, SubmitHandler } from "react-hook-form";

const defaultProps = {
  fontsizes: ["30", "14"],
  colors: ["black", "darkgray"],
  gap: "5",
};

interface IInputs {
  title: string;
  part: string;
  content: string;
}

function UploadNotice() {
  const { register, handleSubmit, reset } = useForm<IInputs>();

  const [part, setPart] = useState("all");

  const navigate = useNavigate();

  const { state } = useLocation();
  const { data } = useNoticeById(state?.id);

  useEffect(() => {
    if (data) {
      reset({ title: data?.title, content: data?.content });
      setPart(data?.part.toLowerCase());
    }
  }, [state?.id, data]);

  const onSubmit: SubmitHandler<IInputs> = async (data) => {
    console.log(data);

    const formedData = {
      ...data,
      part: part.toUpperCase(),
    };
    try {
      if (state?.id === undefined) {
        await axios.post("/notification", formedData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else if (typeof state?.id === "string") {
        await axios.put(`/notification/${+state?.id}`, formedData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    } catch (err) {
      throw new Error("upload notification error");
    }

    navigate("/notification");
  };

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <MainAndSubtitle
          main="Title"
          sub="제목을 입력해주세요."
          {...defaultProps}
        />
        <Styled.TitleInput {...register("title")} />
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
        <Styled.ContentInput {...register("content")} />
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
