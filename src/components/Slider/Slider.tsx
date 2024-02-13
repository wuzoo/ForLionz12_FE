import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ISlider } from "./types";
import { Next, Prev } from "./components/Arrow";

export default function MySlider({
  children,
  dots,
  infinite,
  autoplay,
  slidesToShow,
  slidesToScroll,
  initialSlide,
  speed,
  arrows,
  autoplaySpeed,
}: ISlider) {
  const setting: Settings = {
    dots: dots,
    infinite: infinite,
    autoplay: autoplay,
    arrows: arrows || false,
    speed: speed || 500,
    slidesToShow: slidesToShow || 1,
    slidesToScroll: slidesToScroll || 1,
    initialSlide: initialSlide || 0,
    autoplaySpeed: autoplaySpeed || 5000,
    prevArrow: <Prev onClick={Slider.prototype.slickPrev} />,
    nextArrow: <Next onClick={Slider.prototype.slickNext} />,
  };

  return <Slider {...setting}>{children}</Slider>;
}
