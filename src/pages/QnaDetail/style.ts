import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 70%;
  margin-top: 50px;
`;

export const Title = styled.p``;

export const NameAndDate = styled.p`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-left: 5px;
`;

export const CommentInput = styled.textarea`
  width: 98%;
  min-height: 150px;
  font-size: 18px;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  border: 2px solid ${(props) => props.theme.color.lightgray};
`;

export const CommentCnt = styled.p`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
