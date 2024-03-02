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
function getMainText(type: string) {
  if (type === "HW_SUBMIT") {
    return "Assignment Submit";
  }
  return type[0].toUpperCase() + type.slice(1);
}

function Banner({ type, logowidth, logoheight }: IBanner) {
  return (
    <Styled.Container>
      <MainAndSubtitle
        main={getMainText(type)}
        sub={TEXT[type]}
        fontsizes={["70", "18"]}
        gap="7"
      />
      <LazyPageLogo type={type} width={logowidth} height={logoheight} />
    </Styled.Container>
  );
}

export default Banner;
