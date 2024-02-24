import { theme } from "../../../styles/theme/theme";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/4.png";
import four from "../assets/5.png";
import first from "../assets/one.webp";
import second from "../assets/two.webp";
import third from "../assets/three.webp";

interface IDest {
  [key: string]: string;
}

export const ColorAndImgofItem = {
  first: ["#F4F4F4", one],
  second: ["#EBF0F4", two],
  third: ["#FFF8DE", three],
  fourth: ["#F1F1EA", four],
};

export const Destination: IDest = {
  공지사항: "/notification",
  과제: "/homework",
  연락처: "/contact",
  "Q&A": "/qna",
};

export const SliderProps = {
  color: [theme.color.skyblue, theme.color.pink, "#EBDCA6"],
  imgs: [first, second, third],
};
