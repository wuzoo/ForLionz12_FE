import { css } from "@emotion/react";
import * as Styled from "./style";
import { theme } from "../../../../theme/theme";
import useResponsivebar from "../../hooks/useResponsivebar";
import { SetStateAction } from "react";
import { ParenttagType } from "../../../../types";

interface ISideBar {
  setCategory: React.Dispatch<SetStateAction<number>>;
  currentCategory: number;
  tags: ParenttagType[];
}

function SideBar({ setCategory, currentCategory, tags }: ISideBar) {
  const ref = useResponsivebar();

  return (
    <Styled.Wrapper ref={ref}>
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
