import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { ISlider } from "./types";

const StyledSlider = styled(Slider)`
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

export default function MySlider({
  children,
  dots,
  infinite,
  autoplay,
}: ISlider) {
  const setting: Settings = {
    dots: dots,
    infinite: infinite,
    arrows: false,
    autoplay: autoplay,
    // slidesToShow: 1,
    // slidesToScroll: 1,
  };

  return <StyledSlider {...setting}>{children}</StyledSlider>;
}
