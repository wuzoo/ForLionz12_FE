import { css } from "@emotion/react";
import * as Styled from "./style";
import { useEffect, useRef } from "react";

interface ISideBar {
  setCategory: (e: string) => void;
}

function SideBar({ setCategory }: ISideBar) {
  const ref = useRef<HTMLDivElement>(null);

  const SidebarControl = () => {
    console.log(window.innerHeight);
    console.log(document.documentElement.clientHeight);

    const origin_y = ref.current?.getBoundingClientRect().top;

    const pos_y = window.scrollY;
    const obj = ref.current?.style;

    if (!obj) return;
    if (!origin_y) return;

    if (pos_y > (window.innerHeight * 7) / 10) {
      ref.current.style.position = "fixed";
      ref.current.style.top = "80px";
    } else {
      ref.current.style.position = "absolute";
      ref.current.style.left = "0";
      ref.current.style.top = "70vh";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", SidebarControl);

    return () => window.removeEventListener("scroll", SidebarControl);
  }, []);

  return (
    <div
      ref={ref}
      css={css`
        position: absolute;
        left: 0;
        width: 10%;
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
