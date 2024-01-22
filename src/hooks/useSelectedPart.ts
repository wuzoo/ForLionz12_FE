import { useState } from "react";

type ReturnTypes = [string, () => void, () => void, () => void, boolean];

function useSelectedPart(type: string): ReturnTypes {
  const [part, setPart] = useState("");
  const [flag, setFlag] = useState(false);

  const feclickhandler = () => {
    console.log("fe clicked !");
    setPart("fe");
  };
  const beclickhandler = () => {
    console.log("be clicked !");
    setPart("be");
  };
  const otherclickhandler = () => {
    if (type == "part") {
      setPart("staff");
    } else if (type == "notice") {
      setFlag(true);
      setPart("all");
    }
  };

  return [part, feclickhandler, beclickhandler, otherclickhandler, flag];
}

export default useSelectedPart;
