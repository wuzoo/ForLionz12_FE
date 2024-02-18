import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const banner = styled.div`
  width: 100%;
  max-height: 45vh;
  padding-left: 8rem;
  ${(props) => props.theme.flexRow("center", "center")}
`;

export const textwrapper = styled.div`
  ${(props) => props.theme.flexColumn("center", "", 20)}
`;

export const text = styled(motion.h1)`
  white-space: pre-line;
`;

export const usergreet = styled(motion.h3)``;
