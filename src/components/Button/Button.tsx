import { css } from "@emotion/react";
import * as Styled from "./style";
import { IBtn } from "./types";
import { theme } from "../../theme/theme";
import Typo from "../Typo/Typo";

function Button(props: IBtn) {
  return (
    <Styled.Btn
      {...props}
      type={props.type}
      onClick={props.onClick}
      css={css`
        width: ${props.width};
        background-color: ${props.bgcolor
          ? theme.color[props.bgcolor]
          : theme.color.darkblue};
        border-radius: ${props.radius || "10px"};
        height: ${props.height};
        border-style: solid;
        border-width: ${props.borderwidth || "0"};
        border-color: ${props.bordercolor
          ? theme.color[props.bordercolor]
          : "none"};
        padding: ${props.padding};
      `}
    >
      <Typo
        fontSize={props.fontSize || "18"}
        color={props.color || theme.color.black}
      >
        {props.children}
      </Typo>
    </Styled.Btn>
  );
}

export default Button;
