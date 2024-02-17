import { css } from "@emotion/react";
import Button from "../../Button/Button";
import Typo from "../../Typo/Typo";
import * as Styled from "./style";
import { useNavigate } from "react-router-dom";
import { ICard } from "./types";
import getFormedDate from "../../../utils/getFormedDate";

function Card({ logo, bgcolor, ...props }: ICard) {
  const navigate = useNavigate();

  function getPartAndDate() {
    return (
      <p>
        <Typo color="white" weight="regular">
          {props.part}
        </Typo>
        <Typo color="white">&nbsp;⎸&nbsp;</Typo>
        <Typo color="white" weight="regular">
          {getFormedDate(props.createdAt)}
        </Typo>
      </p>
    );
  }

  return (
    <Styled.CardWrapper
      css={css`
        background-color: ${bgcolor};
      `}
    >
      <Styled.Picture src={logo} />
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
        <Button
          onClick={() => navigate("/notification")}
          radius="5px"
          width="100%"
          height="40px"
          bgcolor="white"
        >
          <Typo color="darkgray">공지 전체 보러 가기</Typo>
        </Button>
      </Styled.AlignWrapper>
    </Styled.CardWrapper>
  );
}

export default Card;
