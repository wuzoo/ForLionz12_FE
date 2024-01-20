import { ReactNode } from "react";

export interface IBtn extends IBtnStyle {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

export interface IBtnStyle {
  width?: string;
  height?: string;
  bgcolor?: string;
  color?: string;
  radius?: string;
}
