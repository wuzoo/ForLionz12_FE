import MainAndSubtitle from "../../components/MainAndSubtitle";
import * as Styled from "./style";
import HwCard from "../../components/Card/HwCard";
import FullScreenSlider from "../../components/Slider/FullScreenSlider";
import PartToggle from "../../components/PartToggle/PartToggle";
import Hwdetail from "./Hw-detail/Hwdetail";
import { AnimatePresence } from "framer-motion";
import { Suspense, useState } from "react";
import getFormedDate from "../../utils/getFormedDate";
import useAllAssignment from "../../hooks/api/assignment/useAllAssignment";
import { theme } from "../../theme/theme";
import HwSliderCard from "../../components/Card/HwSliderCard";
import usePartAssignment from "../../hooks/api/assignment/usePartAssignment";
import AdminUploadBtn from "../../components/Button/AdminUploadBtn.tsx/index.tsx";
import { css } from "@emotion/react";
import { SUB_TEXT, TEXT } from "../../constants/text.ts";

function HwList() {
  const [clickedId, setClickedId] = useState(0);
  const [selectedPart, setSelectedPart] = useState("all");

  const part = localStorage.getItem("part");
  const id = localStorage.getItem("id");

  if (!part || !id) {
    throw new Error("has no localstorage value");
  }

  const ifStaff_partAll = part !== "STAFF" ? part : "ALL";

  const { data, error } = useAllAssignment();
  const { error: myPartError, data: myAssignments } =
    usePartAssignment(ifStaff_partAll);

  const filteredPartData = data?.filter(
    (item) => item.part === selectedPart.toUpperCase()
  );

  if (error === "rejected" || myPartError === "rejected") {
    throw new Error("조회 에러");
  }

  return (
    <Styled.Wrapper>
      <div
        css={css`
          display: flex;
          align-items: end;
          justify-content: space-between;
        `}
      >
        <MainAndSubtitle
          main="My Assignments"
          sub={TEXT.HW_LIST}
          fontsizes={["40", "18"]}
          gap="10"
          colors={["black", "darkgray"]}
        />
        <AdminUploadBtn id={id} type="assignment" />
      </div>
      <Styled.Margin height="40px" />
      <Styled.FullWidthContainer>
        <FullScreenSlider>
          {myAssignments?.map((item, index) => (
            <HwSliderCard
              key={item.id}
              onClick={() => setClickedId(item.id)}
              index={index}
              title={item.title}
              content={item.content}
              bgcolor={theme.color.skyblue}
              expireAt={item.expireAt}
              part={item.part}
            />
          ))}
        </FullScreenSlider>
      </Styled.FullWidthContainer>
      <Styled.Margin height="460px" />
      <Styled.AlignWrapper>
        <MainAndSubtitle
          main="다른 파트의 과제"
          sub={SUB_TEXT.HW_OTHER_PART}
          fontsizes={["37", "18"]}
          gap="10"
          colors={["black", "darkgray"]}
        />
        <PartToggle part={selectedPart} setPart={setSelectedPart} />
      </Styled.AlignWrapper>

      <Styled.OtherHWContainer>
        <Suspense fallback={<p>loading...</p>}>
          {filteredPartData?.map((item) => (
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
        </Suspense>
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
