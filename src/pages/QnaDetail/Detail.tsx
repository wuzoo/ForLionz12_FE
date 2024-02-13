import { useParams } from "react-router-dom";
import useQnaDetail from "../../hooks/api/qna/useQnaDetail";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as Styled from "./style";
import Typo from "../../components/Typo/Typo";
import getFormedDate from "../../utils/getFormedDate";
import { css } from "@emotion/react";
import Button from "../../components/Button/Button";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function QnaDetail() {
  const { id } = useParams();

  if (!id) return;

  const { data } = useQnaDetail(+id);

  if (!data) return;

  console.log(data);

  return (
    <Styled.Wrapper>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 10px;
        `}
      >
        <Styled.Title>
          <Typo fontSize="40" weight="700">
            {data?.title}
          </Typo>
        </Styled.Title>

        <Styled.NameAndDate>
          <Typo>{data?.name}</Typo>
          <Typo fontSize="14" color="darkgray">
            작성일: {getFormedDate(data?.createdAt)}
          </Typo>
        </Styled.NameAndDate>
        <div></div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          padding: 20px 2%;
        `}
      >
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
                  <p>{props.children}</p>
                  <br />
                </>
              );
            },
            img: (props: any) => {
              return (
                <img
                  {...props}
                  style={{
                    maxWidth: "100%",
                    height: "400px",
                    objectFit: "cover",
                  }}
                />
              );
            },
          }}
        />
      </div>
      <form>
        <p>
          <Typo>2개의 댓글</Typo>
        </p>
        <Styled.CommentInput placeholder="댓글을 남겨보세요." />
        <div
          css={css`
            display: flex;
            justify-content: end;
            gap: 10px;
            padding: 10px 0px;

            button {
              width: 100px;
              height: 30px;
            }
          `}
        >
          <Button color="white" bgcolor="black">
            작성 취소
          </Button>
          <Button color="white">작성 취소</Button>
        </div>
      </form>
    </Styled.Wrapper>
  );
}

export default QnaDetail;
