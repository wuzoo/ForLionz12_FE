import UserImg from "../../../components/Profile/Profile";
import { IItem } from "./types";
import img from "../../../assets/imgs/tmpprofile.jpeg";
import Typo from "../../../components/Typo/Typo";
import * as Styled from "./style";
import { css } from "@emotion/react";
import { PART_COLOR } from "../../../constants/partcolor";
import instaimg from "../../../assets/icons/insta/img.png";
import githubimg from "../../../assets/icons/github/img.png";

function Item({ file, name, part, introduce, instaid, githuburl }: IItem) {
  const goGithub = () => {
    if (githuburl) {
      window.location.href = githuburl;
    }
  };

  const goInstagram = () => {
    if (instaid) {
      window.location.href = `https://www.instagram.com/${instaid}/`;
    }
  };

  return (
    <Styled.Wrapper>
      <UserImg url={img} />
      <Styled.NameAndPart>
        <Typo weight="600">{name}</Typo>
        <Styled.Badge
          css={css`
            background-color: ${PART_COLOR[part.toLowerCase()]};
          `}
        >
          <Typo color="white" weight="600">
            {part.toUpperCase()}
          </Typo>
        </Styled.Badge>
      </Styled.NameAndPart>
      <Styled.Introduce>
        <Typo color="darkgray" weight="600" fontSize="16">
          {introduce}
        </Typo>
      </Styled.Introduce>
      <Styled.SNSbox>
        <Styled.Img onClick={goInstagram} src={instaimg} />
        <Styled.Img onClick={goGithub} src={githubimg} />
      </Styled.SNSbox>
    </Styled.Wrapper>
  );
}

export default Item;
