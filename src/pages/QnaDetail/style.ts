import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 70%;
  margin-top: 50px;
`;

export const Title = styled.p``;

export const TitleAndInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TitleAndBtnWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 20px;
`;

export const EditDeleteBtnWrapper = styled.div`
  gap: 8px;
  button {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: ${(props) => props.theme.color.darkblue};
  }
`;

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
  padding: 20px 2% 5% 2%;
  min-height: 60vh;
  justify-content: center;
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

export const MDParagraph = styled.p`
  line-height: 1.3;
`;
