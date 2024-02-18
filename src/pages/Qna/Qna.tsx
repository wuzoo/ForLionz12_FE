import { css } from "@emotion/react";
import Banner from "../../components/Banner/Banner";
import * as Styled from "./style";
import SideBar from "./components/SideBar/SideBar";
import Typo from "../../components/Typo/Typo";
import { useState } from "react";
import Checkbox from "./components/Checkbox/Checkbox";
import QnaItem from "../../components/ListItem/QnaIndex/QnaItem";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useSelectedData, useTags } from "../../hooks";
import { compare } from "../../utils/sortByCreatedAt";

function Qna() {
  const [category, setCategory] = useState<number>(0);

  const { data: tags } = useTags();
  const navigate = useNavigate();

  const title = tags?.find((item) => item.parentTagId === category)?.name;
  const { childTags, data, query, setQuery } = useSelectedData(category);

  const sortedByCreatedAt = data?.sort((a, b) => compare(a, b));

  if (!tags) {
    return;
  }

  return (
    <Styled.Wrapper>
      <div
        css={css`
          width: 100%;
        `}
      >
        <Banner type="Q&A" logowidth="500" logoheight="500" />
      </div>
      <SideBar
        tags={tags}
        currentCategory={category}
        setCategory={setCategory}
      />
      <Styled.Title>
        <Typo weight="600" fontSize="30">
          {title}
        </Typo>
      </Styled.Title>
      <Styled.TagsAndBtnWrapper>
        <Styled.BoxContainer>
          {childTags?.map((item) => (
            <Checkbox
              key={item.childTagId}
              id={item.childTagId}
              values={query}
              setClickedValue={setQuery}
              text={item.name}
            />
          ))}
        </Styled.BoxContainer>
        <Button
          onClick={() => navigate("upload")}
          bgcolor="white"
          color="darkblue"
        >
          작성하기
        </Button>
      </Styled.TagsAndBtnWrapper>
      <Styled.ItemsContainer>
        {sortedByCreatedAt?.map((item) => (
          <QnaItem
            key={item.questionId}
            onClick={() => {
              navigate(`${item.questionId}`);
            }}
            title={item.title}
            date={item.createdAt}
            url={item.memberImageUrl}
            name={item.name}
          />
        ))}
      </Styled.ItemsContainer>
    </Styled.Wrapper>
  );
}

export default Qna;
