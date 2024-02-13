import Banner from "../../components/Banner/Banner";
import MainAndSubtitle from "../../components/MainAndSubtitle";
import { SUB_TEXT } from "../../constants/text";
import * as Styled from "./style";
import SubmitItem from "../../components/ListItem/As-submitIndex/SubmitItem";
import Margin from "./components/ContentGap/ContentGap";
import CurrentSubmit from "./components/CurrentSubmittedText/CurrentSubmitted";
import AssignStatus from "./components/AssignStatus/AssignStatus";
import AssignForm from "./components/AssignForm/AssignForm";
import RecentUploader from "./components/RecentUploader/RecentUploader";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/RecentUploadedCard";
import useSubmittedAssignments from "../../hooks/api/assignment/useSubmitedAssignments";
import { ISubmitted } from "../../types/Assignment";
import { useEffect, useState } from "react";
import { getMySubmission } from "../../api/assignment";

export const fixedProps = {
  fontsizes: ["30", "14"],
  colors: ["black", "darkgray"],
  gap: "4",
};

function cmp(a: ISubmitted, b: ISubmitted) {
  const firstDate = new Date(a.createdAt).getTime();
  const secondDate = new Date(b.createdAt).getTime();

  return secondDate - firstDate;
}

function HwSubmit() {
  const { id } = useParams();
  const [data, setData] = useState<ISubmitted>({
    assignmentId: 0,
    assignmentLink: "",
    createdAt: new Date().toISOString(),
    description: "",
    id: 0,
    memberId: 0,
    memberName: "",
  });

  const part = localStorage.getItem("part");

  if (!id) throw new Error("submit page id no exist");

  const getMyData = async () => {
    const res = await getMySubmission(+id);

    console.log(res.data);
    if (res.data) {
      setData(res.data);
    }
  };
  const getStatus = async () => {
    const res = await getMySubmission(+id);

    setFormStatus(Boolean(res.data));
  };

  const { data: submittedData } = useSubmittedAssignments(+id);
  const [formStatus, setFormStatus] = useState(false);

  useEffect(() => {
    if (part !== "STAFF") {
      getMyData();
    }
  }, [formStatus]);

  useEffect(() => {
    if (part !== "STAFF") {
      getStatus();
    }
  }, []);

  const { description, createdAt, assignmentLink } = data;
  const recentsubmitted = submittedData?.concat()?.sort((a, b) => cmp(a, b));

  return (
    <Styled.Wrapper>
      <Banner type="assignsubmit" logowidth="500" logoheight="500" />

      <RecentUploader cnt={recentsubmitted?.length || 0}>
        {recentsubmitted?.map((item) => (
          <Card
            cnt={recentsubmitted?.length}
            name={item.memberName}
            uid={item.memberId}
            content={item.description}
            link={item.assignmentLink}
          />
        ))}
      </RecentUploader>

      <Margin gap="100" />

      <AssignForm
        description={description}
        assignmentLink={assignmentLink}
        id={id}
        isSubmitted={formStatus}
        onSubmit={setFormStatus}
      />
      <AssignStatus
        link={assignmentLink}
        description={description}
        createdAt={createdAt}
        id={id}
        isSubmitted={formStatus}
        onModify={setFormStatus}
      />
      <Margin gap="80" />
      <div css={Styled.AlignStyle}>
        <Styled.OtherHwWrapper>
          <MainAndSubtitle
            main="과제 제출 목록"
            sub={SUB_TEXT.hwother}
            {...fixedProps}
          />

          <CurrentSubmit count={submittedData?.length || 0} />
        </Styled.OtherHwWrapper>
        <Styled.List>
          {submittedData?.map((item) => (
            <SubmitItem
              id={item.memberId}
              link={item.assignmentLink}
              name={item.memberName}
              date={item.createdAt}
              description={item.description}
            />
          ))}
        </Styled.List>
      </div>
    </Styled.Wrapper>
  );
}

export default HwSubmit;
