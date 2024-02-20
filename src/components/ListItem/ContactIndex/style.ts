import styled from "@emotion/styled";

export const Wrapper = styled.div`
  ${(props) => props.theme.flexRow("space-between", "center")}
  width: 100%;
  border: 1.5px solid ${(props) => props.theme.color.lightgray};
  border-radius: 10px;
  padding: 12px 20px;
  min-width: 500px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;

export const Name = styled.p``;

export const NameAndPart = styled.div`
  ${(props) => props.theme.flexRow("space-between", "center")};
  width: 180px;
`;

export const Badge = styled.div`
  width: 90px;
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
