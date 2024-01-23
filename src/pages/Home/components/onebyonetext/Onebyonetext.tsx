import { motion } from "framer-motion";

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
          transition={{ duration: 0.5, delay: Number(index * 0.05) }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
}

export default OnebyoneText;
