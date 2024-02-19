export interface IQna {
  questionId: number;
  memberId: number;
  title: string;
  content: string;
  createdAt: string;
  memberImageUrl: string;
  name: string;
  childTags: string[];
  postImageUrls: string[];
}

export type ChildtagType = {
  childTagId: number;
  name: string;
};

export type ParenttagType = {
  parentTagId: number;
  name: string;
};

export interface ITag {
  childTags: ChildtagType[];
  questionPosts: IQna[];
}
