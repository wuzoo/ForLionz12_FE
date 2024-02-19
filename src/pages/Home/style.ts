import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  width: 100%;
  ${(props) => props.theme.flexColumn()}
`;

export const Banner = styled.div`
  width: 100%;
  max-height: 45vh;
  padding-left: 8rem;
  ${(props) => props.theme.flexRow("center", "center")}
`;

export const Textwrapper = styled.div`
  ${(props) => props.theme.flexColumn("center", "", 20)}
`;

export const Text = styled(motion.h1)`
  white-space: pre-line;
`;

export const Usergreet = styled(motion.h3)``;
