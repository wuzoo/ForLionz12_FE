export const PART_COLOR: IPartColor = {
  fe: "skyblue",
  be: "pink",
  staff: "yellow",
};

interface IPartColor {
  [key: string]: string;
  fe: string;
  be: string;
  staff: string;
}
