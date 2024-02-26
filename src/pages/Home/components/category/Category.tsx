import { css } from "@emotion/react";
import * as Styled from "./style";
import { ColorAndImgofItem, Destination } from "../../constant/constant";
import { useNavigate } from "react-router-dom";
import Typo from "../../../../components/Typo/Typo";
import { theme } from "../../../../styles/theme/theme";

function Category() {
  const colors = Array.from(Object.values(ColorAndImgofItem));
  const nav = ["공지사항", "과제", "연락처", "Q&A"];

  const navigate = useNavigate();

  return (
    <div
      css={css`
        ${theme.flexRow("center", "center")}
        width: 100%;
        padding-top: 50px;
      `}
    >
      <Styled.Container>
        {colors.map((item, index) => (
          <Styled.ItemWrapper key={item[0]}>
            <Styled.Item
              onClick={() => navigate(Destination[nav[index]])}
              css={css`
                background-color: ${item[0]};
              `}
            >
              <Styled.Img src={item[1]} />
            </Styled.Item>
            <Styled.Text>
              <Typo color="darkgray">{nav[index]}</Typo>
            </Styled.Text>
          </Styled.ItemWrapper>
        ))}
      </Styled.Container>
    </div>
  );
}

export default Category;
