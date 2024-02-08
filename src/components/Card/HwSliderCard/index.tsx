import { css } from "@emotion/react";
import Button from "../../Button/Button";
import Typo from "../../Typo/Typo";
import * as Styled from "./style";
import { ICard } from "./types";
import getFormedDate from "../../../utils/getFormedDate";
import one from "./assets/one.webp";
import two from "./assets/two.webp";
import three from "./assets/three.webp";

function HwSliderCard({ onClick, bgcolor, ...props }: ICard) {
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
      onClick={onClick}
      css={css`
        background-color: ${bgcolor};
      `}
    >
      <Styled.Picture src={getImg()} />
      <Styled.LogoAndTitle>
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
