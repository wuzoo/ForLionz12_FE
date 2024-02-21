import styled from "@emotion/styled";

export const Badge = styled.div`
  color: white;
  width: 68px;
  height: 26px;
  font-weight: ${(props) => props.theme.weight.semibold};
  ${(props) => props.theme.flexRow("center", "center")}
  font-size: 16px;
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
  ${(props) => props.theme.flexRow("", "center", 22)}
`;

export const TagWrapper = styled(Wrapper)`
  gap: 18px;
`;

export const ContentWrapper = styled.div`
  margin-top: 40px;
  height: 80%;
  overflow-y: scroll;
`;

export const Content = styled.p`
  white-space: pre-line;
  line-height: 1.5;
`;

export const MainWrapper = styled.div`
  ${(props) => props.theme.flexColumn("", "", 16)}
  max-width: 60%;
`;

export const TitleAndModifyBtnWrapper = styled.div`
  ${(props) => props.theme.flexRow("", "end", 20)}
`;

export const Title = styled.p`
  width: 100%;
  word-wrap: break-word;
  white-space: pre-line;
`;

export const AssignmentLink = styled.div`
  ${(props) => props.theme.flexRow("", "center", 10)}
  a {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: ${(props) => props.theme.color.darkblue};
  }
`;

export const PageWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;
