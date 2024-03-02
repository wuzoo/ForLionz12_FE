import User from "../../Profile/Profile";
import * as Styled from "./style";
import Typo from "../../Typo/Typo";
import { css } from "@emotion/react";
import github from "../../../assets/icons/github/img.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { variants } from "./variants";
import { IItem } from "./types";
import getFormedDate from "../../../utils/getFormedDate";
import { useMemberId } from "../../../hooks";
import { ERROR } from "../../../constants/message";

function SubmitItem({ name, date, link, description, id }: IItem) {
  const [clicked, setClicked] = useState(false);

  const { data, error } = useMemberId(+id);

  if (error === "rejected") throw new Error(ERROR.ID_MEMBER);
  if (!data) return;

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
          <User url={data?.imageUrl} size="45" />
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
        <Styled.Explain>
          <Typo fontSize="16" weight="400">
            {description}
          </Typo>
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
