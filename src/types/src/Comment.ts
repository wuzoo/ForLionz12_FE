export interface IComment {
  commentId: number;
  name: string;
  memberImageUrl: string;
  part: string;
  createdAt: string;
  content: string;
  memberId: number;
  update: () => void;
}

export interface IChild {
  childCommentId: number;
  name: string;
  memberImageUrl: string;
  part: string;
  createdAt: string;
  content: string;
  memberId: number;
  update: () => void;
}
