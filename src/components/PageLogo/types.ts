export interface IPageLogo extends ILogo {
  type: string;
}

export interface ILogo {
  pos?: string;
  height?: string;
  zindex?: string;
  width?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  padbottom?: string;
  padleft?: string;
  padright?: string;
  padtop?: string;
}

export interface IPageobj {
  [key: string]: string;
  assignsubmit: string;
  contact: string;
  login: string;
  notification: string;
  "q&a": string;
  boy: string;
  girl: string;
  lion: string;
}
