import Lottie from "lottie-react";
import loadAni from "../../assets/lottie/load.json";
import { css } from "@emotion/react";
import { theme } from "../../styles/theme/theme";

export default function Loader() {
  return (
    <div
      css={css`
        width: 100vw;
        height: 100vh;
        ${theme.flexRow("center", "center")}
      `}
    >
      <Lottie animationData={loadAni} width={30} height={30} />
    </div>
  );
}
