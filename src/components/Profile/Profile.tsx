import { User } from "./style";
import { IProfile } from "./types";
import user from "../../assets/imgs/defaultUser.svg";

export default function Profile(props: IProfile) {
  return <User src={props.url || user} {...props} />;
}
