import { css } from "@emotion/react";
import Button from "../../Button/Button";
import Typo from "../../Typo/Typo";
import * as Styled from "./style";
import tmp from "../../../assets/icons/github/github.svg";
import { PART_COLOR } from "../../../constants/partcolor";

const variants = {
  hover: {
    scale: 1.03,
  },
};

function HwCard({ part }: { part: string }) {
  return (
    <Styled.CardWrapper variants={variants} whileHover="hover">
      <Styled.Thumnail color="fe">
        <Styled.Img src={tmp} />
      </Styled.Thumnail>
      <Styled.Content>
        <div
          css={css`
            width: 100%;
          `}
        >
          <Styled.AlignWrapper>
            <Styled.CardTitle>
              <Typo>api를 만들어보자.</Typo>
            </Styled.CardTitle>
            <Styled.Badge
              css={css`
                background-color: ${PART_COLOR[part]};
              `}
            >
              <Typo color="white">FE</Typo>
            </Styled.Badge>
          </Styled.AlignWrapper>
          <Styled.Date>
            <Typo color="darkgray" weight="400" fontSize="12">
              2023-01-10 18:00:00
            </Typo>
          </Styled.Date>
        </div>
        <Button
          width="100%"
          height="40px"
          borderwidth="1px"
          bordercolor="lightgray"
          bgcolor="white"
        >
          <Typo>Go to page</Typo>
        </Button>
      </Styled.Content>
    </Styled.CardWrapper>
  );
}
export default HwCard;
