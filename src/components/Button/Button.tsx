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
        width: ${props.width || "60px"};
        background-color: ${props.bgcolor
          ? theme.color[props.bgcolor]
          : theme.color.darkblue};
        color: ${props.color || theme.color.black};
        border-radius: ${props.radius || "10px"};
        height: ${props.height || "30px"};
        border-style: solid;
        border-width: ${props.borderwidth || "0"};
        border-color: ${props.bordercolor
          ? theme.color[props.bordercolor]
          : "none"};
      `}
    >
      {props.children}
    </Styled.Btn>
  );
}

export default Button;
