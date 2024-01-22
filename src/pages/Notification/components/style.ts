import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr 3fr;
  align-items: center;
  border-radius: 10px;
  padding: 13px;
  padding-left: 30px;
  background-color: ${(props) => props.theme.color.superlightgray};
`;

export const Badge = styled.div`
  width: 70px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-right: 16px;
`;

export const Notice = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration-color: white;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  box-sizing: content-box;
  line-height: 1.2;
`;

export const Date = styled.p`
  text-align: end;
  padding-right: 6px;
`;