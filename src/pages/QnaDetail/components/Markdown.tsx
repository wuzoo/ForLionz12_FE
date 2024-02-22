import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styled from "@emotion/styled";

const MDImg = styled.img`
  max-width: 100%;
  height: 400px;
  object-fit: cover;
`;

const MDParagraph = styled.p`
  line-height: 1.3;
  word-break: break-all;
  word-wrap: break-word;
`;

export default function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      children={children}
      components={{
        code: (props: any) => {
          const match = /language-(\w+)/.exec(props.className || "");
          return (
            <SyntaxHighlighter
              children={String(props.children).replace(/\n$/, "")}
              style={oneDark}
              language={match && match[1]}
              customStyle={{
                width: "50vw",
              }}
              showLineNumbers={true}
              wrapLongLines={true}
              wrapLines={true}
              {...props}
            />
          );
        },
        p: (props: any) => {
          return (
            <>
              <MDParagraph>{props.children}</MDParagraph>
            </>
          );
        },
        img: (props: any) => {
          return <MDImg {...props} />;
        },
      }}
    />
  );
}
