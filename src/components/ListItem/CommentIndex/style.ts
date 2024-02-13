import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 95%;
  border-bottom: 1px solid ${(props) => props.theme.color.lightgray};
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NameAndDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Name = styled.p``;

export const Date = styled.p``;

export const Comment = styled.p`
  line-height: 1.3;
  padding: 20px 0px;
`;

export const Child = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 20px 0px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 20px;
  width: 80%;
  padding: 20px 0px;
`;

export const ChildCommentInput = styled.textarea`
  width: 100%;
  min-height: 100px;
  border: 1px solid ${(props) => props.theme.color.lightgray};
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
`;
