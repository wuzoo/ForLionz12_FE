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
import useOwnSubmission from "../../hooks/api/assignment/useOwnSubmission";

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

  if (!id) throw new Error("no assignment id in params");

  const { data: mySubmission, reFetch: mySubmitUpdate } = useOwnSubmission(+id);

  const { data: submittedData, reFetch: allSubmitUpate } =
    useSubmittedAssignments(+id);
  const [isSubmitted, setFormStatus] = useState<boolean>(
    Boolean(mySubmission?.memberId !== 0)
  );

  useEffect(() => {
    if (isSubmitted) {
      mySubmitUpdate();
      allSubmitUpate();
    }
  }, [isSubmitted]);

  if (!mySubmission) return;

  const recentSubmitted = submittedData?.concat()?.sort((a, b) => cmp(a, b));

  return (
    <Styled.Wrapper>
      <Banner type="HW_SUBMIT" logowidth="500" logoheight="500" />

      <RecentUploader cnt={recentSubmitted?.length || 0}>
        {recentSubmitted?.map((item) => (
          <Card
            cnt={recentSubmitted?.length}
            name={item.memberName}
            uid={item.memberId}
            content={item.description}
            link={item.assignmentLink}
          />
        ))}
      </RecentUploader>

      <Margin gap="100" />

      <AssignForm
        description={mySubmission?.description}
        assignmentLink={mySubmission?.assignmentLink}
        id={id}
        isSubmitted={isSubmitted}
        onSubmit={setFormStatus}
      />
      <AssignStatus
        link={mySubmission?.assignmentLink}
        description={mySubmission?.description}
        createdAt={mySubmission?.createdAt}
        id={id}
        isSubmitted={isSubmitted}
        onModify={setFormStatus}
      />
      <Margin gap="80" />
      <div css={Styled.AlignStyle}>
        <Styled.OtherHwWrapper>
          <MainAndSubtitle
            main="과제 제출 목록"
            sub={SUB_TEXT.HW_OTHER}
            {...fixedProps}
          />

          <CurrentSubmit count={submittedData?.length || 0} />
        </Styled.OtherHwWrapper>
        <Styled.List>
          {submittedData?.map((item) => (
            <SubmitItem
              key={item.id}
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
