import styled from "@emotion/styled";

export const Form = styled.form`
  margin-top: 50px;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Input = styled.input`
  margin-top: 10px;
  padding: 5px;
  border: 1px solid ${(props) => props.theme.color.lightgray};
  border-radius: 6px;
  font-size: 18px;
`;

export const TitleInput = styled(Input)`
  width: 100%;
`;

export const ContentInput = styled.textarea`
  width: 100%;
  min-height: 200px;
  font-size: 18px;
  border-radius: 10px;
  margin-top: 10px;
  border: 1px solid ${(props) => props.theme.color.lightgray};
`;

export const Btn = styled.span`
  background-color: transparent;
  border: none;
`;

export const HorizontalAlignWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
`;

export const PartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;
