import { css } from "@emotion/react";
import MainAndSubtitle from "../../components/MainAndSubtitle";
import * as Styled from "./style";
import HwCard from "../../components/Card/HwCard";
import FullScreenSlider from "../../components/Slider/FullScreenSlider";
import PartToggle from "../../components/PartToggle/PartToggle";
import Hwdetail from "./Hw-detail/Hwdetail";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import getFormedDate from "../../utils/getFormedDate";
import useAllAssignment from "../../hooks/api/assignment/useAllAssignment";

function HwList() {
  const { data, isloading, error } = useAllAssignment();

  const [clickedId, setClickedId] = useState(0);
  const [selectedPart, setSelectedPart] = useState("fe");

  const filteredData = data?.filter(
    (item) => item.part === selectedPart.toUpperCase()
  );

  if (isloading) console.log("로딩 중");
  if (error === "rejected") {
    throw new Error("조회 에러");
  }

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
        <PartToggle part={selectedPart} setPart={setSelectedPart} />
      </Styled.AlignWrapper>

      <Styled.OtherHWContainer>
        {filteredData?.map((item) => (
          <HwCard
            category={item.category}
            layoutId={item.id + ""}
            onClick={() => setClickedId(item.id)}
            key={item.id}
            part={item.part.toLowerCase()}
            title={item.title}
            createdAt={getFormedDate(item.createdAt)}
          />
        ))}
      </Styled.OtherHWContainer>
      <AnimatePresence>
        {clickedId !== 0 && (
          <Hwdetail setClickedId={setClickedId} clickedId={clickedId} />
        )}
      </AnimatePresence>
    </Styled.Wrapper>
  );
}

export default HwList;
