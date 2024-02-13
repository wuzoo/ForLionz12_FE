import Profile from "../../Profile/Profile";
import user from "../../../assets/imgs/defaultUser.svg";
import * as Styled from "./style";
import Typo from "../../Typo/Typo";
import chat from "./assets/chat.svg";
import getFormedDate from "../../../utils/getFormedDate";
import useChildComments from "../../../hooks/api/comment/useChildComments";
import { css } from "@emotion/react";
import { theme } from "../../../theme/theme";

interface IComment {
  id: number;
  url: string;
  name: string;
  createdAt: string;
  content: string;
  part: string;
  type: "parent" | "child";
  last: boolean;
}

function ListItem({ url, name, createdAt, id, content, part, type }: IComment) {
  const { data } = useChildComments(id);

  console.log(data);

  return (
    <Styled.Wrapper
      css={css`
        border-bottom: ${type === "parent"
          ? `1px solid ${theme.color.lightgray}`
          : "none"};
        padding: ${type === "parent" ? 0 : "0px 20px"};
      `}
    >
      <Styled.Info>
        <Profile url={url || user} size="60" />
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

      <Styled.Comment
        css={css`
          border-bottom: ${type === "child" &&
          `1px solid ${theme.color.lightgray}`};
        `}
      >
        <Typo weight="500">{content}</Typo>
      </Styled.Comment>

      <Styled.Child
        css={css`
          display: ${type === "child" && "none"};
        `}
      >
        <img width="18" src={chat} />
        <Typo color="darkblue" weight="600">
          {data?.length ? `${data?.length}개의 답글` : "댓글 달기"}
        </Typo>
      </Styled.Child>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        `}
      >
        {data?.map((item, index) => (
          <>
            <ListItem
              last={index + 1 === data.length}
              type="child"
              id={item.commentId}
              name={item.name}
              part={item.part}
              createdAt={item.createdAt}
              content={item.content}
              url={item.memberImageUrl}
            />
          </>
        ))}
        {/* <Styled.Form
          css={css`
            display: ${(type === "parent" || !last) && "none"};
          `}
        >
          <Styled.ChildCommentInput placeholder="댓글을 작성해주세요." />
          <Button color="white">댓글 작성</Button>
        </Styled.Form> */}
      </div>
    </Styled.Wrapper>
  );
}

export default ListItem;
