import { sliderwrapper } from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MySlider from "./Slider";
import { Next, Prev } from "./components/Arrow";
import { ReactNode } from "react";

export default function FullScreenSlider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div css={sliderwrapper}>
      <Next />
      <MySlider dots={true} autoplay={true} infinite={true} speed={500}>
        {children}
      </MySlider>
      <Prev />
    </div>
  );
}
