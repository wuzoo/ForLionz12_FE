import MainAndSubtitle from "../../components/MainAndSubtitle";
import * as Styled from "./style";
import { useEffect, useState } from "react";
import { useQnaDetail, useTags } from "../../hooks";
import { getParentTagData } from "../../api/qna";
import { ChildtagType } from "../../types";
import code from "./assets/code.svg";
import img from "./assets/img.svg";
import Button from "../../components/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { SUB_TEXT } from "../../constants/text";
import Checkbox from "../Qna/components/Checkbox/Checkbox";
import { ERROR } from "../../constants/message";
import { warning } from "../../utils/toast";

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
  const [query, setQuery] = useState<number[]>([]);
  const { register, handleSubmit, reset } = useForm<IInputs>();

  const navigate = useNavigate();
  const { state } = useLocation();

  const { data: tags } = useTags();
  const { data, error } = useQnaDetail(state?.id);

  if (error === "rejected") throw new Error(ERROR.ID_QNA);

  useEffect(() => {
    if (data) {
      reset({ title: data?.title, content: data?.content });
      setUrls([...data?.postImageUrls]);
    }
  }, [state?.id, data]);

  const getChild = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const response = await getParentTagData(+e.target.value);

    const { childTags } = response.data;

    setChild(childTags);
    setQuery([]);
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

    if (!data.title) {
      warning(ERROR.QNA_UPLOAD_NO_TITLE);
      return;
    } else if (query.length === 0) {
      warning(ERROR.QNA_UPLOAD_NO_TAG);
      return;
    } else if (!data.content) {
      warning(ERROR.QNA_UPLOAD_NO_CONTENT);
      return;
    }

    let postId: number = 0;

    try {
      if (state?.id !== undefined) {
        const response = await axios
          .put(`${import.meta.env.VITE_QUESTION}/${state?.id}`, request, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => res.data);

        postId = response.data.id;
      } else {
        const response = await axios
          .post(import.meta.env.VITE_QUESTION, request, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => res.data);

        postId = response.data.id;
      }
      await axios
        .post(
          import.meta.env.VITE_TAG_MAP,
          {
            questionPostId: postId,
            childTagId: query,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          if (res.status === 204) {
            if (state?.id) {
              navigate(`/qna/${state?.id}`);
            } else {
              navigate("/qna");
            }
          }
        });
    } catch (err) {
      throw new Error(ERROR.QNA_UPLOAD);
    }
  };

  const handleImgUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (!files || files.length !== 1) return;

    const response = await axios
      .post(
        `${import.meta.env.VITE_QUESTION}/image`,
        {
          file: files[0],
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .catch((err) => {
        console.log(err);
        throw new Error(ERROR.FILE_UPLOAD);
      });

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
          sub={SUB_TEXT.QNA_TITLE}
          {...defaultProps}
        />
        <Styled.TitleInput {...register("title")} />
      </div>
      <div>
        <MainAndSubtitle main="Tag" sub={SUB_TEXT.QNA_TAGS} {...defaultProps} />
        <Styled.HorizonWrapper>
          <Styled.SelectTag onChange={getChild}>
            <option value="default">선택</option>
            {tags?.slice(1)?.map((item) => (
              <option key={item.parentTagId} value={item.parentTagId}>
                {item.name}
              </option>
            ))}
          </Styled.SelectTag>
          <Styled.CheckBoxWrapper>
            {child?.map((item) => (
              <Checkbox
                key={item.childTagId}
                setClickedValue={setQuery}
                text={item.name}
                id={item.childTagId}
                values={query}
              />
            ))}
          </Styled.CheckBoxWrapper>
        </Styled.HorizonWrapper>
      </div>
      <div>
        <Styled.ContentTitleWrapper>
          <Styled.ContentTitleAndBtnWrapper>
            <MainAndSubtitle
              main="Content"
              sub={SUB_TEXT.QNA_CONTENT}
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
