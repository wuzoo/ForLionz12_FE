import { User } from "./style";
import { IProfile } from "./types";
import user from "../../assets/imgs/defaultUser.svg";

function Profile(props: IProfile) {
  return <User src={props.url || user} {...props} />;
}

export default Profile;
