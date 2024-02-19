import { useNavigate, useParams } from "react-router-dom";
import * as Styled from "./style";
import Typo from "../../components/Typo/Typo";
import getFormedDate from "../../utils/getFormedDate";
import Button from "../../components/Button/Button";
import { useCommentsById, useQnaDetail } from "../../hooks";
import ListItem from "../../components/ListItem/CommentIndex";
import React, { useState } from "react";
import axios from "axios";
import { css } from "@emotion/react";
import { ERROR } from "../../constants/message";
import Markdown from "./components/Markdown";

function QnaDetail() {
  const { id } = useParams();
  const uid = localStorage.getItem("id");

  if (!id) throw new Error(ERROR.ROUTE_NO_PARAM);
  if (!uid) throw new Error(ERROR.NO_ID);

  const { data: comments, reFetch } = useCommentsById(+id);
  const { data, error } = useQnaDetail(+id);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  console.log(comments);

  const isMyQna = +uid === data?.memberId;

  if (error === "rejected") throw new Error(ERROR.ID_QNA);
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
        throw new Error(ERROR.DELETE_QNA);
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
        throw new Error(ERROR.COMMENT_UPLOAD);
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
        <Styled.TagWrapper>
          {data?.childTags.map((tag) => (
            <Styled.Tag>{tag}</Styled.Tag>
          ))}
        </Styled.TagWrapper>
      </Styled.TitleAndInfoWrapper>
      <Styled.MarkDownContent>
        <Markdown>{data?.content}</Markdown>
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
          <Button padding="5px 10px" color="white">
            댓글 작성
          </Button>
        </Styled.BtnWrapper>
      </form>
      <Styled.CommentsContainer>
        {comments?.map((item) => (
          <ListItem
            key={item.commentId}
            commentId={item.commentId}
            memberId={item.memberId}
            name={item.name}
            memberImageUrl={item.memberImageUrl}
            part={item.part}
            createdAt={item.createdAt}
            content={item.content}
            update={reFetch}
          />
        ))}
      </Styled.CommentsContainer>
    </Styled.Wrapper>
  );
}

export default QnaDetail;
