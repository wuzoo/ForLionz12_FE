import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0px;
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
  padding-bottom: 20px;
`;
