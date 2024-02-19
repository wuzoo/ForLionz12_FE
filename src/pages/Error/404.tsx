import { css } from "@emotion/react";
import code404 from "./assets/404.png";
import { theme } from "../../styles/theme/theme";
import Typo from "../../components/Typo/Typo";
import Header from "../../layout/Header/Header";
import { useErrorDispatch } from "../../context/Error/Error";
import { ERROR } from "../../constants/message";

export default function NoExist() {
  const dispatch = useErrorDispatch();
  return (
    <>
      <Header />
      <div
        onClick={() => dispatch(ERROR.ALL_ASSIGNMENT)}
        css={css`
          margin-top: 30vh;
          ${theme.flexColumn("end", "center")}
          gap: 20px;
        `}
      >
        <img width="200" src={code404} />
        <Typo fontSize="26">NOT FOUND</Typo>
      </div>
    </>
  );
}
