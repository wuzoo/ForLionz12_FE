import { sliderwrapper } from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MySlider from "./Slider";
import { Next, Prev } from "./components/Arrow";
import { ReactNode } from "react";
import styled from "@emotion/styled";

const StyledSlider = styled(MySlider)`
  position: relative;
  width: 100%;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-slide div {
    cursor: pointer;
  }
`;

export default function FullScreenSlider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div css={sliderwrapper}>
      <Next />
      <StyledSlider dots={true} autoplay={true} infinite={true} speed={500}>
        {children}
      </StyledSlider>
      <Prev />
    </div>
  );
}
