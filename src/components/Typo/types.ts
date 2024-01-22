import { ReactNode } from "react";

export interface ITypo {
  fontSize?: string | "default";
  color?: string | "default";
  weight?: string | "default";
  children: ReactNode;
}
