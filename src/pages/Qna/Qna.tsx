import { css } from "@emotion/react";
import Banner from "../../components/Banner/Banner";
import * as Styled from "./style";
import SideBar from "./components/SideBar/SideBar";
import Typo from "../../components/Typo/Typo";
import { useEffect, useRef, useState } from "react";
import Checkbox from "./components/Checkbox/Checkbox";
import QnaItem from "./components/QnaItem/QnaItem";

function Qna() {
  const [category, setCategory] = useState("all");

  const [query, setQuery] = useState<string[]>([]);

  const tmparr = new Array(20).fill(0).map((_, i) => i + 1);

  const match: { [key: string]: string } = {
    all: "All",
    git: "Git & Githubs",
    fe: "Front-End",
    be: "Back-End",
    other: "기타",
  };

  return (
    <Styled.Wrapper>
      <div
        css={css`
          width: 90%;
        `}
      >
        <Banner type="q&a" logowidth="500" logoheight="500" />
      </div>
      <SideBar setCategory={setCategory} />
      <Styled.Title>
        <Typo weight="600" fontSize="30">
          {match[category]}
        </Typo>
      </Styled.Title>
      <Styled.BoxContainer>
        <Checkbox values={query} setClickedValue={setQuery} text="Python" />
        <Checkbox values={query} setClickedValue={setQuery} text="Diango" />
        <Checkbox values={query} setClickedValue={setQuery} text="Docker" />
      </Styled.BoxContainer>
      <Styled.ItemsContainer>
        {tmparr.map((item) => (
          <QnaItem
            key={item}
            title="과제 페이지는 우짬?"
            date={""}
            name="한수현"
          />
        ))}
      </Styled.ItemsContainer>
    </Styled.Wrapper>
  );
}

export default Qna;
