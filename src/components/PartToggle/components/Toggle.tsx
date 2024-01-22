import Button from "../../Button/Button";
import Typo from "../../Typo/Typo";
import { PART_COLOR } from "../../../constants/partcolor";

interface IToggle {
  text: string;
  part: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Toggle({ text, part, onClick }: IToggle) {
  console.log(part);

  return (
    <Button
      onClick={onClick}
      color={part == text ? PART_COLOR[part] : "black"}
      bordercolor={part == text ? PART_COLOR[part] : "lightgray"}
      width="70px"
      height="36px"
      borderwidth="2px"
      bgcolor="white"
    >
      <Typo
        weight="600"
        fontSize="14"
        color={part == text ? PART_COLOR[part] : "black"}
      >
        {text.toUpperCase()}
      </Typo>
    </Button>
  );
}

export default Toggle;
