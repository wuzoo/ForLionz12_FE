import * as Styled from "./style";
import img from "../../../assets/imgs/tmpprofile.jpeg";
import Typo from "../../Typo/Typo";
import Button from "../../Button/Button";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { ICard } from "./types";

export default function Card({ name, content, link }: ICard) {
  const navigate = useNavigate();
  return (
    <Styled.CardWrapper>
      <Styled.Img
        css={css`
          background-image: url(${img});
        `}
      />
      <div>
        <Styled.Name>
          <Typo>{name}의 과제</Typo>
        </Styled.Name>
        <Styled.Text>
          <Typo color="darkgray" fontSize="14">
            {content}
          </Typo>
        </Styled.Text>
        <Button
          onClick={() => {
            navigate(`${link}`);
          }}
          color="darkblue"
          bgcolor="white"
          fontSize="14"
        >
          구경하러 가기
        </Button>
      </div>
    </Styled.CardWrapper>
  );
}
