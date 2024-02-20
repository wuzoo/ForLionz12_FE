import styled from "@emotion/styled";
export * from "../SliderCard/style";

export const Picture = styled.img`
  width: 340px;
  height: 340px;
  position: absolute;
  object-fit: contain;
  top: 5%;
  right: 56%;
`;

export const LogoAndTitle = styled.div`
  height: 300px;
  ${(props) => props.theme.flexRow("end", "center")}
  width: 60%;
`;

export const TitleWrapper = styled.div`
  ${(props) => props.theme.flexColumn("", "start", 10)}
  z-index: 2;
  box-sizing: content-box;
  width: 60%;
`;
