import Banner from "../../components/Banner/Banner";
import PartToggle from "../../components/PartToggle/PartToggle";
import Item from "../../components/ListItem/ContactIndex/index";
import * as Styled from "./style";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/IsDark/IsDark";
import { ItemContextProvider } from "../../utils/contact/ContactItemProvider";
import useFilteredMember from "../../hooks/api/member/useFilteredMember";

function Contact() {
  const [selectedToggle, setSelectedToggle] = useState("all");
  const { isDark } = useContext(ThemeContext);

  const data = useFilteredMember(selectedToggle);
  if (!data) return;

  return (
    <Styled.Wrapper>
      <Banner type="CONTACT" logowidth="450" logoheight="450" />
      <Styled.Toggle>
        <PartToggle part={selectedToggle} setPart={setSelectedToggle} />
      </Styled.Toggle>
      <ItemContextProvider>
        <Styled.Items>
          {data
            .filter((item) => +item.id !== 2)
            ?.map((item) => (
              <Item
                key={item.id}
                id={+item.id}
                isDark={isDark}
                file={item.imageUrl}
                name={item.name}
                part={item.part}
                introduce={item.introduction}
                githuburl={item.githubAddress || undefined}
                instaid={item.instagramId || undefined}
              />
            ))}
        </Styled.Items>
      </ItemContextProvider>
    </Styled.Wrapper>
  );
}

export default Contact;
