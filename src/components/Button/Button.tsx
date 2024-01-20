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
        background-color: ${props.bgcolor
          ? theme.color[props.bgcolor]
          : theme.color.darkblue};
        color: ${props.color || theme.color.black};
        border-radius: ${props.radius || "10"}px;
        height: ${props.height || "30"}px;
      `}
    >
      {props.children}
    </Styled.Btn>
  );
}

export default Button;
