import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 70%;
  margin-top: 50px;
`;

export const Title = styled.p``;

export const TitleAndInfoWrapper = styled.div`
  ${(props) => props.theme.flexColumn("", "", 10)}
`;

export const TitleAndBtnWrapper = styled.div`
  ${(props) => props.theme.flexRow("", "end", 20)}
`;

export const TagWrapper = styled.div`
  margin-top: 10px;
  ${(props) => props.theme.flexRow("", "center", 10)}
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
  padding-left: 5px;
  ${(props) => props.theme.flexRow("", "center", 20)}
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
  ${(props) => props.theme.flexRow("", "center")}
  padding-left: 10px;
`;

export const MarkDownContent = styled.div`
  padding: 20px 2% 5% 2%;
  min-height: 60vh;
  ${(props) => props.theme.flexColumn("center")}
`;

export const CommentsContainer = styled.div`
  ${(props) => props.theme.flexColumn("", "center", 20)}
`;

export const BtnWrapper = styled.div`
  ${(props) => props.theme.flexRow("end")}
  padding: 10px 0px;
`;

export const Tag = styled.p`
  padding: 6px 15px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.superlightgray};
`;
