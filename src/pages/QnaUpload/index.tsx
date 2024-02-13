import MainAndSubtitle from "../../components/MainAndSubtitle";
import * as Styled from "./style";
import { useState } from "react";
import useTags from "../../hooks/api/qna/useTags";
import { getParentTagData } from "../../api/qna";
import { ChildtagType } from "../../types/Qna";
import code from "./assets/code.svg";
import img from "./assets/img.svg";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

const defaultProps = {
  fontsizes: ["30", "14"],
  colors: ["black", "darkgray"],
  gap: "5",
};

interface IInputs {
  title: string;
  tag: string;
  content: string;
}

function QuestionUpload() {
  const [child, setChild] = useState<ChildtagType[]>();
  const [urls, setUrls] = useState<string[]>([]);

  const { register, handleSubmit } = useForm<IInputs>();

  const { data: tags } = useTags();

  const navigate = useNavigate();

  const getChild = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const response = await getParentTagData(+e.target.value);

    const { childTags } = response.data;
    setChild(childTags);
  };

  const handleCodeInput = () => {
    const input = document.getElementById("content") as HTMLInputElement;

    input.value += "  \n```\ncode\n```  \n";
    input.focus();
  };

  const onSubmit: SubmitHandler<IInputs> = async (data) => {
    const request = {
      ...data,
      postImageUrls: [...urls],
    };

    console.log(data);

    try {
      await axios.post("/question", request, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      throw new Error("upload qna error");
    }

    navigate("/qna");
  };

  const handleImgUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (!files || files.length !== 1) return;

    const response = await axios.post(
      "/question/image",
      {
        file: files[0],
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const url = response.data.data;
    setUrls((obj) => {
      return [...obj, url];
    });

    const input = document.getElementById("content") as HTMLInputElement;
    input.value += "  \n  \n![](" + url + ")  \n  \n";

    input.focus();
  };

  return (
    <Styled.Wrapper onSubmit={handleSubmit(onSubmit)}>
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
          main="Tag"
          sub="질문 내용에 해당하는 태그를 선택해주세요."
          {...defaultProps}
        />
        <Styled.HorizonWrapper>
          <Styled.SelectTag onChange={getChild}>
            {tags?.map((item) => (
              <option value={item.parentTagId}>{item.name}</option>
            ))}
          </Styled.SelectTag>
          <Styled.SelectTag {...register("tag")}>
            {child?.map((item) => (
              <option value={item.name}>{item.name}</option>
            ))}
          </Styled.SelectTag>
        </Styled.HorizonWrapper>
      </div>

      <div>
        <Styled.ContentTitleWrapper>
          <Styled.ContentTitleAndBtnWrapper>
            <MainAndSubtitle
              main="Content"
              sub="궁금한 점을 자세히 알려주세요."
              {...defaultProps}
            />

            <Styled.MdBtnWrapper>
              <Styled.Img onClick={handleCodeInput} src={code} />
              <Styled.FileLabel htmlFor="img">
                <Styled.Img width="100%" height="100%" src={img} />
              </Styled.FileLabel>
              <Styled.FileInput
                onChange={handleImgUpload}
                id="img"
                type="file"
              />
            </Styled.MdBtnWrapper>
          </Styled.ContentTitleAndBtnWrapper>
          <Styled.HorizonWrapper>
            {urls.map((item) => (
              <Styled.PreviewImg width="60" height="60" src={item} />
            ))}
          </Styled.HorizonWrapper>
        </Styled.ContentTitleWrapper>
        <Styled.ContentInput id="content" {...register("content")} />
      </div>
      <Styled.SubmitBtnWrapper>
        <Button onClick={() => navigate(-1)} bgcolor="black" color="white">
          작성 취소
        </Button>
        <Button type="submit" color="white">
          업로드
        </Button>
      </Styled.SubmitBtnWrapper>
    </Styled.Wrapper>
  );
}

export default QuestionUpload;
