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

export const MarkDownContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 2%;
  min-height: 80vh;
  justify-content: center;
`;

export const TitleAndInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  padding: 10px 0px;
`;

export const MDImg = styled.img`
  max-width: 100%;
  height: 400px;
  object-fit: cover;
`;
