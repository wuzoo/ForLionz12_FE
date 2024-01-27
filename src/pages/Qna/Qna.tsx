import { css } from "@emotion/react";
import Banner from "../../components/Banner/Banner";
import * as Styled from "./style";
import SideBar from "./components/SideBar/SideBar";
import Typo from "../../components/Typo/Typo";
import { useState } from "react";
import Checkbox from "./components/Checkbox/Checkbox";
import QnaItem from "./components/QnaItem/QnaItem";
import { CATEGORY_TEXT } from "./components/constants/text";

function Qna() {
  const [category, setCategory] = useState("all");

  const [query, setQuery] = useState<string[]>([]);

  const day = new Date().getTime();
  const krDay = day + 1000 * 3600 * 9;
  const str = new Date(krDay).toISOString().slice(0, 19).split("T");

  const tmparr = new Array(20).fill(0).map((_, i) => i + 1);

  return (
    <Styled.Wrapper>
      <div
        css={css`
          width: 100%;
        `}
      >
        <Banner type="q&a" logowidth="500" logoheight="500" />
      </div>
      <SideBar currentCategory={category} setCategory={setCategory} />
      <Styled.Title>
        <Typo weight="600" fontSize="30">
          {CATEGORY_TEXT[category]}
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
            date={str[0] + "  " + str[1]}
            name="한수현"
          />
        ))}
      </Styled.ItemsContainer>
    </Styled.Wrapper>
  );
}

export default Qna;
