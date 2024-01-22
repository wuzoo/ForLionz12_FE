import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const CardWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 360px;
  width: 350px;
  border: 1px solid ${(props) => props.theme.color.lightgray};
  border-radius: 10px;
  justify-self: center;
`;

export const Thumnail = styled.div<{ color: string }>`
  width: 100%;
  height: 50%;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 30%;
`;

export const Content = styled.div`
  height: 50%;
  width: 80%;
  padding: 1rem 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const CardTitle = styled.h1``;

export const Badge = styled.div`
  width: 56px;
  height: 28px;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 8px;
`;

export const Date = styled.p``;

export const AlignWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
