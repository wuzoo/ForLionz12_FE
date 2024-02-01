export interface IAssignment {
  id: number;
  title: string;
  content: string;
  part: string;
  createdAt: string;
}

export interface IAssignmentResult extends Array<IAssignment> {
  assignments: IAssignment[];
}
