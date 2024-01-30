import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-self: center;
  width: 90%;
  gap: 10px;

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
