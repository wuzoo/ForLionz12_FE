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
  padding: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Badge = styled.div`
  color: white;
  width: 68px;
  height: 34px;
  display: flex;
  font-weight: ${(props) => props.theme.weight.semibold};
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 12px;
`;

export const Date = styled.p``;

export const Tag = styled.div`
  padding: 6px 14px;
  border: 1.5px solid ${(props) => props.theme.color.lightgray};
  border-radius: 8px;
  font-size: 14px;
  font-weight: ${(props) => props.theme.weight.semibold};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const ContentWrapper = styled.div`
  min-height: 45vh;
  overflow-y: scroll;
`;

export const Content = styled.p`
  white-space: pre-line;
  line-height: 1.5;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
