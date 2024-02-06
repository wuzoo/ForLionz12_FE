import submit from "../../assets/3dicons/assubmit/girl.svg";
import contact from "../../assets/3dicons/contact/people.svg";
import login from "../../assets/3dicons/login/people.png";
import notice from "../../assets/3dicons/notice/people.svg";
import qna from "../../assets/3dicons/qna/baby.svg";
import lion from "../../assets/3dicons/main/lion.png";
import { Img } from "./style";
import { IPageLogo, IPageobj } from "./types";

export default function PageLogo(props: IPageLogo) {
  const pageobj: IPageobj = {
    assignsubmit: submit,
    contact: contact,
    login: login,
    notification: notice,
    "q&a": qna,
    lion: lion,
  };

  return <Img {...props} src={pageobj[props.type]} />;
}
