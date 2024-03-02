import Button from "../../Button/Button";
import Typo from "../../Typo/Typo";
import { PART_COLOR } from "../../../constants/partcolor";
import { SetStateAction, useContext } from "react";
import { ThemeContext } from "../../../context/IsDark/IsDark";
import { theme } from "../../../styles/theme/theme";

interface IToggle {
  text: string;
  part: string;
  setPart: React.Dispatch<SetStateAction<string>>;
}

function Toggle({ text, part, setPart }: IToggle) {
  const { isDark } = useContext(ThemeContext);
  return (
    <Button
      type="button"
      onClick={() => setPart(text)}
      color={part == text ? PART_COLOR[part] : "black"}
      bordercolor={part == text ? PART_COLOR[part] : "lightgray"}
      width="70px"
      height="36px"
      borderwidth={isDark ? "1.5px" : "2px"}
    >
      <Typo
        weight="600"
        fontSize="14"
        color={
          part == text
            ? PART_COLOR[part]
            : isDark
            ? theme.mode.dark.main
            : theme.mode.light.main
        }
      >
        {text.toUpperCase()}
      </Typo>
    </Button>
  );
}

export default Toggle;
