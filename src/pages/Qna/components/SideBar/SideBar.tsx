import { css } from "@emotion/react";
import * as Styled from "./style";
import { theme } from "../../../../styles/theme/theme";
import useResponsivebar from "../../hooks/useResponsivebar";
import React, { SetStateAction } from "react";
import { ParenttagType } from "../../../../types";

interface ISideBar {
  setCategory: React.Dispatch<SetStateAction<number>>;
  currentCategory: number;
  tags: ParenttagType[];
}

function SideBar({ setCategory, currentCategory, tags }: ISideBar) {
  const ref = useResponsivebar();

  return (
    <Styled.Wrapper
      ref={ref}
      css={css`
        @media screen and (max-width: 900px) {
          display: flex;
          padding: 20px 0px;
        }
      `}
    >
      {tags.map((item) => (
        <Styled.Item
          key={item.parentTagId}
          css={css`
            background-color: ${currentCategory === item.parentTagId &&
            theme.color.pink};
          `}
          onClick={() => setCategory(item.parentTagId)}
        >
          {item.name}
        </Styled.Item>
      ))}
    </Styled.Wrapper>
  );
}

export default SideBar;
