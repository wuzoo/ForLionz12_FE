import styled from "@emotion/styled";

export const Title = styled.p`
  word-wrap: normal;
`;

export const Content = styled.p`
  width: auto;
  line-height: 1.2;
  padding-left: 8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration-color: white;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
