import { css } from "@emotion/react";
import Button from "../../Button/Button";
import Typo from "../../Typo/Typo";
import * as Styled from "./style";
import { useNavigate } from "react-router-dom";
import { ICard } from "./types";
import getFormedDate from "../../../utils/getFormedDate";
import one from "./assets/one.svg";
import two from "./assets/two.svg";
import three from "./assets/three.svg";

function HwSliderCard({ bgcolor, ...props }: ICard) {
  const navigate = useNavigate();

  function getPartAndDate() {
    return (
      <p>
        <Typo color="white" weight="regular">
          {props.part}
        </Typo>
        <Typo color="white">&nbsp;⎸&nbsp;</Typo>
        <Typo color="white" weight="regular">
          {getFormedDate(props.expireAt)}
        </Typo>
      </p>
    );
  }
  function getImg() {
    if (props.index % 3 === 0) {
      return one;
    } else if (props.index % 3 === 1) {
      return two;
    } else {
      return three;
    }
  }

  return (
    <Styled.CardWrapper
      css={css`
        background-color: ${bgcolor};
      `}
    >
      <Styled.Picture
        css={css`
          background-image: url(${getImg()});
        `}
      ></Styled.Picture>
      <Styled.LogoAndTitle onClick={() => navigate("/notification")}>
        <Styled.TitleWrapper>
          <Styled.CardTitle>
            <Typo weight="700" color="white" fontSize="42">
              {props.title}
            </Typo>
          </Styled.CardTitle>
          <Styled.CardContent>
            <Typo color="white" fontSize="18" weight="500">
              {props.content}
            </Typo>
          </Styled.CardContent>
        </Styled.TitleWrapper>
      </Styled.LogoAndTitle>
      <Styled.AlignWrapper>
        {getPartAndDate()}
        <Button radius="5px" height="40px" bgcolor="white">
          <Typo color="darkgray">상세 보기</Typo>
        </Button>
      </Styled.AlignWrapper>
    </Styled.CardWrapper>
  );
}

export default HwSliderCard;
