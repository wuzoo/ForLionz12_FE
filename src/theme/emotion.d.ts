import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      [key: string]: string;
      yellow: string;
      pink: string;
      darkpink: string;
      skyblue: string;
      darkblue: string;
      lightgray: string;
      darkgray: string;
      white: string;
      black: string;
    };
  }
}
