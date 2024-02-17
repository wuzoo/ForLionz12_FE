import "@emotion/react";
import { theme } from "./theme";

type MyTheme = typeof theme;

declare module "@emotion/react" {
  interface Theme extends MyTheme {}
}
