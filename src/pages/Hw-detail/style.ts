import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

export const Modal = styled(motion.div)`
  position: fixed;
  background-color: ${(props) => props.theme.color.white};
  border-radius: 30px;
  width: 70vw;
  height: 80vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto auto;
`;
