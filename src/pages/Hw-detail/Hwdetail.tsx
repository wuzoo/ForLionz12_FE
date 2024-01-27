import Typo from "../../components/Typo/Typo";
import { useNavigate } from "react-router-dom";
import * as Styled from "./style";

interface IHwDetail {
  clickedId: string | undefined;
}

function Hwdetail({ clickedId }: IHwDetail) {
  const navigate = useNavigate();

  const handleExit = (e: React.MouseEvent<HTMLDivElement>) => {
    const { target, currentTarget } = e;
    if (target == currentTarget) {
      navigate("/homework");
    }
  };

  return (
    <>
      <Styled.Overlay
        onClick={(e) => handleExit(e)}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ></Styled.Overlay>
      <Styled.Modal layoutId={clickedId}>
        <div>
          <Typo>백엔드 추가과제 안내</Typo>
        </div>
      </Styled.Modal>
    </>
  );
}

export default Hwdetail;
