import submit from "../../assets/3dicons/assubmit/girl.svg";
import contact from "../../assets/3dicons/contact/people.svg";
import login from "../../assets/3dicons/login/people.png";
import boy from "../../assets/3dicons/main/smilebody.svg";
import girl from "../../assets/3dicons/main/workinggirl.svg";
import notice from "../../assets/3dicons/notice/people.svg";
import qna from "../../assets/3dicons/qna/baby.svg";
import { Img } from "./style";
import { IPageLogo, IPageobj } from "./types";

export default function PageLogo(props: IPageLogo) {
  const pageobj: IPageobj = {
    assignsubmit: submit,
    contact: contact,
    login: login,
    notification: notice,
    qna: qna,
    boy: boy,
    girl: girl,
  };

  return <Img {...props} src={pageobj[props.type]} />;
}
