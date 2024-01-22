import left from "../assets/left.svg";
import right from "../assets/right.svg";
import * as Styled from "../components/style";

export function Next() {
  return <Styled.Right src={right} />;
}

export function Prev() {
  return <Styled.Left src={left} />;
}
