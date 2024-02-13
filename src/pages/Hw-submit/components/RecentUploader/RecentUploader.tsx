import MainAndSubtitle from "../../../../components/MainAndSubtitle";
import { SUB_TEXT } from "../../../../constants/text";
import { fixedProps } from "../../Hw-submit";
import RecentUploadSlider from "../../../../components/Slider/RecentUploadSlider";
import * as Styled from "./style";
import { ReactNode } from "react";

function RecentUploader({
  cnt,
  children,
}: {
  cnt: number;
  children: ReactNode;
}) {
  return (
    <Styled.TotalWrapper>
      <Styled.ContentWrapper>
        <MainAndSubtitle
          main="최근 업로드된 과제"
          sub={SUB_TEXT.recentupload}
          {...fixedProps}
        />
        <Styled.SliderWrapper>
          <RecentUploadSlider cnt={cnt}>{children}</RecentUploadSlider>
        </Styled.SliderWrapper>
      </Styled.ContentWrapper>
    </Styled.TotalWrapper>
  );
}

export default RecentUploader;
