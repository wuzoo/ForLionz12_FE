export interface IPageLogo {
  type: string;
  width?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

export interface IImg {
  width?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
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
