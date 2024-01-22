import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 400px;
  padding-bottom: 36px;
  position: relative;
  z-index: -10;
`;

export const Picture = styled.div`
  width: 340px;
  height: 340px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  top: 10%;
  right: 48%;
  z-index: -1;
`;

export const LogoAndTitle = styled.div`
  max-width: 670px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: end;
  width: 500px;
`;

export const TitleWrapper = styled.div`
  text-align: end;
`;

export const CardTitle = styled.p`
  word-wrap: normal;
  margin-bottom: 6px;
`;

export const CardContent = styled.p`
  width: auto;
  line-height: 1.2;
  padding-left: 8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration-color: white;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
