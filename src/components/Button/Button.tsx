import { css } from "@emotion/react";
import * as Styled from "./style";
import { IBtn } from "./types";
import { theme } from "../../theme/theme";

function Button(props: IBtn) {
  return (
    <Styled.Btn
      {...props}
      onClick={props.onClick}
      css={css`
        width: ${props.width};
        background-color: ${props.color
          ? theme.color[props.color]
          : theme.color.darkblue};
        border-radius: ${props.radius || "10"}px;
        height: ${props.height || "30"}px;
      `}
    >
      {props.children}
    </Styled.Btn>
  );
}

export default Button;
