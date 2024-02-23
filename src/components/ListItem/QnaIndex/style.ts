import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 20px;
  ${(props) => props.theme.flexColumn()}
  border: 1px solid ${(props) => props.theme.color.lightgray};
  border-radius: 10px;
  cursor: pointer;
`;

export const Title = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  width: 100%;
  line-height: 1.2;
`;

export const Date = styled.p``;

export const Writer = styled.p`
  padding: 3px 0px;
`;

export const Tag = styled.span`
  border: 1px solid ${(props) => props.theme.color.lightgray};
  padding: 5px 12px;
  border-radius: 18px;
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const BottomRow = styled.div`
  ${(props) => props.theme.flexRow("space-between")}
  padding: 10px 0px 0px 78px;
`;
