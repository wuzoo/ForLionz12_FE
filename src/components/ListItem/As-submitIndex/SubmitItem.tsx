import { User } from "../../Profile/style";
import * as Styled from "./style";
import tmp from "../../../assets/imgs/tmpprofile.jpeg";
import Typo from "../../Typo/Typo";
import { css } from "@emotion/react";
import github from "../../../assets/icons/github/img.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { variants } from "./variants";
import { IItem } from "./types";
import getFormedDate from "../../../utils/getFormedDate";

function SubmitItem({ name, date, link, description }: IItem) {
  const [clicked, setClicked] = useState(false);

  const checkContainerClicked = (e: React.MouseEvent<HTMLElement>) => {
    if (!clicked) {
      setClicked((prev) => !prev);
    } else if (clicked) {
      // click된 상태라면 link인지 container인지 체크
      const elem = document.getElementById("link");
      console.log(elem == e.target);
      if (elem !== e.target) {
        setClicked((prev) => !prev);
      }
    }
  };

  return (
    <Styled.Container
      onClick={(e) => checkContainerClicked(e)}
      variants={variants}
      initial="initial"
      animate={clicked ? "click" : undefined}
      whileHover="hover"
    >
      <Styled.PrevBar>
        <Styled.ImgAndNameWrapper>
          <User url={tmp} size="45" />
          <div css={css``}>
            <Styled.Name>
              <Typo>{name}의 과제입니다.</Typo>
            </Styled.Name>
          </div>
        </Styled.ImgAndNameWrapper>
        <Styled.Date>
          <Typo color="darkgray" fontSize="14">
            작성일: {getFormedDate(date)}
          </Typo>
        </Styled.Date>
      </Styled.PrevBar>
      <div>
        <Styled.Explain>{description}</Styled.Explain>
        <Styled.LinkWrapper>
          <Styled.Img src={github} />
          <Link to={link}>
            <Styled.LinkText id="link">{link}</Styled.LinkText>
          </Link>
        </Styled.LinkWrapper>
      </div>
    </Styled.Container>
  );
}

export default SubmitItem;
