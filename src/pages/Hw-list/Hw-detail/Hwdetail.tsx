import Typo from "../../../components/Typo/Typo";
import { Link, useNavigate } from "react-router-dom";
import * as Styled from "./style";
import { css } from "@emotion/react";
import { PART_COLOR } from "../../../constants/partcolor";
import Button from "../../../components/Button/Button";
import { useGetAssignmentById } from "../../../hooks";
import getFormedDate from "../../../utils/getFormedDate";
import Deadline from "./components/Deadline";
import { theme } from "../../../styles/theme/theme.ts";
import AdminModifyBtn from "../../../components/Button/AdminModifyBtn.tsx";
import { ERROR } from "../../../constants/message.ts";
import git from "../../../assets/icons/github/img.svg";

interface IHwDetail {
  clickedId: number;
}

function Hwdetail({ clickedId }: IHwDetail) {
  const { data, error } = useGetAssignmentById(clickedId);
  const uid = localStorage.getItem("id");
  const navigate = useNavigate();

  if (error === "rejected") throw new Error(ERROR.ID_ASSIGNMENT);
  if (!data) return;

  const { content, title, createdAt, expireAt, tags, part, id } = data;

  return (
    <>
      <div
        css={css`
          ${theme.flexRow("space-between", "", 16)}
        `}
      >
        <Styled.MainWrapper>
          <Styled.TitleAndModifyBtnWrapper>
            <Styled.Title>
              <Typo fontSize="44" weight="600">
                {title}
              </Typo>
            </Styled.Title>
            <AdminModifyBtn
              type="assignment"
              uid={uid + ""}
              id={clickedId + ""}
            />
          </Styled.TitleAndModifyBtnWrapper>
          <Styled.Wrapper>
            <Styled.Badge
              css={css`
                background-color: ${theme.color[
                  PART_COLOR[part.toLowerCase()]
                ]};
              `}
            >
              {part.toUpperCase()}
            </Styled.Badge>
            <Styled.Date>
              <Typo fontSize="14" color="darkgray">
                작성일: {getFormedDate(createdAt)}
              </Typo>
            </Styled.Date>
          </Styled.Wrapper>
          <Styled.TagWrapper>
            {tags.map((item) => (
              <Styled.Tag key={item}>{item}</Styled.Tag>
            ))}
          </Styled.TagWrapper>
        </Styled.MainWrapper>
        <div
          css={css`
            ${theme.flexColumn("", "end", 16)}
          `}
        >
          <Deadline expireAt={expireAt} />
          <Styled.AssignmentLink>
            <img src={git} width="50" />
            <Link to={data?.githubLink}>
              <Typo color="darkblue">{data.githubLink}</Typo>
            </Link>
          </Styled.AssignmentLink>
        </div>
      </div>
      <Styled.ContentWrapper>
        <Styled.Content>{content}</Styled.Content>
      </Styled.ContentWrapper>
      <div
        css={css`
          place-self: center;
          position: relative;
          top: 40px;
        `}
      >
        <Button
          onClick={() => navigate(`/homework-submit/${id}`)}
          bgcolor="darkblue"
          color="white"
          padding="5px 15px"
        >
          제출하러 가기
        </Button>
      </div>
    </>
  );
}

export default Hwdetail;
