import Banner from "../../components/Banner/Banner";
import PartToggle from "../../components/PartToggle/PartToggle";
import Item from "../../components/ListItem/ContactIndex/ContactItem";
import * as Styled from "./style";
import { useState } from "react";
import { useAllMember } from "../../hooks";
import { ERROR } from "../../constants/message";

function Contact() {
  const [selectedToggle, setSelectedToggle] = useState("all");

  const { error, data } = useAllMember();

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
      <Styled.Items>
        {filterData()
          .filter((item) => +item.id !== 2)
          ?.map((item) => (
            <Item
              key={item.id}
              file={item.imageUrl}
              name={item.name}
              part={item.part}
              introduce={item.introduction}
              githuburl={item.githubAddress || undefined}
              instaid={item.instagramId || undefined}
            />
          ))}
      </Styled.Items>
    </Styled.Wrapper>
  );
}

export default Contact;
