import MainAndSubtitle from "../../components/MainAndSubtitle";
import * as Styled from "./style";
import HwCard from "../../components/Card/HwCard";
import FullScreenSlider from "../../components/Slider/FullScreenSlider";
import PartToggle from "../../components/PartToggle/PartToggle";
import Hwdetail from "./Hw-detail/detailModal.tsx";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import getFormedDate from "../../utils/getFormedDate";
import { useAllAssignment, usePartAssignment } from "../../hooks";
import { theme } from "../../styles/theme/theme.ts";
import HwSliderCard from "../../components/Card/HwSliderCard";
import AdminUploadBtn from "../../components/Button/AdminUploadBtn.tsx/index.tsx";
import { css } from "@emotion/react";
import { SUB_TEXT, TEXT } from "../../constants/text.ts";
import { ERROR } from "../../constants/message.ts";
import { compare } from "../../utils/sortByCreatedAt.ts";
import { useMatch, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Typo from "../../components/Typo/Typo.tsx";

function HwList() {
  const [selectedPart, setSelectedPart] = useState("all");

  const part = localStorage.getItem("part");
  const id = localStorage.getItem("id");

  if (!part) throw new Error(ERROR.NO_PART);
  if (!id) throw new Error(ERROR.NO_ID);

  const ifStaff_partAll = part !== "STAFF" ? part : "ALL";

  const { data, error } = useAllAssignment();
  const { error: myPartError, data: myAssignments } =
    usePartAssignment(ifStaff_partAll);

  const filteredPartData = data?.filter(
    (item) => item.part === selectedPart.toUpperCase()
  );
  const navigate = useNavigate();
  const DetailMatch = useMatch("/homework/:id");
  const sortByRecentCreatedAt = myAssignments?.sort((a, b) => compare(a, b));

  if (error === "rejected") throw new Error(ERROR.ALL_ASSIGNMENT);
  if (myPartError === "rejected") throw new Error(ERROR.PART_ASSIGNMENT);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const handleKeyPress = (e: KeyboardEvent) => {
    const { key } = e;

    if (key === "Escape") {
      navigate("/homework", {
        state: {
          history: "detail",
        },
      });
    }
  };

  const handleExit = (e: React.MouseEvent<HTMLDivElement>) => {
    const { target, currentTarget } = e;
    if (target == currentTarget) {
      navigate("/homework", {
        state: {
          history: "detail",
        },
      });
    }
  };

  return (
    <Styled.Wrapper>
      <div
        css={css`
          ${theme.flexRow("space-between", "end")}
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
        {sortByRecentCreatedAt?.length === 0 && (
          <div
            css={css`
              ${theme.flexRow("center", "center")}
              padding-top: 20px;
            `}
          >
            <Typo color="darkgray">
              업로드된 {part.toUpperCase()} 과제가 없어요
            </Typo>
          </div>
        )}
        <FullScreenSlider>
          {sortByRecentCreatedAt?.map((item, index) => (
            <HwSliderCard
              key={item.id}
              onClick={() => navigate(`detail/${item.id}`)}
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
        {filteredPartData?.map((item) => (
          <HwCard
            category={item.category}
            layoutId={item.id + ""}
            onClick={() => navigate(`${item.id}`)}
            key={item.id}
            part={item.part.toLowerCase()}
            title={item.title}
            createdAt={getFormedDate(item.createdAt)}
          />
        ))}
      </Styled.OtherHWContainer>

      <AnimatePresence>
        {DetailMatch?.params.id && (
          <>
            <Styled.Overlay
              onClick={handleExit}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div css={Styled.Modal} layoutId={DetailMatch?.params.id}>
              <Hwdetail clickedId={+DetailMatch?.params.id} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Styled.Wrapper>
  );
}

export default HwList;
