import UserImg from "../../Profile/Profile";
import { IItem } from "./types";
import Typo from "../../Typo/Typo";
import * as Styled from "./style";
import { css } from "@emotion/react";
import { PART_COLOR } from "../../../constants/partcolor";
import instaimg from "../../../assets/icons/insta/img.png";
import githubimg from "../../../assets/icons/github/img.png";
import { theme } from "../../../styles/theme/theme";
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
    <Styled.Wrapper
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
            <Styled.Name>
              <Typo fontSize={clicked ? "24" : ""} weight="600">
                {name}
              </Typo>
            </Styled.Name>
            <Styled.Badge
              css={css`
                background-color: ${clicked
                  ? theme.color[PART_COLOR[part.toLowerCase()]]
                  : "white"};
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
        <Styled.Introduce
          css={css`
            overflow: ${clicked ? "visible" : "hidden"};
            display: ${clicked ? "" : "-webkit-box"};
          `}
        >
          <Typo color="darkgray" weight="500" fontSize="16">
            {introduce}
          </Typo>
        </Styled.Introduce>
      </Styled.InfoWrapper>
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
