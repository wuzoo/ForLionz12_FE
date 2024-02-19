import { SetStateAction } from "react";

export interface IForm {
  isSubmitted: boolean;
  onSubmit: React.Dispatch<SetStateAction<boolean>>;
  description: string;
  assignmentLink: string;
  id: string;
  refetch: () => void;
}

export interface IStatus {
  isSubmitted: boolean;
  id: string;
  createdAt: string;
  description: string;
  onModify: React.Dispatch<SetStateAction<boolean>>;
  link: string;
}
