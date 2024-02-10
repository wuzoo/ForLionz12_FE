import submit from "../../assets/3dicons/assubmit/girl.webp";
import contact from "../../assets/3dicons/contact/people.webp";
import login from "../../assets/3dicons/login/people.webp";
import notice from "../../assets/3dicons/notice/people.webp";
import qna from "../../assets/3dicons/qna/baby.webp";
import lion from "../../assets/3dicons/main/lion.webp";
import { Img } from "./style";
import { IPageLogo, IPageobj } from "./types";
import { useLayoutEffect, useRef } from "react";
import * as Styled from "./style";
import { css } from "@emotion/react";

export default function PageLogo(props: IPageLogo) {
  const preloadImg = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    if (preloadImg && preloadImg.current) {
      preloadImg.current.src = pageobj[props.type];
    }
  }, [props.type]);

  const pageobj: IPageobj = {
    assignsubmit: submit,
    contact: contact,
    login: login,
    notification: notice,
    "q&a": qna,
    lion: lion,
  };

  return (
    <Styled.Wrapper
      css={css`
        width: ${props.width}px;
        height: ${props.height}px;
        aspect-ratio: 1/1;
      `}
    >
      <Img ref={preloadImg} {...props} />
    </Styled.Wrapper>
  );
}
