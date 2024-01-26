import * as Styled from "./style";
import PageLogo from "../PageLogo/PageLogo";
import MainAndSubtitle from "../MainAndSubtitle";
import { TEXT } from "../../constants/text";

interface IBanner {
  type: string;
  logowidth: string;
  logoheight: string;
}

function Banner({ type, logowidth, logoheight }: IBanner) {
  function getMain() {
    if (type == "q&a") {
      return "Q&A";
    }
    return type[0].toUpperCase() + type.slice(1);
  }

  return (
    <Styled.Container>
      <MainAndSubtitle
        main={getMain()}
        sub={TEXT[type]}
        fontsizes={["70", "18"]}
        colors={["black", "darkgray"]}
        gap="7"
      />
      <PageLogo
        type={type}
        width={logowidth}
        height={logoheight}
        pos="static"
      />
    </Styled.Container>
  );
}

export default Banner;
