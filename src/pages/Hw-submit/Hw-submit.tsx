import Banner from "../../components/Banner/Banner";
import MainAndSubtitle from "../../components/MainAndSubtitle";
import { SUB_TEXT } from "../../constants/text";
import * as Styled from "./style";
import SubmitItem from "../../components/ListItem/As-submitIndex/SubmitItem";
import Margin from "./components/ContentGap/ContentGap";
import CurrentSubmit from "./components/CurrentSubmittedText/CurrentSubmitted";
import AssignStatus from "./components/AssignStatus/AssignStatus";
import AssignForm from "./components/AssignForm/AssignForm";
import { useState } from "react";
import RecentUploader from "./components/RecentUploader/RecentUploader";

export const fixedProps = {
  fontsizes: ["30", "14"],
  colors: ["black", "darkgray"],
  gap: "4",
};

function HwSubmit() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Styled.Wrapper>
      <Banner type="assignsubmit" logowidth="500" logoheight="500" />

      <RecentUploader />

      <Margin gap="100" />

      <AssignForm isSubmitted={isSubmitted} />
      <AssignStatus isSubmitted={isSubmitted} date="2024-03-03 16:00:00" />

      <Margin gap="80" />

      <div css={Styled.AlignStyle}>
        <Styled.OtherHwWrapper>
          <MainAndSubtitle
            main="다른 사람의 과제"
            sub={SUB_TEXT.hwother}
            {...fixedProps}
          />

          <CurrentSubmit count={3} />
        </Styled.OtherHwWrapper>
        <Styled.List>
          <SubmitItem
            link="https://github.com/wuzoo"
            name="최주용"
            date="2024-03-03 16:00:00"
          />
          <SubmitItem
            link="https://github.com/wuzoo"
            name="최주용"
            date="2024-03-03 16:00:00"
          />
        </Styled.List>
      </div>
    </Styled.Wrapper>
  );
}

export default HwSubmit;
