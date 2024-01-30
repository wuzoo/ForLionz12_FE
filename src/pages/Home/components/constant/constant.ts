import { theme } from "../../../../theme/theme";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import img1 from "../assets/slider1.png";
import img2 from "../assets/slider2.png";
import img3 from "../assets/slider3.png";

interface IDest {
  [key: string]: string;
}

export const ColorAndImgofItem = {
  first: ["#F4F4F4", one],
  second: ["#EBF0F4", two],
  third: ["#F6EEED", three],
  fourth: ["#FFF8DE", four],
  fifth: ["#F1F1EA", five],
};

export const Destination: IDest = {
  공지사항: "/notification",
  과제: "/homework",
  일정: "/schedule",
  연락처: "/contact",
  "Q&A": "/qna",
};

export const SliderProps = {
  color: [theme.color.skyblue, theme.color.pink, "#EBDCA6"],
  imgs: [img1, img2, img3],
};
