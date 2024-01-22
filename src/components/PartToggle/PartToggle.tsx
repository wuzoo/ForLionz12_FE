import Toggle from "./components/Toggle";
import * as Styled from "./style";
import { IToggle } from "./types";

function PartToggle({ part, showfe, showbe, showstaff }: IToggle) {
  return (
    <Styled.Wrapper>
      <Toggle text="fe" onClick={showfe} part={part} />
      <Toggle text="be" onClick={showbe} part={part} />
      <Toggle text="staff" onClick={showstaff} part={part} />
    </Styled.Wrapper>
  );
}

export default PartToggle;
