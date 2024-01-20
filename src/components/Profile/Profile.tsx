import { User } from "./style";
import { IProfile } from "./types";

function Profile(props: IProfile) {
  return <User {...props} />;
}

export default Profile;
