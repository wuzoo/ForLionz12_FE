import UserImg from "../../Profile/Profile";
import { IItem } from "./types";
import Typo from "../../Typo/Typo";
import * as Styled from "./style";
import { css } from "@emotion/react";
import { PART_COLOR } from "../../../constants/partcolor";
import instaimg from "../../../assets/icons/insta/img.png";
import githubimg from "../../../assets/icons/github/img.png";
import { theme } from "../../../theme/theme";
import { useState } from "react";

function Item({ file, name, part, introduce, instaid, githuburl }: IItem) {
  const [clicked, setClicked] = useState(false);

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
    <Styled.Wrapper onClick={() => setClicked((prev) => !prev)}>
      <UserImg
        radius={clicked ? "20px" : ""}
        url={file || null}
        size={clicked ? "200" : undefined}
      />
      <Styled.NameAndPart
        css={css`
          flex-direction: ${clicked ? "column" : "row"};
        `}
      >
        <Styled.Name>
          <Typo weight="600">{name}</Typo>
        </Styled.Name>
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
      <Styled.Introduce
        css={css`
          overflow: ${clicked ? "visible" : "hidden"};
        `}
      >
        <Typo color="darkgray" weight="500" fontSize="16">
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
