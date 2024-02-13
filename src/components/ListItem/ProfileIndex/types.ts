import { SetStateAction } from "react";

export interface IItem {
  type: string;
  setSubmited: React.Dispatch<SetStateAction<boolean>>;
}
