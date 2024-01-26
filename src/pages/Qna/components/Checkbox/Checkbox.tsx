import React, { useState } from "react";
import * as Styled from "./style";
import { css } from "@emotion/react";
import { theme } from "../../../../theme/theme";

interface IBox {
  text: string;
  setClickedValue: React.Dispatch<React.SetStateAction<Array<string>>>;
  values: string[];
}

function Checkbox({ text, setClickedValue, values }: IBox) {
  const [clicked, setClicked] = useState(false);

  const AddValue = (e: string) => {
    const tmp = values.concat();
    tmp.push(e);

    setClickedValue([...new Set(tmp)]);
    setClicked((prev) => !prev);
  };

  return (
    <Styled.Box
      css={css`
        background-color: ${clicked && theme.color.superlightgray};
      `}
      onClick={() => AddValue(text)}
    >
      {clicked ? "✓" : ""} {text}
    </Styled.Box>
  );
}

export default Checkbox;
