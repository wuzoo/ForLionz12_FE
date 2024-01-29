import Banner from "../../components/Banner/Banner";
import PartToggle from "../../components/PartToggle/PartToggle";
import useSelectedPart from "../../hooks/useSelectedPart";
import ListItem from "../../components/ListItem/NoticeIndex/ListItem";
import * as Styled from "./style";

function Notification() {
  const [part, feclick, beclick, allclick] = useSelectedPart("notice");

  return (
    <Styled.Wrapper>
      <Banner type="notification" logowidth="500" logoheight="500" />
      <Styled.Toggle>
        <PartToggle
          part={part}
          showfe={feclick}
          showbe={beclick}
          showother={allclick}
          flag={true}
        />
      </Styled.Toggle>
      <Styled.Items>
        <ListItem
          part="fe"
          content="멋쟁이사자처럼은 지금까지의 일정을 모두 뒤로하고 폐지하기로 결정하였습니다. 죄송합니다."
          date="2023-04-10 19:00:00"
        />
        <ListItem
          part="be"
          content="저 Spring 모릅니다.. 저한테 물어보시면 큰일나요."
          date="2023-04-10 19:00:00"
        />
      </Styled.Items>
    </Styled.Wrapper>
  );
}

export default Notification;
