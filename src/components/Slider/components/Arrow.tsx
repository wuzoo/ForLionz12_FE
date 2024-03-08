import Left from "../assets/left.svg?react";
import Right from "../assets/right.svg?react";
import * as Styled from "../components/style";

interface IArrow {
  onClick: (e: React.MouseEvent<HTMLImageElement>) => void;
  isDark: boolean;
}

export function Next({ onClick, isDark }: IArrow) {
  return (
    <Styled.Right onClick={onClick}>
      <Right fill={isDark ? "white" : "black"} />
    </Styled.Right>
  );
}

export function Prev({ onClick, isDark }: IArrow) {
  return (
    <Styled.Left onClick={onClick}>
      <Left fill={isDark ? "white" : "black"} />
    </Styled.Left>
  );
}
