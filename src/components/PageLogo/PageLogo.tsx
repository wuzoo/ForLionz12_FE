import submit from "../../assets/3dicons/assubmit/girl.webp";
import contact from "../../assets/3dicons/contact/people.webp";
import login from "../../assets/3dicons/login/people.webp";
import notice from "../../assets/3dicons/notice/people.webp";
import qna from "../../assets/3dicons/qna/baby.webp";
import lion from "../../assets/3dicons/main/lion.webp";
import { IPageLogo, IPageobj } from "./types";
import { useMemo } from "react";
import { css } from "@emotion/react";

export default function PageLogo(props: IPageLogo) {
  const PAGE_OBJ: IPageobj = {
    HW_SUBMIT: submit,
    CONTACT: contact,
    LOGIN: login,
    NOTIFICATION: notice,
    "Q&A": qna,
    LION: lion,
  };

  return useMemo(
    () => (
      <div
        css={css`
          width: ${props.width}px;
          height: ${props.height}px;
          @media screen and (max-width: 900px) {
            display: none;
          }
        `}
      >
        <img
          css={css`
            object-fit: contain;
            aspect-ratio: 1/1;
          `}
          src={PAGE_OBJ[props.type]}
          loading="lazy"
          {...props}
        />
      </div>
    ),
    [props.type, props.width, props.height]
  );
}
