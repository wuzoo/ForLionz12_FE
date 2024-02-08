import submit from "../../assets/3dicons/assubmit/girl.webp";
import contact from "../../assets/3dicons/contact/people.webp";
import login from "../../assets/3dicons/login/people.webp";
import notice from "../../assets/3dicons/notice/people.webp";
import qna from "../../assets/3dicons/qna/baby.webp";
import lion from "../../assets/3dicons/main/lion.webp";
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
