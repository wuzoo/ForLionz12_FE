import { css } from "@emotion/react";
import * as Styled from "./style";

interface ISideBar {
  setCategory: (e: string) => void;
}

function SideBar({ setCategory }: ISideBar) {
  return (
    <div
      css={css`
        position: absolute;
        left: 0px;
        width: 15%;
        max-width: 180px;
      `}
    >
      <Styled.Item onClick={() => setCategory("all")}>All</Styled.Item>
      <Styled.Item onClick={() => setCategory("git")}>
        Git & Githubs
      </Styled.Item>
      <Styled.Item onClick={() => setCategory("fe")}>Front-End</Styled.Item>
      <Styled.Item onClick={() => setCategory("be")}>Back-End</Styled.Item>
      <Styled.Item onClick={() => setCategory("other")}>기타</Styled.Item>
    </div>
  );
}

export default SideBar;
