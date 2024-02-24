import { css } from "@emotion/react";
import Button from "../../Button/Button";
import Typo from "../../Typo/Typo";
import * as Styled from "./style";
import { ICard } from "./types";
import getFormedDate from "../../../utils/getFormedDate";
import type1 from "./assets/type1.webp";
import type2 from "./assets/type2.webp";

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
    if (props.index % 2 === 0) {
      return type1;
    } else if (props.index % 2 !== 0) {
      return type2;
    }
  }

  return (
    <Styled.CardWrapper
      onClick={onClick}
      css={css`
        background-color: ${bgcolor};
      `}
    >
      <Styled.Picture
        src={getImg()}
        width={props.index % 2 === 0 ? "400" : "420"}
        height={props.index % 2 === 0 ? "400" : "420"}
        css={css`
          padding-bottom: ${props.index % 2 === 0 ? "10px" : "30px"};
        `}
      />
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
