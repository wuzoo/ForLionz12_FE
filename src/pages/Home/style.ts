import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const banner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const textwrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const text = styled(motion.h1)`
  white-space: pre-line;
`;

export const usergreet = styled(motion.h3)``;
