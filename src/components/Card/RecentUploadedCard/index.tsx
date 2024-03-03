import * as Styled from "./style";
import Typo from "../../Typo/Typo";
import { css } from "@emotion/react";
import { ICard } from "./types";
import { useMemberId } from "../../../hooks";
import User from "../../../assets/icons/user/defaultUser.svg?react";

export default function Card({ name, content, link, cnt, uid, isDark }: ICard) {
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
      {data?.imageUrl ? (
        <Styled.Img src={data?.imageUrl} />
      ) : (
        <User width="40%" stroke={isDark ? "white" : "black"} />
      )}
      <Styled.ContentWrapper
        css={css`
          max-width: ${handleWidth()};
        `}
      >
        <div>
          <Styled.Name>
            <Typo fontSize="24" weight="600">
              {name}의 과제
            </Typo>
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
          `}
        >
          <Typo onClick={handleLinkClick} color="darkblue" fontSize="18">
            구경하러 가기
          </Typo>
        </div>
      </Styled.ContentWrapper>
    </Styled.CardWrapper>
  );
}
