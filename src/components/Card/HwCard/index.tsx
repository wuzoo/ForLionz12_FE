import { css } from "@emotion/react";
import Button from "../../Button/Button";
import Typo from "../../Typo/Typo";
import * as Styled from "./style";
import { PART_COLOR } from "../../../constants/partcolor";
import { IHwCard } from "./types";
import getImgForCategory from "../../../utils/getImgForCategory";
import { theme } from "../../../theme/theme";
import { useLayoutEffect, useRef } from "react";

const variants = {
  hover: {
    scale: 1.03,
  },
};

function HwCard({
  category,
  part,
  onClick,
  layoutId,
  title,
  createdAt,
}: IHwCard) {
  const ref = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    ref.current?.setAttribute(
      "src",
      getImgForCategory(category.toUpperCase()) || ""
    );
  }, [category]);

  return (
    <Styled.CardWrapper
      layoutId={layoutId}
      variants={variants}
      whileHover="hover"
      onClick={onClick}
    >
      <Styled.Thumnail>
        <Styled.Img ref={ref} />
      </Styled.Thumnail>
      <Styled.Content>
        <div
          css={css`
            width: 100%;
          `}
        >
          <Styled.AlignWrapper>
            <Styled.CardTitle>
              <Typo>{title}</Typo>
            </Styled.CardTitle>
            <Styled.Badge
              css={css`
                background-color: ${theme.color[PART_COLOR[part]]};
              `}
            >
              <Typo color="white">{part.toUpperCase()}</Typo>
            </Styled.Badge>
          </Styled.AlignWrapper>
          <Styled.Date>
            <Typo color="darkgray" weight="400" fontSize="12">
              {createdAt}
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
