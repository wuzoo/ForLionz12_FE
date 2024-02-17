export const ERROR = Object.freeze({
  EXPIRED: "로그인 정보가 만료되었습니다.",
  NO_AUTH: "유저 정보가 올바르지 않습니다.",
  CODE500: "정보를 불러오지 못했습니다.",

  ASSIGNMENT_UPLOAD: "과제 업로드 에러",
  NOTIFICATION_UPLOAD: "공지사항 업로드 에러",
  COMMENT_UPLOAD: "댓글 작성 에러",

  ALL_MEMBER: "모든 멤버 조회 에러",
  ALL_NOTICE: "모든 공지사항 조회 에러",
  ALL_ASSIGNMENT: "모든 과제 조회 에러",
  ALL_QNA: "모든 큐앤에이 조회 에러",
  ALL_COMMENTS: "모든 댓글 조회 에러",

  ID_ASSIGNMENT: "특정 과제 조회 에러",
  ID_NOTIFICATION: "특정 공지사항 조회 에러",
  ID_QNA: "특정 큐앤에이 조회 에러",

  PART_ASSIGNMENT: "해당 파트 과제 조회 에러",
  SUBMIT_ASSIGNMENT: "제출된 과제 조회 에러",

  MY_ASSIGNMENT: "내 제출 조회 에러",
  MY_INFO: "내 정보 조회 에러",

  NO_PART: "파트가 존재하지 않습니다.",
  NO_ID: "유저 아이디가 존재하지 않습니다.",
} as const);
