import { sliderwrapper } from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MySlider from "./Slider";
import { ReactNode } from "react";
import styled from "@emotion/styled";

const StyledSlider = styled(MySlider)`
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  position: relative;
`;

export default function FullScreenSlider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div css={sliderwrapper}>
      <StyledSlider
        arrows={true}
        dots={true}
        autoplay={true}
        infinite={true}
        speed={500}
      >
        {children}
      </StyledSlider>
    </div>
  );
}
