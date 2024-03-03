import UserImg from "../../Profile/Profile";
import { IItem } from "./types";
import Typo from "../../Typo/Typo";
import * as Styled from "./style";
import { css } from "@emotion/react";
import { PART_COLOR } from "../../../constants/partcolor";
import instaimg from "../../../assets/icons/insta/img.png";
import insta_dark from "../../../assets/icons/insta/contact_dark.png";
import githubimg from "../../../assets/icons/github/img.png";
import github_dark from "../../../assets/icons/github/contact_dark.png";
import { theme } from "../../../styles/theme/theme";
import { useState } from "react";
import EllipsisText from "../../Ellipsis/EllipsisText";

function Item({
  file,
  name,
  part,
  introduce,
  instaid,
  githuburl,
  isDark,
}: IItem) {
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
    <Styled.Wrapper
      css={css`
        border: ${isDark
          ? `1px solid ${theme.color.darkgray}`
          : `1.5px solid ${theme.color.lightgray};`};
      `}
      whileHover={{
        scale: 1.02,
      }}
    >
      <Styled.InfoWrapper onClick={() => setClicked((prev) => !prev)}>
        <div
          css={css`
            ${theme.flexRow("space-between", "center", 50)}
          `}
        >
          <UserImg
            radius={clicked ? "20px" : ""}
            url={file}
            size={clicked ? "170" : undefined}
          />
          <Styled.NameAndPart
            css={css`
              flex-direction: ${clicked ? "column" : "row"};
              gap: ${clicked && "12px"};
            `}
          >
            <Styled.Name
              css={css`
                color: ${isDark ? theme.mode.dark.main : theme.mode.light.main};
                font-size: ${clicked ? "24px" : "18px"};
                font-weight: ${theme.weight.semibold};
              `}
            >
              {name}
            </Styled.Name>
            <Styled.Badge
              css={css`
                background-color: ${clicked
                  ? theme.color[PART_COLOR[part.toLowerCase()]]
                  : isDark
                  ? theme.mode.dark.bgColor
                  : theme.mode.light.bgColor};
              `}
            >
              <Typo
                fontSize="20"
                color={clicked ? "white" : PART_COLOR[part.toLowerCase()]}
                weight="700"
              >
                {part.toUpperCase()}
              </Typo>
            </Styled.Badge>
          </Styled.NameAndPart>
        </div>
        <EllipsisText
          color="darkgray"
          overflow={clicked ? "visible" : "hidden"}
          display={clicked ? "" : "-webkit-box"}
          lineHeight={1.2}
          padding="0px 1rem"
        >
          <Typo color="darkgray" weight="500" fontSize="16">
            {introduce}
          </Typo>
        </EllipsisText>
      </Styled.InfoWrapper>
      <Styled.SNSbox>
        <Styled.Img
          width={isDark ? 35 : 32}
          height={isDark ? 35 : 32}
          css={css`
            display: ${instaid ? "" : "none"};
          `}
          onClick={goInstagram}
          src={isDark ? insta_dark : instaimg}
        />
        <Styled.Img
          width={isDark ? 35 : 32}
          height={isDark ? 35 : 32}
          css={css`
            display: ${githuburl ? "" : "none"};
          `}
          onClick={goGithub}
          src={isDark ? github_dark : githubimg}
        />
      </Styled.SNSbox>
    </Styled.Wrapper>
  );
}

export default Item;
