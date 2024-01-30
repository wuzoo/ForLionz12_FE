import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MySlider from "./Slider";
import { ReactNode } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const StyledSlider = styled(MySlider)`
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-slide div {
    cursor: pointer;
  }
  position: relative;
`;

export default function RecentUploadSlider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      css={css`
        width: 100%;
        overflow: hidden;
      `}
    >
      <StyledSlider
        dots={false}
        autoplay={true}
        infinite={true}
        speed={15000}
        slidesToShow={2.4}
        slidesToScroll={1}
        initialSlide={-0.4}
      >
        {children}
      </StyledSlider>
    </div>
  );
}
