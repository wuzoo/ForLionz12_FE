import Banner from "../../components/Banner/Banner";
import PartToggle from "../../components/PartToggle/PartToggle";
import Item from "../../components/ListItem/ContactIndex/ContactItem";
import * as Styled from "./style";
import { useState } from "react";
import { useAllMember } from "../../hooks";

function Contact() {
  const [selectedToggle, setSelectedToggle] = useState("all");

  const { error, data } = useAllMember();

  if (error === "rejected") {
    throw new Error("contact page error");
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

  console.log(data);

  return (
    <Styled.Wrapper>
      <Banner type="CONTACT" logowidth="400" logoheight="430" />
      <Styled.Toggle>
        <PartToggle part={selectedToggle} setPart={setSelectedToggle} />
      </Styled.Toggle>
      <Styled.Items>
        {filterData()?.map((item) => (
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
