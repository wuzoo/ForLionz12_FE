import { css } from "@emotion/react";
import MainAndSubtitle from "../../MainAndSubtitle";
import Button from "../../Button/Button";
import Typo from "../../Typo/Typo";
import * as Styled from "./style";
import { useNavigate } from "react-router-dom";
import { DateAdaptor, PartAdaptor } from "../../PartAndDate/PartAndDate";
import { ICard } from "./types";

function Card({ logo, bgcolor, ...props }: ICard) {
  const navigate = useNavigate();

  return (
    <Styled.CardWrapper
      css={css`
        background-color: ${bgcolor};
      `}
    >
      <Styled.Picture
        css={css`
          background-image: url(${logo});
        `}
      ></Styled.Picture>
      <Styled.LogoAndTitle>
        <Styled.TitleWrapper>
          <MainAndSubtitle
            main={props.main}
            sub={props.sub}
            gap="15"
            colors={["white", "white"]}
            fontsizes={["44", "20"]}
          />
        </Styled.TitleWrapper>
      </Styled.LogoAndTitle>
      <div>
        <Styled.Alignwrapper
          css={css`
            margin-bottom: 10px;
          `}
        >
          <PartAdaptor fontSize="18px" part={props.part} />
          <DateAdaptor showdelim={true} date={props.date} fontSize="18px" />
        </Styled.Alignwrapper>
        <Button
          onClick={() => {
            navigate("/notification");
          }}
          radius="5"
          width="100%"
          height="40"
          bgcolor="white"
        >
          <Typo color="darkgray">공지 전체 보러 가기</Typo>
        </Button>
      </div>
    </Styled.CardWrapper>
  );
}

export default Card;