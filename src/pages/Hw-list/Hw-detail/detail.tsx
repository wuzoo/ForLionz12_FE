import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetAssignmentById } from "../../../hooks";
import { ERROR } from "../../../constants/message";
import Typo from "../../../components/Typo/Typo";
import AdminModifyBtn from "../../../components/Button/AdminModifyBtn.tsx";
import getFormedDate from "../../../utils/getFormedDate";
import Deadline from "./components/Deadline";
import * as Styled from "./style.ts";
import { css } from "@emotion/react";
import { theme } from "../../../styles/theme/theme";
import { PART_COLOR } from "../../../constants/partcolor";
import github from "../../../assets/icons/github/img.svg";
import Button from "../../../components/Button/Button.tsx";

function Detail() {
  const { id } = useParams();
  const uid = localStorage.getItem("id");
  const navigate = useNavigate();

  if (!uid) throw new Error(ERROR.NO_ID);
  if (!id) throw new Error(ERROR.ROUTE_NO_PARAM);
  const { data } = useGetAssignmentById(+id);

  if (!data) return;

  console.log(data);

  return (
    <Styled.PageWrapper>
      <div
        css={css`
          ${theme.flexColumn("", "", 16)}
          margin-bottom: 30px;
        `}
      >
        <div>
          <Styled.Title>
            <Typo fontSize="48" weight="600">
              {data?.title}
            </Typo>
          </Styled.Title>
          <AdminModifyBtn type="assignment" uid={uid} id={id} />
        </div>
        <div
          css={css`
            ${theme.flexRow("", "center", 10)}
          `}
        >
          <Styled.Badge
            css={css`
              background-color: ${theme.color[
                PART_COLOR[data?.part.toLowerCase()]
              ]};
            `}
          >
            {data?.part.toUpperCase()}
          </Styled.Badge>
          <p>
            <Typo fontSize="14" color="darkgray">
              작성일: {getFormedDate(data?.createdAt)}
            </Typo>
          </p>
        </div>
        <Styled.TagWrapper>
          {data?.tags.map((item) => (
            <Styled.Tag key={item}>{item}</Styled.Tag>
          ))}
        </Styled.TagWrapper>
        <div
          css={css`
            ${theme.flexRow("space-between", "center")}
            margin-top: 10px;
          `}
        >
          <Styled.AssignmentLink>
            <img width="54" src={github} />
            <Link to={data?.githubLink}>
              <Typo color="darkblue">{data?.githubLink}</Typo>
            </Link>
          </Styled.AssignmentLink>
          <Deadline isModal={false} expireAt={data?.expireAt} />
        </div>
      </div>
      <div
        css={css`
          min-height: 40vh;
        `}
      >
        <Styled.Content>{data?.content}</Styled.Content>
      </div>
      <div
        css={css`
          place-self: center;
          margin-top: 20px;
        `}
      >
        <Button
          color="white"
          padding="5px 20px"
          onClick={() => navigate(`/homework-submit/${id}`)}
        >
          제출하러 가기
        </Button>
      </div>
    </Styled.PageWrapper>
  );
}

export default Detail;
