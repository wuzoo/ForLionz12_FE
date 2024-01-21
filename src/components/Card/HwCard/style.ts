import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const CardWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 360px;
  max-width: 300px;
  border: 1px solid ${(props) => props.theme.color.lightgray};
  border-radius: 10px;
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
  align-items: center;
  gap: 3rem;
`;
