import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as Styled from "./style";
import Typo from "../../components/Typo/Typo";
import getFormedDate from "../../utils/getFormedDate";
import Button from "../../components/Button/Button";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useCommentsById, useQnaDetail } from "../../hooks";
import ListItem from "../../components/ListItem/CommentIndex";
import React, { useState } from "react";
import axios from "axios";
import { css } from "@emotion/react";

function QnaDetail() {
  const { id } = useParams();
  const uid = localStorage.getItem("id");

  if (!id) throw new Error("page has no id param");
  if (!uid) throw new Error("has no localstorage id");

  const { data: comments, reFetch } = useCommentsById(+id);
  const { data, error } = useQnaDetail(+id);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const isMyQna = +uid === data?.memberId;

  if (error === "rejected") throw new Error("큐앤에이 상세 조회 에러");
  if (!data) return;

  const handleDelete = async () => {
    const ok = window.confirm("삭제하시겠습니까 ?");

    if (!ok) return;

    await axios
      .delete(`${import.meta.env.VITE_QUESTION}/${id}`)
      .then((res) => {
        if (res.status === 200) {
          navigate("/qna");
        }
      })
      .catch((err) => {
        console.log(err);
        throw new Error("큐앤에이 삭제 에러");
      });
  };

  const handleEdit = () => {
    navigate("/qna/upload", {
      state: {
        id,
      },
    });
  };

  const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios
      .post(
        import.meta.env.VITE_COMMENT,
        {
          content: comment,
          questionPostId: +id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .catch((err) => {
        console.log(err);
        throw new Error("comment upload error");
      });

    setComment("");
    reFetch();
  };

  return (
    <Styled.Wrapper>
      <Styled.TitleAndInfoWrapper>
        <Styled.TitleAndBtnWrapper>
          <Styled.Title>
            <Typo fontSize="40" weight="700">
              {data?.title}
            </Typo>
          </Styled.Title>
          <Styled.EditDeleteBtnWrapper
            css={css`
              display: ${isMyQna ? "flex" : "none"};
            `}
          >
            <Button bgcolor="white" color="darkblue" onClick={handleEdit}>
              수정
            </Button>
            <Button bgcolor="white" color="darkblue" onClick={handleDelete}>
              삭제
            </Button>
          </Styled.EditDeleteBtnWrapper>
        </Styled.TitleAndBtnWrapper>

        <Styled.NameAndDate>
          <Typo>{data?.name}</Typo>
          <Typo fontSize="14" color="darkgray">
            작성일: {getFormedDate(data?.createdAt)}
          </Typo>
        </Styled.NameAndDate>
        <div></div>
      </Styled.TitleAndInfoWrapper>
      <Styled.MarkDownContent>
        <ReactMarkdown
          children={data?.content}
          components={{
            code: (props: any) => {
              const match = /language-(\w+)/.exec(props.className || "");
              return (
                <SyntaxHighlighter
                  children={String(props.children).replace(/\n$/, "")}
                  style={oneDark}
                  language={match && match[1]}
                  PreTag="div"
                  showLineNumbers={true}
                  {...props}
                />
              );
            },
            p: (props: any) => {
              return (
                <>
                  <Styled.MDParagraph>{props.children}</Styled.MDParagraph>
                </>
              );
            },
            img: (props: any) => {
              return <Styled.MDImg {...props} />;
            },
          }}
        />
      </Styled.MarkDownContent>
      <form onSubmit={handleCommentSubmit}>
        <Styled.CommentCnt>
          <Typo color="darkblue" fontSize="24">
            {comments?.length}&nbsp;
          </Typo>
          <Typo>개의 댓글</Typo>
        </Styled.CommentCnt>
        <Styled.CommentInput
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="댓글을 남겨보세요."
        />
        <Styled.BtnWrapper>
          <Button width="100px" color="white">
            댓글 작성
          </Button>
        </Styled.BtnWrapper>
      </form>
      <Styled.CommentsContainer>
        {comments?.map((item) => (
          <ListItem
            key={item.commentId}
            id={item.commentId}
            name={item.name}
            url={item.memberImageUrl}
            part={item.part}
            createdAt={item.createdAt}
            content={item.content}
          />
        ))}
      </Styled.CommentsContainer>
    </Styled.Wrapper>
  );
}

export default QnaDetail;
