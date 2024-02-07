import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 5fr 2fr;
  align-items: center;
  border: 2px solid ${(props) => props.theme.color.lightgray};
  border-radius: 10px;
  padding: 10px;
  padding-left: 30px;
`;

export const NameAndPart = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  width: 140px;
`;

export const Badge = styled.div`
  width: 70px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

export const Introduce = styled.p`
  padding: 0px 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration-color: white;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-height: 1.2;
`;

export const SNSbox = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`;

export const Img = styled.img`
  cursor: pointer;
`;
