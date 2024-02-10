export interface IPageLogo extends ILogo {
  type: string;
}

export interface ILogo {
  height?: string;
  width?: string;
}

export interface IPageobj {
  [key: string]: string;
  assignsubmit: string;
  contact: string;
  login: string;
  notification: string;
  "q&a": string;
  lion: string;
}
