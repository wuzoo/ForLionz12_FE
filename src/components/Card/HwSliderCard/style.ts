import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 36px;
  position: relative;
`;

export const Picture = styled.div`
  width: 340px;
  height: 340px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  top: 5%;
  right: 56%;
`;

export const LogoAndTitle = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: end;
  width: 60%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  z-index: 2;
  box-sizing: content-box;
  width: 60%;
`;

export const Ellipsis = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-decoration-color: white;
  color: white;
  text-align: start;
`;

export const CardTitle = styled(Ellipsis)`
  -webkit-line-clamp: 1;
  margin-bottom: 6px;
`;

export const CardContent = styled(Ellipsis)`
  -webkit-line-clamp: 2;
  line-height: 1.3;
`;

export const AlignWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 10;
`;
