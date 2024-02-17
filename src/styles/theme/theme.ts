type JustifyType =
  | "center"
  | "space-between"
  | "space-around"
  | "end"
  | "start"
  | "flex-end"
  | "flex-start"
  | "";
type AlignType = "center" | "end" | "start" | "";

const color: { [key: string]: string } = {
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
} as const;

const weight = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  ultrabold: "800",
} as const;

function flexRow(j: JustifyType = "", a: AlignType = "", gap = 0) {
  return `
    display: flex;
    justify-content: ${j};
    align-items: ${a};
    gap: ${gap}px;
    `;
}

function flexColumn(j: JustifyType = "", a: AlignType = "", gap = 0) {
  return `
  display: flex;
  flex-direction: column;
  align-items: ${a};
  justify-content: ${j};
  gap: ${gap}px;
  `;
}

export const theme = {
  color,
  weight,
  flexRow,
  flexColumn,
} as const;
