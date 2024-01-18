import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const page = css`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const loginbox = css`
  max-width: 60vw;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15rem;
`;

export const welcometext = css`
  font-size: 32px;
  font-weight: 600;
  text-align: right;
  place-self: end;
  line-height: 1.2;
`;

export const Input = styled.input`
  border: 2px solid ${(props) => props.theme.color.lightgray};
  width: 30vw;
  height: 50px;
  margin: 5px 0px;
  border-radius: 10px;

  &::placeholder {
    padding-left: 24px;
    font-size: 18px;
  }

  &:focus {
    border-color: ${(props) => props.theme.color.darkblue};
  }
`;

export const loginbtn = styled.button`
  width: 70%;
  border: none;
  background-color: ${(props) => props.theme.color.darkblue};
  margin-top: 2rem;
  height: 40px;
  border-radius: 10px;
`;
