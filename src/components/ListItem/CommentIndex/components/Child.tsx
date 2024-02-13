import Profile from "../../../Profile/Profile";
import user from "../../../../assets/imgs/defaultUser.svg";
import * as Styled from "./style";
import Typo from "../../../Typo/Typo";
import getFormedDate from "../../../../utils/getFormedDate";

interface IChild {
  url: string;
  name: string;
  createdAt: string;
  content: string;
  part: string;
}

function Item({ url, name, createdAt, content, part }: IChild) {
  return (
    <Styled.Wrapper>
      <Styled.Info>
        <Profile url={url || user} size="60" />
        <Styled.NameAndDate>
          <Styled.Name>
            <Typo>
              {name} <Typo>({part})</Typo>
            </Typo>
          </Styled.Name>
          <Styled.Date>
            <Typo fontSize="14" color="darkgray" weight="500">
              {getFormedDate(createdAt)}
            </Typo>
          </Styled.Date>
        </Styled.NameAndDate>
      </Styled.Info>

      <Styled.Comment>
        <Typo weight="500">{content}</Typo>
      </Styled.Comment>
    </Styled.Wrapper>
  );
}

export default Item;
