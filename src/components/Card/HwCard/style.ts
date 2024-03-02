import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const CardWrapper = styled(motion.div)`
  ${(props) => props.theme.flexColumn("center", "center")}
  width: 100%;
  min-width: 340px;
  min-height: 340px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Thumnail = styled.div`
  width: 100%;
  height: 50%;
  ${(props) => props.theme.flexRow("center", "center")}
`;

export const Img = styled.img`
  width: 35%;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

export const Content = styled.div`
  height: 50%;
  width: 80%;
  padding: 1rem 0px;
  ${(props) => props.theme.flexColumn("space-between", "center")}
`;

export const CardTitle = styled.h1`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-height: 1.3;
  width: 100%;
`;

export const Badge = styled.div`
  width: 56px;
  height: 28px;
  ${(props) => props.theme.flexRow("center", "center")}
  border-radius: 8px;
`;

export const Date = styled.p``;

export const AlignWrapper = styled.div`
  ${(props) => props.theme.flexRow("space-between", "center")}
  gap: 20px;
`;
