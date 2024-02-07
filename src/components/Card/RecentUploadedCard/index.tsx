import * as Styled from "./style";
import Typo from "../../Typo/Typo";
import { css } from "@emotion/react";
import { ICard } from "./types";
import useMemberId from "../../../hooks/api/member/useMemberId";
import user from "../../../assets/imgs/defaultUser.svg";

export default function Card({ name, content, link, cnt, uid }: ICard) {
  const { data } = useMemberId(uid);

  if (!data) return;

  const handleLinkClick = () => {
    location.href = link;
  };

  const handleWidth = () => {
    if (cnt === 1) {
      return "100%";
    } else if (cnt === 2) {
      return "800px";
    } else {
      return "400px";
    }
  };

  return (
    <Styled.CardWrapper variants={Styled.variants} whileHover="hover">
      <Styled.Img src={data?.imageUrl || user} />
      <Styled.ContentWrapper
        css={css`
          max-width: ${handleWidth()};
        `}
      >
        <div>
          <Styled.Name>
            <Typo>{name}의 과제</Typo>
          </Styled.Name>
          <Styled.Text>
            <Typo color="darkgray" fontSize="14">
              {content}
            </Typo>
          </Styled.Text>
        </div>
        <div
          css={css`
            cursor: pointer;
            padding: 5px;
          `}
        >
          <Typo onClick={handleLinkClick} color="darkblue" fontSize="16">
            구경하러 가기
          </Typo>
        </div>
      </Styled.ContentWrapper>
    </Styled.CardWrapper>
  );
}
