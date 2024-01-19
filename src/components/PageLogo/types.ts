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
  submit: string;
  contact: string;
  login: string;
  book: string;
  calendar: string;
  call: string;
  chats: string;
  light: string;
  mypageboy: string;
  mypagegirl: string;
  notice: string;
  qna: string;
}
