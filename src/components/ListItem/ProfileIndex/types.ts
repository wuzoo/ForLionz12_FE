import { SetStateAction } from "react";

export interface IItem {
  type: string;
  info: string;
  setInfo: React.Dispatch<SetStateAction<string>>;
  setSubmited: React.Dispatch<SetStateAction<boolean>>;
}
