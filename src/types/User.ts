export interface IUserInfo {
  id: string;
  email: string;
  name: string;
  part: string;
  imageUrl: string;
  introduction: string;
  githubAddress: string;
  instagramId: string;
}

export interface IMembers extends Array<IUserInfo> {
  members: IUserInfo[];
}
