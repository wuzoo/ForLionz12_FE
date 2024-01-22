import Banner from "../../components/Banner/Banner";
import PartToggle from "../../components/PartToggle/PartToggle";
import useSelectedPart from "../../hooks/useSelectedPart";
import Item from "./components/ContactItem";
import * as Styled from "./style";

function Contact() {
  const [part, feclick, beclick, staffclick] = useSelectedPart("part");

  return (
    <Styled.Wrapper>
      <Banner type="contact" logowidth="500" logoheight="500" />
      <Styled.Toggle>
        <PartToggle
          part={part}
          showfe={feclick}
          showbe={beclick}
          showother={staffclick}
        />
      </Styled.Toggle>
      <Styled.Items>
        <Item
          name="최주용"
          part="fe"
          introduce="안녕하세요 내이름은 최주용이고 나는 진짜로 프론트 엔드의 왕이 될거에요."
          githuburl="https://github.com/wuzoo"
        />
        <Item
          name="한수현"
          part="be"
          introduce="안녕하세요 내이름은 최주용이고 나는 진짜로 프론트 엔드의 왕이 될거에요."
          githuburl="https://github.com/soozzang"
          instaid="bn_sj2013"
        />
      </Styled.Items>
    </Styled.Wrapper>
  );
}

export default Contact;
