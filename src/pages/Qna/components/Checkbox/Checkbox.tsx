import React, { useState } from "react";
import * as Styled from "./style";
import { css } from "@emotion/react";
import { theme } from "../../../../theme/theme";

interface IBox {
  text: string;
  setClickedValue: React.Dispatch<React.SetStateAction<Array<number>>>;
  values: number[];
  id: number;
}

function Checkbox({ text, setClickedValue, id }: IBox) {
  const [clicked, setClicked] = useState(false);

  const AddValue = () => {
    setClicked((prev) => !prev);
    setClickedValue((obj) => {
      if (!clicked) {
        return [...obj, id];
      }
      return [...obj.filter((item) => item !== id)];
    });
  };

  return (
    <Styled.Box
      css={css`
        background-color: ${clicked && theme.color.superlightgray};
      `}
      onClick={() => AddValue()}
    >
      {clicked ? "✓" : ""} {text}
    </Styled.Box>
  );
}

export default Checkbox;
