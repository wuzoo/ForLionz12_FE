import { css } from "@emotion/react";
import { theme } from "./theme/theme";

export const GlobalStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");

  @import "slick-carousel/slick/slick.css";
  @import "slick-carousel/slick/slick-theme.css";
  @import "react-toastify/dist/ReactToastify.css";

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
    color: black;
  }
  ::-webkit-scrollbar {
    width: 10px;
    height: 0;
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.color.skyblue};
    border-radius: 10px;
  }
  .recent_slide .slick-list {
    padding: 20px 0px;
  }
  .Toastify__toast-body div {
    text-align: center;
    font-weight: 600;
    font-size: 18;
  }

  .dots_custom {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .dots_custom ul {
    display: flex;
    position: relative;
    top: -20px;
    gap: 10px;
  }
  .dots_custom li {
  }
  .dots_custom li button {
    border: none;
    background: ${theme.color.darkgray};
    color: transparent;
    cursor: pointer;
    display: block;
    height: 8px;
    width: 8px;
    border-radius: 100%;
    padding: 0;
  }
  .dots_custom li.slick-active button {
    background: ${theme.color.black};
  }
`;
