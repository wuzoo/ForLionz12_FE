import { useState } from "react";
import MainAndSubtitle from "../../../components/MainAndSubtitle";
import * as Styled from "./style";
import Button from "../../../components/Button/Button";
import Typo from "../../../components/Typo/Typo";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getDeadlineTime } from "../../../utils/getDeadlineTime";
import Toggle from "../components/Toggle/Toggle";

const defaultProps = {
  fontsizes: ["30", "14"],
  colors: ["black", "darkgray"],
  gap: "5",
};

const initialDate = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();

  const tmpArr = [year, month, day];

  return tmpArr.join("-");
};

function UploadHW() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(initialDate());
  const [part, setPart] = useState("all");
  const [category, setCate] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  console.log(getDeadlineTime(date));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const expireAt = getDeadlineTime(date);

    console.log(
      category.toUpperCase(),
      title,
      content,
      part.toUpperCase(),
      tags,
      expireAt
    );

    await axios
      .post(
        "/assignment",
        {
          category: category.toUpperCase(),
          title,
          content,
          part: part.toUpperCase(),
          tags: [...tags],
          expireAt,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .catch((err) => {
        console.log(err);
        throw new Error("upload assignment error");
      });

    navigate("/homework");
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
          sub="해당 과제의 메인 카테고리를 지정해주세요. ex) React, Django"
          {...defaultProps}
        />
        <Styled.CategoryInput
          value={category}
          onChange={(e) => setCate(e.target.value)}
        />
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

export default UploadHW;
