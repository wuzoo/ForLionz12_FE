import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 70%;
  margin-top: 40px;
`;

export const InformBox = styled.div`
  display: grid;
  padding: 20px 0px;
  margin: 20px 0px;
  grid-template-columns: 1.3fr 3fr;
  gap: 5px;
`;

export const ProfilePartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
  border-right: 1px solid ${(props) => props.theme.color.lightgray};
`;

export const AlignWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const IntroWrapper = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const UploadBtn = styled.label`
  cursor: pointer;
  padding: 8px;
  width: 120px;
  text-align: center;
  border-radius: 6px;
  background-color: ${(props) => props.theme.color.darkblue};
`;

export const FileInput = styled.input`
  display: none;
`;

export const EditText = styled.p`
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: ${(props) => props.theme.color.darkblue};
`;

export const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.p`
  border: none;
  font-size: 40px;
  font-weight: ${(props) => props.theme.weight.semibold};
`;

export const Introduce = styled.p`
  border: none;
  font-size: 18px;
  line-height: 1.3;
  font-weight: ${(props) => props.theme.weight.regular};
  color: ${(props) => props.theme.color.darkgray};
`;

export const EditingName = styled.input`
  font-size: 32px;
  font-weight: ${(props) => props.theme.weight.semibold};
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.color.lightgray};

  &:focus {
    outline: none;
    border-width: 2px;
    border-color: ${(props) => props.theme.color.darkblue};
  }
`;

export const EditingIntro = styled.textarea`
  font-size: 18px;
  font-weight: ${(props) => props.theme.weight.regular};
  color: ${(props) => props.theme.color.darkgray};
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.color.lightgray};
  min-width: 500px;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.color.darkblue};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Btn = styled.button`
  border: none;
  background-color: transparent;

  p {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.color.darkblue};
    text-underline-offset: 4px;
    cursor: pointer;
    text-align: start;
  }
`;
