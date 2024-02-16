export const TEXT: IText = {
  LOGIN: "LIKELION\nINHA UNIV 12기와\n함께하기", //
  HOME_MAIN_TEXT: "Growl\nTo Growth\nWelcome", //
  HOME_GREETING: "님 반갑습니다", //
  CONTACT: "사자들의 정보를 볼 수 있어요.",
  NOTIFICATION: "어떤 일이 기다리고 있을까요 ?", //
  HW_LIST: "나의 과제 목록을 확인하세요.", //
  HW_SUBMIT: "과제 제출 페이지입니다. 다른 아기사자들의 과제도 구경해보세요.", //
  "Q&A": "깨달음은 호기심으로부터.",
  PROFILE: "사자들에게 보여질 프로필을 수정할 수 있어요.", //
};

export const SUB_TEXT: ISubText = {
  HW_OTHER_PART: "다른 파트의 과제들을 구경할 수 있어요.",
  HW_RECENT_UPLOAD: "최근 업로드된 아기사자의 과제를 구경하세요 !",
  HW_EXPLAIN: "짧게 적어도 됩니다. 자신의 과제를 마음껏 표현해주세요.",
  HW_LINK: "과제 깃허브 링크 또는 배포 링크",
  HW_OTHER: "아기사자들의 과제들을 구경해요.",
  QNA_TITLE: "제목을 입력해주세요.",
  QNA_TAGS: "질문 내용에 해당하는 태그를 선택해주세요.",
  QNA_CONTENT: "궁금한 점을 자세히 알려주세요.",
};

interface ISubText {
  [key: string]: string;
  HW_OTHER_PART: string;
  HW_RECENT_UPLOAD: string;
  HW_EXPLAIN: string;
  HW_LINK: string;
  HW_OTHER: string;
  QNA_TITLE: string;
  QNA_TAGS: string;
  QNA_CONTENT: string;
}

interface IText {
  [key: string]: string;
  LOGIN: string;
  HOME_MAIN_TEXT: string;
  HOME_GREETING: string;
  CONTACT: string;
  NOTIFICATION: string;
  HW_LIST: string;
  HW_SUBMIT: string;
  "Q&A": string;
  PROFILE: string;
}
