import * as Styled from "./style";
// import PageLogo from "../PageLogo/PageLogo";
const LazyPageLogo = React.lazy(() => import("../PageLogo/PageLogo"));
import MainAndSubtitle from "../MainAndSubtitle";
import { TEXT } from "../../constants/text";
import React from "react";

interface IBanner {
  type: string;
  logowidth: string;
  logoheight: string;
}

function Banner({ type, logowidth, logoheight }: IBanner) {
  function getMainText() {
    if (type === "HW_SUBMIT") {
      return "Assignment Submit";
    }
    return type[0].toUpperCase() + type.slice(1);
  }

  return (
    <Styled.Container>
      <MainAndSubtitle
        main={getMainText()}
        sub={TEXT[type]}
        fontsizes={["70", "18"]}
        colors={["black", "darkgray"]}
        gap="7"
      />
      <LazyPageLogo type={type} width={logowidth} height={logoheight} />
    </Styled.Container>
  );
}

export default Banner;
