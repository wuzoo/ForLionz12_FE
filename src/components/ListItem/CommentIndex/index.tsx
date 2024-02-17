import Profile from "../../Profile/Profile";
import * as Styled from "./style";
import Typo from "../../Typo/Typo";
import chat from "./assets/chat.svg";
import getFormedDate from "../../../utils/getFormedDate";
import { useChildComments } from "../../../hooks";
import { css } from "@emotion/react";
import Button from "../../Button/Button";
import Item from "./components/Child";
import React, { useState } from "react";
import { IComment } from "./types";
import axios from "axios";
import { ERROR } from "../../../constants/message";

function ListItem({ url, name, createdAt, id, content, part }: IComment) {
  const { data, reFetch } = useChildComments(id);
  const [isChildClicked, setIsChildClicked] = useState(false);
  const [comment, setComment] = useState("");

  const handleAddComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios
      .post(
        import.meta.env.VITE_CHILD_COMMENT,
        {
          content: comment,
          commentId: id,
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
    <Styled.Wrapper css={css``}>
      <div>
        <Styled.Info>
          <Profile url={url} size="60" />
          <Styled.NameAndDate>
            <Styled.Name>
              <Typo>
                {name} <Typo>({part})</Typo>
              </Typo>
            </Styled.Name>
            <Styled.Date>
              <Typo fontSize="14" color="darkgray" weight="500">
                {getFormedDate(createdAt)}
              </Typo>
            </Styled.Date>
          </Styled.NameAndDate>
        </Styled.Info>

        <Styled.Comment>
          <Typo weight="500">{content}</Typo>
        </Styled.Comment>

        <Styled.Child onClick={() => setIsChildClicked((prev) => !prev)}>
          <img width="18" src={chat} />
          <Typo color="darkblue" weight="600">
            {data?.length ? `${data?.length}개의 답글` : "댓글 달기"}
          </Typo>
        </Styled.Child>
      </div>
      <div
        css={css`
          display: ${isChildClicked ? "flex" : "none"};
          flex-direction: column;
          align-items: center;
        `}
      >
        {data?.map((item) => (
          <Item
            key={item.commentId}
            name={item.name}
            part={item.part}
            createdAt={item.createdAt}
            content={item.content}
            url={item.memberImageUrl}
          />
        ))}
        <Styled.Form onSubmit={handleAddComment}>
          <Styled.ChildCommentInput
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 작성해주세요."
          />
          <Button type="submit" width="100px" color="white">
            댓글 작성
          </Button>
        </Styled.Form>
      </div>
    </Styled.Wrapper>
  );
}

export default ListItem;
