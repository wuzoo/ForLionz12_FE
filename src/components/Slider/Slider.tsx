import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ISlider } from "./types";

export default function MySlider({
  children,
  dots,
  infinite,
  autoplay,
  slidesToShow,
  slidesToScroll,
}: ISlider) {
  const setting: Settings = {
    dots: dots,
    infinite: infinite,
    arrows: false,
    autoplay: autoplay,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
  };

  return <Slider {...setting}>{children}</Slider>;
}
