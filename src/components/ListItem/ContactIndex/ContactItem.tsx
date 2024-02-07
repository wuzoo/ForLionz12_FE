import UserImg from "../../Profile/Profile";
import { IItem } from "./types";
import Typo from "../../Typo/Typo";
import * as Styled from "./style";
import { css } from "@emotion/react";
import { PART_COLOR } from "../../../constants/partcolor";
import instaimg from "../../../assets/icons/insta/img.png";
import githubimg from "../../../assets/icons/github/img.png";
import { theme } from "../../../theme/theme";

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
      <UserImg url={file || null} />
      <Styled.NameAndPart>
        <Typo weight="600">{name}</Typo>
        <Styled.Badge
          css={css`
            background-color: ${theme.color[PART_COLOR[part.toLowerCase()]]};
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
        <Styled.Img
          css={css`
            display: ${instaid ? "" : "none"};
          `}
          onClick={goInstagram}
          src={instaimg}
        />
        <Styled.Img
          css={css`
            display: ${githuburl ? "" : "none"};
          `}
          onClick={goGithub}
          src={githubimg}
        />
      </Styled.SNSbox>
    </Styled.Wrapper>
  );
}

export default Item;
