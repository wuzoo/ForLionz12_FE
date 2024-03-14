import { motion } from "framer-motion";
import React from "react";
import Typo from "../../../../components/Typo/Typo";

interface IText {
  item: string[];
}

function OnebyoneText({ item }: IText) {
  return (
    <>
      {item.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: Number(index * 0.06) }}
        >
          <Typo fontSize="50" weight="700">
            {char}
          </Typo>
        </motion.span>
      ))}
    </>
  );
}

export const MemorizedOnebyoneText = React.memo(OnebyoneText);
