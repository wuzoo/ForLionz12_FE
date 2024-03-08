import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  ${(props) => props.theme.flexColumn("space-between", "center")}
  padding-bottom: 36px;
  position: relative;
  border-radius: 60px;
  overflow: hidden;
  margin: 0px 6rem;
`;

export const Picture = styled.img`
  height: 80%;
  position: absolute;
  object-fit: cover;
  top: 10%;
  right: 56%;
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
  width: 60%;
`;

export const AlignWrapper = styled.div`
  ${(props) => props.theme.flexColumn("", "", 5)}
  z-index: 10;
`;
