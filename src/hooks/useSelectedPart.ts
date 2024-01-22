import { useState } from "react";

type ReturnTypes = [string, () => void, () => void, () => void];

function useSelectedPart(): ReturnTypes {
  const [part, setPart] = useState("");

  const feclickhandler = () => {
    console.log("fe clicked !");
    setPart("fe");
  };
  const beclickhandler = () => {
    console.log("be clicked !");
    setPart("be");
  };
  const staffclickhandler = () => {
    console.log("staff clicked !");
    setPart("staff");
  };

  return [part, feclickhandler, beclickhandler, staffclickhandler];
}

export default useSelectedPart;
