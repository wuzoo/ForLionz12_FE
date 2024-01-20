import submit from "../../assets/3dicons/assubmit/girl.svg";
import contact from "../../assets/3dicons/contact/people.svg";
import login from "../../assets/3dicons/login/people.png";
import boy from "../../assets/3dicons/main/smilebody.svg";
import girl from "../../assets/3dicons/main/workinggirl.svg";
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
    mypageboy: mypageboy,
    mypagegirl: mypagegirl,
    notice: notice,
    qna: qna,
    boy: boy,
    girl: girl,
  };

  return <Img {...props} src={pageobj[props.type]} />;
}
