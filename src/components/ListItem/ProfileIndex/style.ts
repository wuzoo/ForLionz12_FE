import styled from "@emotion/styled";

export const Container = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.color.lightgray};
  padding: 30px;
`;

export const LeftColumn = styled.div`
  ${(props) => props.theme.flexRow("", "center")}
`;

export const Icon = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 40px;
  height: 40px;
`;

export const TextWrapper = styled.div`
  ${(props) => props.theme.flexColumn("", "", 6)}
  padding-left: 12px;
`;

export const Input = styled.input`
  padding: 6px;
  border-radius: 4px;
  min-width: 50%;
  border: 1px solid ${(props) => props.theme.color.lightgray};
  font-size: 16px;

  &:focus {
    outline: none;
    border-width: 2px;
    border-color: ${(props) => props.theme.color.darkblue};
  }
`;

export const Edit = styled.p`
  text-align: center;
  cursor: pointer;
  width: 50px;
`;

export const Form = styled.form`
  width: 100%;
  ${(props) => props.theme.flexRow("space-between", "center")}
`;
