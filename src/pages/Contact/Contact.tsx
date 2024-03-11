import Banner from "../../components/Banner/Banner";
import PartToggle from "../../components/PartToggle/PartToggle";
import Item from "../../components/ListItem/ContactIndex/index";
import * as Styled from "./style";
import { useContext, useState } from "react";
import { useAllMember } from "../../hooks";
import { ERROR } from "../../constants/message";
import { ThemeContext } from "../../context/IsDark/IsDark";
import { ItemContextProvider } from "../../utils/contact/ContactItemProvider";

function Contact() {
  const [selectedToggle, setSelectedToggle] = useState("all");

  const { error, data } = useAllMember();
  const { isDark } = useContext(ThemeContext);

  if (error === "rejected") {
    throw new Error(ERROR.ALL_MEMBER);
  }
  if (!data) {
    return;
  }

  const filterData = () => {
    if (selectedToggle === "all") {
      return data;
    } else {
      return data?.filter((item) => item.part === selectedToggle.toUpperCase());
    }
  };

  return (
    <Styled.Wrapper>
      <Banner type="CONTACT" logowidth="450" logoheight="450" />
      <Styled.Toggle>
        <PartToggle part={selectedToggle} setPart={setSelectedToggle} />
      </Styled.Toggle>
      <ItemContextProvider>
        <Styled.Items>
          {filterData()
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
