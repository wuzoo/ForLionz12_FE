import { useEffect, useState } from "react";
import MainAndSubtitle from "../../../components/MainAndSubtitle";
import * as Styled from "./style";
import Button from "../../../components/Button/Button";
import Typo from "../../../components/Typo/Typo";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { getDeadlineTime } from "../../../utils/getDeadlineTime";
import Toggle from "../components/Toggle/Toggle";
import useGetAssignmentById from "../../../hooks/api/assignment/useGetAssignmentById";
import { useForm, SubmitHandler } from "react-hook-form";
import { initialDate } from "../../../utils/getCurrenty-m-dString";

const defaultProps = {
  fontsizes: ["30", "14"],
  colors: ["black", "darkgray"],
  gap: "5",
};

interface IInputs {
  title: string;
  category: string;
  tag: string;
  content: string;
}

function UploadHW() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { data } = useGetAssignmentById(state?.id);

  const { register, handleSubmit, reset, getValues } = useForm<IInputs>({});

  const [date, setDate] = useState(initialDate());
  const [part, setPart] = useState("all");
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState("");

  useEffect(() => {
    if (data) {
      reset({
        title: data?.title,
        content: data?.content,
        category: data?.category,
      });
      setTags([...data?.tags]);
      setPart(data?.part.toLowerCase());
    }
  }, [state?.id, data]);

  const onSubmit: SubmitHandler<IInputs> = async (data) => {
    const expireAt = getDeadlineTime(date);

    const values = getValues();
    const formData = {
      ...data,
      category: values.category.toUpperCase(),
      part: part.toUpperCase(),
      tags: [...tags],
      expireAt,
    };

    try {
      if (state?.id === undefined) {
        await axios.post("/assignment", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else if (typeof state?.id === "string") {
        await axios.put(`/assignment/${+state?.id}`, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    } catch (err) {
      throw new Error("upload assignment error");
    }

    navigate("/homework");
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
      <div>
        <MainAndSubtitle
          main="Deadline"
          sub="과제 마감일을 설정해주세요"
          {...defaultProps}
        />
        <Styled.DateInput
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          placeholder="날짜 선택"
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
      <Styled.CategoryContainer>
        <MainAndSubtitle
          main="Category"
          sub={
            "다음 중 하나로 메인 카테고리를 지정해주세요.\nHTML, CSS, Git, JS, React, Django, Python, AWS, Docker"
          }
          {...defaultProps}
          gap="8"
        />
        <Styled.CategoryInput {...register("category")} />
      </Styled.CategoryContainer>
      <div>
        <Styled.TagsContainer>
          <Styled.TitleAndTagWrapper>
            <MainAndSubtitle
              main="Tags"
              sub="과제 내용에 대한 태그를 작성해주세요."
              {...defaultProps}
            />
            <Styled.HorizontalAlignWrapper>
              {tags.map((item, index) => (
                <Typo key={index} color="darkblue">
                  {item}
                </Typo>
              ))}
            </Styled.HorizontalAlignWrapper>
          </Styled.TitleAndTagWrapper>
          <Styled.HorizontalAlignWrapper>
            <Styled.Btn
              onClick={() => {
                setTags((obj) => {
                  return [...obj, tag];
                });
                setTag("");
              }}
            >
              <Typo color="darkblue">생성</Typo>
            </Styled.Btn>
            <Styled.Btn
              onClick={() => {
                setTags([]);
                setTag("");
              }}
            >
              <Typo color="darkblue">삭제</Typo>
            </Styled.Btn>
          </Styled.HorizontalAlignWrapper>
        </Styled.TagsContainer>
        <div>
          <Styled.TagInput
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </div>
      </div>
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

export default UploadHW;
