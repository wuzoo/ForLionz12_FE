import * as Styled from "./style";
import { IBtn } from "./types";

function Button(props: IBtn) {
  return (
    <Styled.Btn {...props} onClick={props.onClick}>
      {props.children}
    </Styled.Btn>
  );
}

export default Button;
