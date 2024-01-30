import MainAndSubtitle from "../../../../components/MainAndSubtitle";
import { SUB_TEXT } from "../../../../constants/text";
import { fixedProps } from "../../Hw-submit";
import RecentUploadSlider from "../../../../components/Slider/RecentUploadSlider";
import Card from "../../../../components/Card/RecentUploadedCard";
import * as Styled from "./style";

function RecentUploader() {
  return (
    <Styled.TotalWrapper>
      <Styled.ContentWrapper>
        <MainAndSubtitle
          main="최근 업로드된 과제"
          sub={SUB_TEXT.recentupload}
          {...fixedProps}
        />
        <Styled.SliderWrapper>
          <RecentUploadSlider>
            <Card name="최주용" content={"1"} link="https://github.com/wuzoo" />
            <Card name="최주용" content={"2"} link="https://github.com/wuzoo" />
            <Card name="최주용" content={"3"} link="https://github.com/wuzoo" />
            <Card name="최주용" content={"4"} link="https://github.com/wuzoo" />
            <Card name="최주용" content={"5"} link="https://github.com/wuzoo" />
            <Card name="최주용" content={"6"} link="https://github.com/wuzoo" />
          </RecentUploadSlider>
        </Styled.SliderWrapper>
      </Styled.ContentWrapper>
    </Styled.TotalWrapper>
  );
}

export default RecentUploader;
