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

function SubmitItem({ name, date, link }: IItem) {
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
            작성일: {date}
          </Typo>
        </Styled.Date>
      </Styled.PrevBar>
      <div>
        <Styled.Explain>
          안녕하세요 저는 최주용입니다. 저는 한수현과 프로젝트 중입니다. 지금은
          과제 제출 아이템을 만들고 있고 지금 과제 제출 애니메이션을 만들고도
          있고 뭐뭐뭐머 하고 있긴 합니다. 햐ㅏ하하하
        </Styled.Explain>
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
