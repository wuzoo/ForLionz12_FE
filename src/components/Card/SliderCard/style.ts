import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  ${(props) => props.theme.flexColumn("space-between", "center")}
  padding-bottom: 36px;
  position: relative;
  overflow: hidden;
`;

export const Picture = styled.img`
  height: 80%;
  position: absolute;
  object-fit: cover;
  top: 10%;
  right: 57%;
`;

export const LogoAndTitle = styled.div`
  height: 300px;
  ${(props) => props.theme.flexRow("end", "center")}
  width: 50%;
`;

export const TitleWrapper = styled.div`
  ${(props) => props.theme.flexColumn("", "start", 10)}
  z-index: 2;
  box-sizing: content-box;
  width: 65%;
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
  line-height: 1.3;
`;

export const CardContent = styled(Ellipsis)`
  -webkit-line-clamp: 3;
  line-height: 1.3;
  width: 100%;
`;

export const AlignWrapper = styled.div`
  ${(props) => props.theme.flexColumn("", "", 5)}
  z-index: 10;
`;
