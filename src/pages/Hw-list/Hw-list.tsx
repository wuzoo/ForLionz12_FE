import { css } from "@emotion/react";
import MainAndSubtitle from "../../components/MainAndSubtitle";
import * as Styled from "./style";
import HwCard from "../../components/Card/HwCard";
import FullScreenSlider from "../../components/Slider/FullScreenSlider";
import PartToggle from "../../components/PartToggle/PartToggle";
import useSelectedPart from "../../hooks/useSelectedPart";
import Hwdetail from "../Hw-detail/Hwdetail";
import { useMatch, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function HwList() {
  const [part, feclick, beclick, staffclick] = useSelectedPart("notice");

  const tmp = new Array(6).fill(0).map((_, i) => {
    return { part: "fe", id: i + 1 };
  });

  const detailMatch = useMatch("/homework/:hwid");

  const navigate = useNavigate();

  return (
    <Styled.Wrapper>
      <MainAndSubtitle
        main="My Assignments"
        sub="나의 과제 목록을 확인하세요"
        fontsizes={["40", "18"]}
        gap="10"
        colors={["black", "darkgray"]}
      />
      <Styled.Margin height="40px" />
      <Styled.FullWidthContainer>
        <FullScreenSlider>
          <div
            css={css`
              background-color: lightblue;
              height: 400px;
            `}
          >
            1
          </div>
        </FullScreenSlider>
      </Styled.FullWidthContainer>
      <Styled.Margin height="460px" />
      <Styled.AlignWrapper>
        <MainAndSubtitle
          main="다른 파트의 과제"
          sub="다른 파트의 과제들을 구경할 수 있어요."
          fontsizes={["37", "18"]}
          gap="10"
          colors={["black", "darkgray"]}
        />
        <PartToggle
          part={part}
          showfe={feclick}
          showbe={beclick}
          showother={staffclick}
          flag={true}
        />
      </Styled.AlignWrapper>

      <Styled.OtherHWContainer>
        {tmp.map((item) => (
          <HwCard
            layoutId={item.id + ""}
            onClick={() => navigate(`/homework/${item.id}`)}
            key={item.id}
            part={item.part.toLowerCase()}
          />
        ))}
      </Styled.OtherHWContainer>
      <AnimatePresence>
        {detailMatch && <Hwdetail clickedId={detailMatch?.params.hwid} />}
      </AnimatePresence>
    </Styled.Wrapper>
  );
}

export default HwList;
