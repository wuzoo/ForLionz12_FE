import styled from "@emotion/styled";

export const Wrapper = styled.form`
  width: 70%;
  ${(props) => props.theme.flexColumn("", "", 50)}
  margin-top: 100px;
`;

export const TitleInput = styled.input`
  width: 100%;
  margin-top: 10px;
  padding: 5px;
  border: 1px solid ${(props) => props.theme.color.lightgray};
  border-radius: 6px;
  font-size: 18px;
`;

export const Img = styled.img`
  border: 1px solid ${(props) => props.theme.color.lightgray};
  border-radius: 5px;
  padding: 5px;
  object-fit: cover;
  width: 40px;
  height: 40px;
`;

export const SelectTag = styled.select`
  font-size: 18px;
  border: 1px solid ${(props) => props.theme.color.lightgray};
  padding: 5px;
  border-radius: 6px;

  option {
    color: ${(props) => props.theme.color.darkblue};
  }
`;

export const CheckBoxWrapper = styled.div`
  ${(props) => props.theme.flexRow("", "center", 10)}
`;

export const ContentInput = styled.textarea`
  width: 100%;
  min-height: 200px;
  font-size: 18px;
  border-radius: 10px;
  margin-top: 10px;
  border: 1px solid ${(props) => props.theme.color.lightgray};
`;

export const FileInput = styled.input`
  display: none;
`;

export const PreviewImg = styled.img`
  object-fit: cover;
  border-radius: 10px;
`;

export const HorizonWrapper = styled.div`
  ${(props) => props.theme.flexRow("", "center", 10)}
  margin-top: 10px;
`;

export const FileLabel = styled.label`
  width: 40px;
  height: 40px;
`;

export const MdBtnWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-left: 40px;
`;

export const SubmitBtnWrapper = styled.div`
  width: 100%;
  ${(props) => props.theme.flexRow("center", "", 20)}

  button {
    width: 120px;
    height: 36px;
  }
`;

export const ContentTitleAndBtnWrapper = styled.div`
  ${(props) => props.theme.flexRow("", "end")}
`;

export const ContentTitleWrapper = styled.div`
  ${(props) => props.theme.flexRow("space-between")}
`;
