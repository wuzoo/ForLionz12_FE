import submit from "../../assets/3dicons/assubmit/girl.svg";
import contact from "../../assets/3dicons/contact/people.svg";
import login from "../../assets/3dicons/login/people.png";
import book from "../../assets/3dicons/main/book.svg";
import calendar from "../../assets/3dicons/main/calendar.svg";
import call from "../../assets/3dicons/main/call.svg";
import chats from "../../assets/3dicons/main/chats.svg";
import light from "../../assets/3dicons/main/light.svg";
import boy from "../../assets/3dicons/main/person/smilebody.svg";
import girl from "../../assets/3dicons/main/person/workinggirl.svg";
import mypageboy from "../../assets/3dicons/mypage/boy.svg";
import mypagegirl from "../../assets/3dicons/mypage/girl.svg";
import notice from "../../assets/3dicons/notice/people.svg";
import qna from "../../assets/3dicons/qna/baby.svg";
import { Img } from "./style";
import { IPageLogo, IPageobj } from "./types";

export default function PageLogo(props: IPageLogo) {
  const pageobj: IPageobj = {
    submit: submit,
    contact: contact,
    login: login,
    book: book,
    calendar: calendar,
    call: call,
    chats: chats,
    light: light,
    mypageboy: mypageboy,
    mypagegirl: mypagegirl,
    notice: notice,
    qna: qna,
    boy: boy,
    girl: girl,
  };

  return <Img {...props} src={pageobj[props.type]} />;
}
