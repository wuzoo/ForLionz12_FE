import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 4fr 2fr;
  align-items: center;
  border: 1.5px solid ${(props) => props.theme.color.lightgray};
  border-radius: 10px;
  padding: 10px;
  padding-left: 30px;
  gap: 10px;
  cursor: pointer;
`;

export const Name = styled.p``;

export const NameAndPart = styled.div`
  ${(props) => props.theme.flexRow("space-between", "center", 30)};
  width: 200px;
`;

export const Badge = styled.div`
  width: 100px;
  height: 30px;
  ${(props) => props.theme.flexRow("center", "center")}
  border-radius: 15px;
`;

export const Introduce = styled.p`
  padding: 0px 1rem;
  text-overflow: ellipsis;
  text-decoration-color: white;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-height: 1.2;
`;

export const SNSbox = styled.div`
  ${(props) => props.theme.flexRow("end", "", 10)}
`;

export const Img = styled.img`
  cursor: pointer;
`;
