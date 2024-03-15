import { motion } from "framer-motion";
import React, { useContext } from "react";
import { css } from "@emotion/react";
import { ThemeContext } from "../../../../context/IsDark/IsDark";
import { theme } from "../../../../styles/theme/theme";

interface IText {
  text: string[];
}

function OnebyoneText({ text }: IText) {
  const { isDark } = useContext(ThemeContext);
  return (
    <>
      {text.map((char, index) => (
        <motion.span
          css={css`
            font-family: "Pretendard-bold";
            font-size: 50px;
            color: ${isDark ? theme.mode.dark.main : theme.mode.light.main};

            transition: color 0.2s ease-in-out;
          `}
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: Number(index * 0.06) }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
}

export const MemorizedOnebyoneText = React.memo(OnebyoneText);
