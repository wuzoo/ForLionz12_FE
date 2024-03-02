import styled from "@emotion/styled";

export const Container = styled.div`
  ${(props) => props.theme.flexColumn()}
`;

export const StatusWrapper = styled.div`
  place-self: center;
  width: 90%;
  ${(props) => props.theme.flexColumn("", "", 10)}

  button {
    place-self: end;
  }
`;

export const MyTextArea = styled.textarea`
  min-height: 100px;
  font-size: 16px;
  border: 1.5px solid ${(props) => props.theme.color.lightgray};
  border-radius: 10px;
  padding: 10px;
`;

export const LinkWrapper = styled.div`
  ${(props) => props.theme.flexRow("", "center", 10)}

  a {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.color.darkblue};
    text-underline-offset: 4px;
  }
`;
