import { User } from "./style";
import { IProfile } from "./types";
import user from "../../assets/icons/user/defaultUser.svg";

export default function Profile(props: IProfile) {
  return <User src={props.url || user} {...props} />;
}
