import { css } from "@emotion/react";
import { theme } from "../../../theme/theme";
import { motion } from "framer-motion";

function MotionBar() {
  return (
    <motion.div
      layoutId="indicatebar"
      transition={{
        duration: 0.3,
      }}
      css={css`
        width: 100%;
        position: absolute;
        bottom: -10px;
        height: 6px;
        border-radius: 5px;
        background-color: ${theme.color.black};
      `}
    ></motion.div>
  );
}

export default MotionBar;
