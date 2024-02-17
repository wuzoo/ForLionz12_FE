import { Theme } from "@emotion/react";

export const theme: Theme = {
  color: {
    yellow: "#FDD84E",
    pink: "#FAB6AD",
    darkpink: "#BF5F69",
    skyblue: "#B2CCE5",
    darkblue: "#4B8FE2",
    white: "#ffffff",

    lightgray: "#DDDDDD",
    superlightgray: "#F6F6F6",
    darkgray: "#8E8888",
    black: "#000000",
  },

  weight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    ultrabold: "800",
  },

  flexRow(j = "", a = "", gap = 0) {
    return `
      display: flex;
      justify-content: ${j};
      align-items: ${a};
      gap: ${gap}px;
      `;
  },

  flexColumn(j = "", a = "", gap = 0) {
    return `
    display: flex;
    flex-direction: column;
    align-items: ${a};
    justify-content: ${j};
    gap: ${gap}px;
    `;
  },
};
