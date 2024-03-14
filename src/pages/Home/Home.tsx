import { css } from "@emotion/react";
import Typo from "../../components/Typo/Typo";
import PageLogo from "../../components/PageLogo/PageLogo";
import * as Styled from "./style";
import FullScreenSlider from "../../components/Slider/FullScreenSlider";
import { TEXT } from "../../constants/text";
import Card from "../../components/Card/SliderCard";
import Category from "./components/category/Category";
import { SliderProps } from "./constant/constant";
import { MemorizedOnebyoneText } from "./components/onebyonetext/Onebyonetext";
import { useLoginInfoState } from "../../context/LoginUser/User";
import { useAllNotification } from "../../hooks";
import { ERROR } from "../../constants/message";
import { compare } from "../../utils/date";

function Home() {
  const userCt = useLoginInfoState();
  const { part, name } = userCt;

  const { data: noticesData, error } = useAllNotification();
  const recentSortData = noticesData?.sort((a, b) => compare(a, b));

  if (error === "rejected") throw new Error(ERROR.ALL_NOTICE);

  return (
    <Styled.Wrapper>
      <div
        css={css`
          position: relative;
        `}
      >
        <Styled.Banner>
          <Styled.Textwrapper>
            <Styled.Text>
              <Typo weight="700" fontSize="50">
                <MemorizedOnebyoneText item={TEXT.HOME_MAIN_TEXT.split("")} />
                &nbsp;
              </Typo>
              <Typo color="darkpink" weight="700" fontSize="50">
                LIONZ
              </Typo>
            </Styled.Text>
            <Styled.Usergreet
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Typo color="darkblue" weight="600" fontSize="24">
                {part}&nbsp; {name}&nbsp;
              </Typo>
              <Typo fontSize="24" weight="600">
                {TEXT.HOME_GREETING}
              </Typo>
            </Styled.Usergreet>
          </Styled.Textwrapper>
          <PageLogo height="400" width="400" type="LION" />
        </Styled.Banner>
        <FullScreenSlider>
          {recentSortData?.map((item, index) => (
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
    </Styled.Wrapper>
  );
}

export default Home;
