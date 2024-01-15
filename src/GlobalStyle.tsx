import { Global, css } from "@emotion/react";

const style = css`
  * {
    color: red;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
