import styled from "@emotion/styled";

export const Layout = styled.div`
  margin: 80px 0px;
  max-width: 100vw;
  min-width: 600px;
  min-height: 100vh;
  position: relative;
  ${(props) => props.theme.flexColumn("", "center")}
`;
