import { css } from "@emotion/react";
import Typo from "../../components/Typo/Typo";
import PageLogo from "../../components/PageLogo/PageLogo";
import * as Styled from "./style";
import FullScreenSlider from "../../components/Slider/FullScreenSlider";
import { TEXT } from "../../constants/text";
import Card from "../../components/Card/SliderCard";
import Category from "./components/category/Category";
import { SliderProps } from "./components/constant/constant";

function Home() {
  const tmpData = [
    {
      id: 1,
      main: "중앙 해커톤",
      sub: "안녕하세요 이번에는 저번에는 이렇구 저렇구 하이하이 지금 정석에는 많은 사람들이 있다. 이 사람들은 무얼 하는 사람들일까...",
      part: "FE",
      date: "2023-04-18 18:00:00",
    },
    {
      id: 2,
      main: "인하대 해커톤",
      sub: "안녕하세요 이번에는 저번에는 이렇구 저렇구 하이하이 지금 정석에는 많은 사람들이 있다. 이 사람들은 무얼 하는 사람들일까...",
      part: "BE",
      date: "2023-04-18 18:00:00",
    },
    {
      id: 3,
      main: "종강총회 종강총회 종강총회 종강총회",
      sub: "안녕하세요 이번에는 저번에는 이렇구 저렇구 하이하이 지금 정석에는 많은 사람들이 있다. 이 사람들은 무얼 하는 사람들일까...",
      part: "FE",
      date: "2023-04-18 18:00:00",
    },
    {
      id: 4,
      main: "아기사자 팀워크 다지기 훌룰랄라 릴리",
      sub: "안녕하세요 이번에는 저번에는 이렇구 저렇구 하이하이",
      part: "FE",
      date: "2023-04-18 18:00:00",
    },
  ];

  // const data = useNoticeData();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        margin: 80px 0px;
      `}
    >
      <Styled.banner>
        <Styled.textwrapper>
          <Styled.text>
            <Typo color="black" weight="700" fontSize="50">
              {TEXT.main}&nbsp;
            </Typo>
            <Typo color="darkpink" weight="700" fontSize="50">
              LIONZ
            </Typo>
          </Styled.text>
          <h3>
            <Typo color="darkblue" weight="600" fontSize="20">
              FE 최주용&nbsp;
            </Typo>
            <Typo color="black" fontSize="20" weight="600">
              {TEXT.greeting}
            </Typo>
          </h3>
        </Styled.textwrapper>
        <PageLogo height="300" width="280" pos="static" type="boy" />
      </Styled.banner>
      <FullScreenSlider>
        {tmpData.map((item, index) => (
          <Card
            {...item}
            bgcolor={SliderProps.color[index % 3]}
            logo={SliderProps.imgs[index % 3]}
          />
        ))}
      </FullScreenSlider>
      <Category />
    </div>
  );
}

export default Home;
