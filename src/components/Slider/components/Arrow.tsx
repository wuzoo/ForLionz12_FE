import left from "../assets/left.svg";
import right from "../assets/right.svg";
import * as Styled from "../components/style";

interface IArrow {
  onClick: (e: React.MouseEvent<HTMLImageElement>) => void;
}

export function Next({ onClick }: IArrow) {
  return <Styled.Right onClick={onClick} src={right} />;
}

export function Prev({ onClick }: IArrow) {
  return <Styled.Left onClick={onClick} src={left} />;
}
