import { css } from "@emotion/react";
import Typo from "../../../../components/Typo/Typo";

type DateType = {
  expireAt: string;
};

function Deadline({ expireAt }: DateType) {
  console.log(new Date(expireAt));

  const start = new Date();
  const end = new Date(expireAt);

  const gap = end.getTime() - start.getTime();

  const dayUnit = 1000 * 60 * 60 * 24;
  let day = Math.floor(gap / dayUnit);

  const hourUnit = 1000 * 60 * 60;
  const rest = gap - day * dayUnit;
  let hour = Math.floor(rest / (1000 * 60 * 60));

  const minuteUnit = 1000 * 60;
  let minute = Math.floor((rest - hour * hourUnit) / minuteUnit);

  if (gap <= 0) {
    day = 0;
    hour = 0;
    minute = 0;
  }

  return (
    <div
      css={css`
        span {
          padding: 0px 3px;
        }
      `}
    >
      <Typo fontSize="22" weight="600">
        마감까지
      </Typo>
      <Typo weight="600" color="darkblue" fontSize="40">
        {day}
      </Typo>
      <Typo fontSize="22" weight="600">
        일
      </Typo>
      <Typo weight="600" color="darkblue" fontSize="40">
        {hour}
      </Typo>
      <Typo fontSize="22" weight="600">
        시간
      </Typo>
      <Typo weight="600" color="darkblue" fontSize="40">
        {minute}
      </Typo>
      <Typo fontSize="22" weight="600">
        분
      </Typo>
    </div>
  );
}

export default Deadline;
