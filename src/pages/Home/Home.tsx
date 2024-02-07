import { css } from "@emotion/react";
import Typo from "../../components/Typo/Typo";
import PageLogo from "../../components/PageLogo/PageLogo";
import * as Styled from "./style";
import FullScreenSlider from "../../components/Slider/FullScreenSlider";
import { TEXT } from "../../constants/text";
import Card from "../../components/Card/SliderCard";
import Category from "./components/category/Category";
import { SliderProps } from "./components/constant/constant";
import OnebyoneText from "./components/onebyonetext/Onebyonetext";
import { useLoginInfoState } from "../../context/LoginUser/User";
import useAllNotification from "../../hooks/api/notification/useAllNotification";

function Home() {
  const userCt = useLoginInfoState();

  const { isloading, data: noticesData } = useAllNotification();
  console.log(noticesData);

  if (isloading) {
    return <p>loading.....</p>;
  }
  const { part, name } = userCt;

  const str = Array.from(TEXT.main);

  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <div>
        <Styled.banner>
          <Styled.textwrapper>
            <Styled.text>
              <Typo color="black" weight="700" fontSize="50">
                <OnebyoneText item={str} />
                &nbsp;
              </Typo>
              <Typo color="darkpink" weight="700" fontSize="50">
                LIONZ
              </Typo>
            </Styled.text>
            <Styled.usergreet
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Typo color="darkblue" weight="600" fontSize="24">
                {part} {name}&nbsp;
              </Typo>
              <Typo color="black" fontSize="24" weight="600">
                {TEXT.greeting}
              </Typo>
            </Styled.usergreet>
          </Styled.textwrapper>
          <PageLogo height="430" width="450" pos="static" type="lion" />
        </Styled.banner>
        <FullScreenSlider>
          {noticesData?.map((item, index) => (
            <Card
              key={item.id}
              part={item.part}
              title={item.title}
              createdAt={item.createdAt}
              content={item.content}
              bgcolor={SliderProps.color[index % 3]}
              logo={SliderProps.imgs[index % 3]}
            />
          ))}
        </FullScreenSlider>
      </div>
      <Category />
    </div>
  );
}

export default Home;
