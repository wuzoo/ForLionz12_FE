import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ISlider } from "./types";

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

  return <Slider {...setting}>{children}</Slider>;
}
