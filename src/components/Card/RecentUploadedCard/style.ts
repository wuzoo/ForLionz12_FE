import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const variants = {
  hover: {
    boxShadow: "0px 2px 8px rgba(250, 182, 173, 0.7)",
    y: -10,
  },
};

export const CardWrapper = styled(motion.div)`
  display: flex;
  border: 1px solid ${(props) => props.theme.color.lightgray};
  border-radius: 10px;
  height: 160px;
  max-width: 400px;
  margin: 0px 8px;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;

export const ContentWrapper = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Img = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 40%;
  height: 95%;
  border-radius: 15px;
`;

export const Name = styled.p`
  margin-bottom: 4px;
`;

export const Text = styled.p`
  max-width: 60%;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  text-decoration-color: ${(props) => props.theme.color.darkgray};
  color: gray;
  -webkit-box-orient: vertical;
`;
